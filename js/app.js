/* ============================================================
   Life Journey — Main Application Logic
   Includes User Auth, Project Creator Admin Gate, UPI Payments,
   Tour Guide Engine ("Enga Pora, Enna Pandram, Enna Schedule"),
   Specific Expense Breakdown (Flight, Room, Bus, Food, Photo),
   and Satellite World View Integration.
   ============================================================ */

// ── State ──────────────────────────────────────────────────
// Ensure updated 30 rich destinations are loaded
let initialDestinations = DESTINATIONS;
try {
  const cached = JSON.parse(localStorage.getItem('lifejourney_destinations'));
  if (cached && cached.length >= 30 && cached[0].flightCost) {
    initialDestinations = cached;
  }
} catch (e) {
  initialDestinations = DESTINATIONS;
}

const State = {
  user: JSON.parse(localStorage.getItem('lifejourney_user')) || {
    id: 'user_guest',
    name: 'Traveler',
    email: 'traveler@lifejourney.com',
    role: 'traveler', // 'traveler' or 'admin'
    isCreatorVerified: false,
    balance: 50000,
    avatar: 'TR',
    isLoggedIn: false
  },
  destinations: initialDestinations,
  reviews: JSON.parse(localStorage.getItem('lifejourney_reviews')) || (typeof INITIAL_REVIEWS !== 'undefined' ? INITIAL_REVIEWS : []),
  walletTxns: JSON.parse(localStorage.getItem('lifejourney_wallet_txns')) || [
    { id: 'TXN-984210', method: 'GPay UPI', amount: 25000, type: 'credit', desc: 'Wallet Top-up via Google Pay', date: '23 Oct 2026 18:30', status: 'Success' },
    { id: 'TXN-761902', method: 'PhonePe UPI', amount: 35000, type: 'credit', desc: 'Wallet Top-up via PhonePe', date: '20 Oct 2026 11:15', status: 'Success' },
    { id: 'TXN-419821', method: 'Wallet Balance', amount: 15000, type: 'debit', desc: 'Booking Deposit — Santorini, Greece', date: '21 Oct 2026 14:00', status: 'Success' }
  ],
  trips: JSON.parse(localStorage.getItem('lifejourney_trips')) || [
    { id: 'trip_1', name: 'Santorini Caldera Retreat', destination: 'Santorini, Greece', startDate: '2026-11-10', endDate: '2026-11-18', budget: 180000, type: 'beach', notes: 'Caldera cliffside suite & golden hour sunset shoot' },
    { id: 'trip_2', name: 'Kyoto Imperial Journey', destination: 'Kyoto, Japan', startDate: '2026-12-05', endDate: '2026-12-12', budget: 145000, type: 'cultural', notes: 'Autumn foliage, kimono session & temple walks' },
    { id: 'trip_3', name: 'Dubai Luxury Desert Escape', destination: 'Dubai, UAE', startDate: '2026-11-25', endDate: '2026-11-30', budget: 98000, type: 'adventure', notes: 'Burj Khalifa, red dune safari & marina private yacht' }
  ],
  activities: JSON.parse(localStorage.getItem('lifejourney_activities')) || [
    { id: 'act_1', tripId: 'trip_1', name: 'Oia Sunset Photoshoot with dedicated photographer', date: '2026-11-11', time: '16:30', category: 'sightseeing', location: 'Byzantine Castle, Oia', notes: 'Bring coordinating linen outfits' },
    { id: 'act_2', tripId: 'trip_1', name: 'Luxury Catamaran Caldera Sailing', date: '2026-11-12', time: '10:30', category: 'adventure', location: 'Ammoudi Bay, Santorini', notes: 'Includes Greek BBQ & volcanic hot springs' },
    { id: 'act_3', tripId: 'trip_3', name: 'Lahbab Red Dune Safari & Falconry', date: '2026-11-26', time: '15:00', category: 'adventure', location: 'Lahbab Desert, Dubai', notes: '4x4 dune bashing + BBQ dinner' }
  ],
  expenses: JSON.parse(localStorage.getItem('lifejourney_expenses')) || [
    { id: 'exp_1', tripId: 'trip_1', description: 'Indigo/Emirates Flight tickets to Athens', amount: 52000, date: '2026-10-20', category: 'transport' },
    { id: 'exp_2', tripId: 'trip_1', description: 'Caldera View Luxury Suite (4 nights)', amount: 48000, date: '2026-10-21', category: 'accommodation' },
    { id: 'exp_3', tripId: 'trip_1', description: 'Dedicated Travel Photographer & Drone Reel', amount: 12500, date: '2026-10-22', category: 'sightseeing' },
    { id: 'exp_4', tripId: 'trip_3', description: 'Dubai 5-Star Hotel Stay', amount: 38000, date: '2026-10-23', category: 'accommodation' }
  ],
  savedDestinations: JSON.parse(localStorage.getItem('lifejourney_saved') || '[1, 2, 23, 24]'),
  currentTab: 'upcoming',
  currentItineraryTrip: null,
  currentGuideDestId: 1,
  budgetChart: null,
  activeUpiMethod: 'gpay',
  selectedReviewRating: 5
};

// ── Persistence ─────────────────────────────────────────────
function saveState() {
  localStorage.setItem('lifejourney_user', JSON.stringify(State.user));
  localStorage.setItem('lifejourney_destinations', JSON.stringify(State.destinations));
  localStorage.setItem('lifejourney_reviews', JSON.stringify(State.reviews));
  localStorage.setItem('lifejourney_wallet_txns', JSON.stringify(State.walletTxns));
  localStorage.setItem('lifejourney_trips', JSON.stringify(State.trips));
  localStorage.setItem('lifejourney_activities', JSON.stringify(State.activities));
  localStorage.setItem('lifejourney_expenses', JSON.stringify(State.expenses));
  localStorage.setItem('lifejourney_saved', JSON.stringify(State.savedDestinations));
}

// ── Currency Utility: Indian Rupee (₹) ──────────────────────
function formatINR(val) {
  const num = parseFloat(val) || 0;
  return '₹' + Math.round(num).toLocaleString('en-IN');
}
window.formatINR = formatINR;

// ── Utilities ───────────────────────────────────────────────
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

function formatDate(dateStr) {
  if (!dateStr) return 'N/A';
  return new Date(dateStr).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' });
}

function daysBetween(a, b) {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.max(0, Math.round((new Date(b) - new Date(a)) / msPerDay));
}

function getTripStatus(trip) {
  const today = new Date().toISOString().split('T')[0];
  if (trip.endDate < today) return 'completed';
  if (trip.startDate <= today && trip.endDate >= today) return 'ongoing';
  return 'upcoming';
}

function showToast(message, type = 'info', icon = null) {
  const icons = { success: '✅', error: '❌', info: '💡', warning: '⚠️' };
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icon || icons[type]}</span><span class="toast-text">${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, 3800);
}

function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}
window.openModal = openModal;

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('active');
}
window.closeModal = closeModal;

function animateCount(el, target, duration = 1800) {
  if (!el) return;
  const isMonetary = String(target).includes('₹') || String(target).includes('$');
  const numTarget = isMonetary ? parseInt(String(target).replace(/\D/g, '')) : target;
  let start = 0;
  const step = numTarget / (duration / 16);
  const timer = setInterval(() => {
    start = Math.min(start + step, numTarget);
    el.textContent = isMonetary ? `₹${Math.floor(start).toLocaleString('en-IN')}` : Math.floor(start).toLocaleString();
    if (start >= numTarget) clearInterval(timer);
  }, 16);
}

// ── User Authentication & Profile UI ────────────────────────
function updateUserUI() {
  const navBalanceText = document.getElementById('navBalanceText');
  const dashboardWalletBalance = document.getElementById('dashboardWalletBalance');
  const profileWalletAmount = document.getElementById('profileWalletAmount');
  const profileNameText = document.getElementById('profileNameText');
  const profileEmailText = document.getElementById('profileEmailText');
  const profileAvatarText = document.getElementById('profileAvatarText');
  const profileRoleBadge = document.getElementById('profileRoleBadge');
  const profileAdminBtn = document.getElementById('profileAdminBtn');

  // Header Elements
  const loginNavBtn = document.getElementById('loginNavBtn');
  const headerUserPill = document.getElementById('headerUserPill');
  const userAvatarBtn = document.getElementById('userAvatarBtn');
  const userPillName = document.getElementById('userPillName');
  const userPillRole = document.getElementById('userPillRole');
  const dropdownUserName = document.getElementById('dropdownUserName');
  const dropdownUserEmail = document.getElementById('dropdownUserEmail');
  const dropdownUserBadge = document.getElementById('dropdownUserBadge');
  const dropdownAdminLink = document.getElementById('dropdownAdminLink');

  // Sidebar Elements
  const slinkAdmin = document.getElementById('slink-admin');
  const slinkAdminTag = document.getElementById('slinkAdminTag');
  const sidebarBottomUser = document.getElementById('sidebarBottomUser');

  const formattedBalance = formatINR(State.user.balance || 0);

  if (navBalanceText) navBalanceText.textContent = formattedBalance;
  if (dashboardWalletBalance) dashboardWalletBalance.textContent = formattedBalance;
  if (profileWalletAmount) profileWalletAmount.textContent = formattedBalance;

  const isCreator = State.user && State.user.isLoggedIn && State.user.role === 'admin' && State.user.isCreatorVerified;

  if (State.user && State.user.isLoggedIn) {
    // Show Header Pill, Hide Login Button
    if (loginNavBtn) loginNavBtn.style.display = 'none';
    if (headerUserPill) headerUserPill.style.display = 'flex';

    if (userAvatarBtn) userAvatarBtn.textContent = State.user.avatar || 'TR';
    if (userPillName) userPillName.textContent = State.user.name;
    if (userPillRole) userPillRole.textContent = isCreator ? 'Creator' : 'Traveler';

    if (dropdownUserName) dropdownUserName.textContent = State.user.name;
    if (dropdownUserEmail) dropdownUserEmail.textContent = State.user.email;
    if (dropdownUserBadge) {
      dropdownUserBadge.textContent = isCreator ? '👑 Project Creator & Admin' : '✈️ Verified Traveler';
      dropdownUserBadge.style.color = isCreator ? 'var(--accent-primary)' : 'var(--accent-green)';
    }
    if (dropdownAdminLink) dropdownAdminLink.style.display = isCreator ? 'flex' : 'none';

    // Profile Modal
    if (profileNameText) profileNameText.textContent = State.user.name;
    if (profileEmailText) profileEmailText.textContent = State.user.email;
    if (profileAvatarText) profileAvatarText.textContent = State.user.avatar || 'TR';
    if (profileRoleBadge) {
      profileRoleBadge.textContent = isCreator ? '👑 Project Creator & Admin' : '✈️ Verified Traveler';
      profileRoleBadge.style.color = isCreator ? 'var(--accent-primary)' : 'var(--accent-green)';
    }
    if (profileAdminBtn) profileAdminBtn.style.display = isCreator ? 'inline-block' : 'none';

    // Sidebar Admin Link
    if (slinkAdmin) slinkAdmin.style.display = isCreator ? 'flex' : 'none';
    if (slinkAdminTag) slinkAdminTag.textContent = '👑';

    // Sidebar Bottom User Card
    if (sidebarBottomUser) {
      sidebarBottomUser.innerHTML = `
        <div class="sbu-card" onclick="openModal('profileModal')">
          <div class="user-avatar">${State.user.avatar || 'TR'}</div>
          <div class="sbu-info">
            <div class="sbu-name">${State.user.name}</div>
            <div class="sbu-role">${isCreator ? '👑 Creator Admin' : '✈️ Verified Traveler'}</div>
          </div>
          <button class="sbu-logout-btn" onclick="event.stopPropagation(); logoutUser();" title="Sign Out">🚪</button>
        </div>
      `;
    }
  } else {
    // Logged Out
    if (loginNavBtn) loginNavBtn.style.display = 'inline-flex';
    if (headerUserPill) headerUserPill.style.display = 'none';
    if (dropdownAdminLink) dropdownAdminLink.style.display = 'none';
    if (slinkAdmin) slinkAdmin.style.display = 'none';

    if (sidebarBottomUser) {
      sidebarBottomUser.innerHTML = `
        <div class="sbu-card sbu-guest" onclick="switchAuthMode('login'); openModal('authModal');">
          <div class="sbu-guest-icon">🔑</div>
          <div class="sbu-info">
            <div class="sbu-name">Guest Traveler</div>
            <div class="sbu-sub">Click to Sign In / Sign Up</div>
          </div>
          <span class="sbu-arrow">→</span>
        </div>
      `;
    }
  }

  renderProfileTxns();
}

function renderProfileTxns() {
  const container = document.getElementById('profileTxnsList');
  if (!container) return;
  if (!State.walletTxns || !State.walletTxns.length) {
    container.innerHTML = '<div style="font-size:0.8rem;color:var(--text-secondary);text-align:center;padding:1rem">No transactions yet</div>';
    return;
  }
  container.innerHTML = State.walletTxns.slice(0, 5).map(t => `
    <div class="txn-item">
      <div>
        <div class="txn-title">${t.desc}</div>
        <div class="txn-date">${t.date} · ${t.method}</div>
      </div>
      <div class="${t.type === 'credit' ? 'txn-credit' : 'txn-debit'}">
        ${t.type === 'credit' ? '+' : '-'}${formatINR(t.amount)}
      </div>
    </div>
  `).join('');
}

// ── Auth Mode Switcher (Sign In / Sign Up / Creator Passcode) ──
function switchAuthMode(mode) {
  const loginTab = document.getElementById('authTabLogin');
  const regTab = document.getElementById('authTabRegister');
  const creatorTab = document.getElementById('authTabCreator');
  const modalTitle = document.getElementById('authModalTitle');
  const nameGroup = document.getElementById('authNameGroup');
  const passGroup = document.getElementById('authPassGroup');
  const creatorKeyGroup = document.getElementById('authCreatorKeyGroup');
  const submitBtn = document.getElementById('authSubmitBtn');

  if (loginTab) loginTab.classList.toggle('active', mode === 'login');
  if (regTab) regTab.classList.toggle('active', mode === 'register');
  if (creatorTab) creatorTab.classList.toggle('active', mode === 'creator');

  if (mode === 'login') {
    if (modalTitle) modalTitle.textContent = '👤 Traveler Sign In';
    if (nameGroup) nameGroup.style.display = 'none';
    if (passGroup) passGroup.style.display = 'block';
    if (creatorKeyGroup) creatorKeyGroup.style.display = 'none';
    if (submitBtn) submitBtn.textContent = 'Sign In to Life Journey →';
  } else if (mode === 'register') {
    if (modalTitle) modalTitle.textContent = '✨ Create Traveler Account';
    if (nameGroup) nameGroup.style.display = 'block';
    if (passGroup) passGroup.style.display = 'block';
    if (creatorKeyGroup) creatorKeyGroup.style.display = 'none';
    if (submitBtn) submitBtn.textContent = 'Create Account (Free) →';
  } else if (mode === 'creator') {
    if (modalTitle) modalTitle.textContent = '👑 Project Creator Admin Portal Access';
    if (nameGroup) nameGroup.style.display = 'none';
    if (passGroup) passGroup.style.display = 'block';
    if (creatorKeyGroup) creatorKeyGroup.style.display = 'block';
    if (submitBtn) submitBtn.textContent = 'Verify Creator Credentials ⚡';
  }
}
window.switchAuthMode = switchAuthMode;

// ── Project Creator Verification Master Key ──────────────────
const CREATOR_MASTER_KEYS = ['creator2026', 'yusuf2026', 'yusuf786', 'lifejourney2026'];

function handleAuthSubmit(e) {
  e.preventDefault();
  const isCreatorMode = document.getElementById('authTabCreator')?.classList.contains('active');
  const isRegMode = document.getElementById('authTabRegister')?.classList.contains('active');
  const email = document.getElementById('authEmail').value.trim();
  const name = document.getElementById('authName')?.value.trim() || email.split('@')[0];
  const creatorKey = document.getElementById('authCreatorKey')?.value.trim();

  if (isCreatorMode) {
    if (CREATOR_MASTER_KEYS.includes(creatorKey)) {
      State.user = {
        id: 'creator_master',
        name: 'Yusuf (Project Creator)',
        email: email || 'creator@lifejourney.com',
        role: 'admin',
        isCreatorVerified: true,
        balance: State.user.balance || 150000,
        avatar: 'YU',
        isLoggedIn: true
      };
      saveState();
      updateUserUI();
      closeModal('authModal');
      closeModal('creatorAuthModal');
      showToast('Project Creator Verified! Full Admin Portal Access granted. 👑', 'success', '⚡');
      navigateTo('admin');
      return;
    } else {
      showToast('Invalid Creator Master Key. Access strictly restricted to Project Creator.', 'error', '🔒');
      return;
    }
  }

  // Normal Traveler login / signup
  State.user = {
    id: generateId(),
    name: name || 'Traveler',
    email: email,
    role: 'traveler',
    isCreatorVerified: false,
    balance: State.user.balance || 50000,
    avatar: (name.slice(0, 2) || 'TR').toUpperCase(),
    isLoggedIn: true
  };
  saveState();
  updateUserUI();
  closeModal('authModal');
  showToast(`Welcome to Life Journey, ${State.user.name}! ✈️`, 'success', '👋');
}
window.handleAuthSubmit = handleAuthSubmit;

function verifyCreatorFromModal(e) {
  if (e) e.preventDefault();
  const keyInput = document.getElementById('creatorModalPasscode');
  const key = keyInput ? keyInput.value.trim() : '';

  if (CREATOR_MASTER_KEYS.includes(key)) {
    State.user = {
      id: 'creator_master',
      name: 'Yusuf (Project Creator)',
      email: 'creator@lifejourney.com',
      role: 'admin',
      isCreatorVerified: true,
      balance: State.user.balance || 150000,
      avatar: 'YU',
      isLoggedIn: true
    };
    saveState();
    updateUserUI();
    closeModal('creatorAuthModal');
    showToast('Creator Identity Verified! Opening Admin Portal. 👑', 'success', '⚡');
    navigateTo('admin');
  } else {
    showToast('Incorrect Creator Passcode. Only the project creator has access.', 'error', '🔒');
  }
}
window.verifyCreatorFromModal = verifyCreatorFromModal;

function logoutUser() {
  State.user = {
    id: 'user_guest',
    name: 'Traveler',
    email: 'traveler@lifejourney.com',
    role: 'traveler',
    isCreatorVerified: false,
    balance: 50000,
    avatar: 'TR',
    isLoggedIn: false
  };
  saveState();
  updateUserUI();
  document.getElementById('userDropdownMenu')?.classList.remove('show');
  showToast('Logged out successfully. See you on your next journey!', 'info', '👋');
  navigateTo('dashboard');
}
window.logoutUser = logoutUser;

// ── UPI Payment Gateway (GPay, PhonePe, QR, VPA) ─────────────
let upiTimerInterval = null;

function openUPIModal(defaultAmount = 5000, reason = 'Wallet Recharge') {
  const modal = document.getElementById('upiPaymentModal');
  if (!modal) return;
  const customInput = document.getElementById('upiCustomAmount');
  if (customInput) customInput.value = defaultAmount;
  selectUpiAmount(defaultAmount);
  switchUpiMethod('gpay');
  const indicator = document.getElementById('upiProcessingIndicator');
  const payBtn = document.getElementById('upiPayNowBtn');
  if (indicator) indicator.style.display = 'none';
  if (payBtn) payBtn.style.display = 'block';
  startQrTimer();
  openModal('upiPaymentModal');
}
window.openUPIModal = openUPIModal;

function selectUpiAmount(amount) {
  const input = document.getElementById('upiCustomAmount');
  if (input) input.value = amount;
  document.querySelectorAll('.upi-preset-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.textContent.replace(/\D/g, '')) === amount);
  });
}
window.selectUpiAmount = selectUpiAmount;

function switchUpiMethod(method) {
  State.activeUpiMethod = method;
  document.querySelectorAll('.upi-method-card').forEach(c => c.classList.remove('active'));

  const card = document.getElementById(`method${method.charAt(0).toUpperCase() + method.slice(1)}`) ||
               document.getElementById(`method${method.toUpperCase()}`);
  if (card) card.classList.add('active');

  const gpay = document.getElementById('contentGPay');
  const phonepe = document.getElementById('contentPhonePe');
  const qr = document.getElementById('contentQR');
  const vpa = document.getElementById('contentVPA');

  if (gpay) gpay.style.display = method === 'gpay' ? 'block' : 'none';
  if (phonepe) phonepe.style.display = method === 'phonepe' ? 'block' : 'none';
  if (qr) qr.style.display = method === 'qr' ? 'block' : 'none';
  if (vpa) vpa.style.display = method === 'vpa' ? 'block' : 'none';
}
window.switchUpiMethod = switchUpiMethod;

function startQrTimer() {
  if (upiTimerInterval) clearInterval(upiTimerInterval);
  let seconds = 299; // 5 min
  const timerEl = document.getElementById('qrTimerText');
  if (!timerEl) return;
  upiTimerInterval = setInterval(() => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    seconds--;
    if (seconds < 0) {
      clearInterval(upiTimerInterval);
      timerEl.textContent = 'Expired';
    }
  }, 1000);
}

function executeUPIPayment() {
  const amount = parseFloat(document.getElementById('upiCustomAmount')?.value) || 5000;
  const methodMap = { gpay: 'Google Pay (GPay)', phonepe: 'PhonePe UPI', qr: 'BHIM UPI QR', vpa: 'UPI VPA' };
  const methodName = methodMap[State.activeUpiMethod] || 'UPI Instant Pay';

  const indicator = document.getElementById('upiProcessingIndicator');
  const payBtn = document.getElementById('upiPayNowBtn');
  if (indicator) indicator.style.display = 'block';
  if (payBtn) payBtn.style.display = 'none';

  setTimeout(() => {
    const txnId = 'TXN-' + Math.floor(100000 + Math.random() * 900000);
    const newTxn = {
      id: txnId,
      method: methodName,
      amount: amount,
      type: 'credit',
      desc: `Life Journey Wallet Deposit via ${methodName}`,
      date: new Date().toLocaleString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      status: 'Success'
    };

    State.user.balance = (State.user.balance || 0) + amount;
    State.walletTxns.unshift(newTxn);
    saveState();
    updateUserUI();
    refreshDashboardStats();
    if (window.renderAdminPage) renderAdminPage();

    if (indicator) indicator.style.display = 'none';
    if (payBtn) payBtn.style.display = 'block';
    closeModal('upiPaymentModal');

    showToast(`Payment of ${formatINR(amount)} Successful! (Ref: ${txnId})`, 'success', '⚡');
  }, 1500);
}
window.executeUPIPayment = executeUPIPayment;

// ── Customer Reviews System ──────────────────────────────────
function renderDashboardReviews() {
  const grid = document.getElementById('dashboardReviewsGrid');
  if (!grid) return;
  const reviews = State.reviews || [];

  grid.innerHTML = reviews.map(rev => {
    const stars = '★'.repeat(rev.rating) + '☆'.repeat(5 - rev.rating);
    return `
    <div class="review-card">
      <div class="review-header">
        <div class="review-user-info">
          <div class="review-avatar">${rev.userAvatar || (rev.userName ? rev.userName.slice(0, 2).toUpperCase() : 'TR')}</div>
          <div>
            <div class="review-name">${rev.userName}</div>
            <div class="review-dest">📍 ${rev.destName}</div>
          </div>
        </div>
        <span class="review-method-tag">✓ ${rev.method || 'UPI Paid'}</span>
      </div>
      <div class="review-stars">${stars}</div>
      <div class="review-comment">"${rev.comment}"</div>
      <div class="review-date">🗓️ ${rev.date}</div>
    </div>`;
  }).join('');
}

function setupStarRatingSelector() {
  const container = document.getElementById('starRatingSelector');
  if (!container) return;
  const stars = container.querySelectorAll('.star-pick');
  stars.forEach(s => {
    s.addEventListener('click', () => {
      const rating = parseInt(s.dataset.rating);
      State.selectedReviewRating = rating;
      stars.forEach(other => {
        other.classList.toggle('active', parseInt(other.dataset.rating) <= rating);
      });
    });
  });
}

function populateReviewDestDropdown() {
  const sel = document.getElementById('reviewDestSelect');
  if (!sel) return;
  sel.innerHTML = State.destinations.map(d => `<option value="${d.id}">${d.name}, ${d.country} ${d.flag}</option>`).join('');
}

function handleReviewSubmit(e) {
  e.preventDefault();
  const destId = parseInt(document.getElementById('reviewDestSelect').value);
  const dest = State.destinations.find(d => d.id === destId);
  const authorName = document.getElementById('reviewAuthorName').value.trim();
  const paymentMethod = document.getElementById('reviewPaymentMethod').value;
  const comment = document.getElementById('reviewComment').value.trim();

  if (!authorName || !comment) {
    showToast('Please provide your name and review experience.', 'warning');
    return;
  }

  const newReview = {
    id: 'rev-' + Date.now(),
    destId: destId,
    destName: dest ? `${dest.name}, ${dest.country}` : 'Global Travel',
    userName: authorName,
    userAvatar: authorName.slice(0, 2).toUpperCase(),
    rating: State.selectedReviewRating || 5,
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    comment,
    method: paymentMethod,
    verified: true
  };

  State.reviews.unshift(newReview);
  saveState();
  renderDashboardReviews();
  if (window.renderAdminPage) renderAdminPage();
  closeModal('addReviewModal');
  document.getElementById('reviewForm').reset();
  showToast('Thank you! Your verified review has been published on Life Journey.', 'success', '⭐');
}
window.handleReviewSubmit = handleReviewSubmit;

// ── Admin Portal Module (Restricted to Project Creator) ──────
function renderAdminPage() {
  const isCreator = State.user && State.user.isLoggedIn && State.user.role === 'admin' && State.user.isCreatorVerified;
  if (!isCreator) {
    showToast('Access Denied: Admin Portal is restricted to the Project Creator.', 'error', '🔒');
    openModal('creatorAuthModal');
    return;
  }

  // Update Overview KPIs
  const totalVolume = State.walletTxns.reduce((s, t) => s + (t.type === 'credit' ? parseFloat(t.amount || 0) : 0), 0) + 1250000;
  const totalGrossEl = document.getElementById('adminTotalGross');
  if (totalGrossEl) totalGrossEl.textContent = formatINR(totalVolume);
  const totalTripsEl = document.getElementById('adminTotalTrips');
  if (totalTripsEl) totalTripsEl.textContent = State.trips.length + 14;
  const totalPlacesEl = document.getElementById('adminTotalPlaces');
  if (totalPlacesEl) totalPlacesEl.textContent = State.destinations.length;
  const totalReviewsEl = document.getElementById('adminTotalReviews');
  if (totalReviewsEl) totalReviewsEl.textContent = State.reviews.length;

  // 1. Destinations Table
  const destTbody = document.getElementById('adminDestTableBody');
  if (destTbody) {
    destTbody.innerHTML = State.destinations.map(d => `
      <tr>
        <td>
          <div class="admin-dest-cell">
            <img src="${d.image}" class="admin-dest-thumb" alt="${d.name}" />
            <div>
              <div style="font-weight:700">${d.name} ${d.flag}</div>
              <div style="font-size:0.75rem;color:var(--text-secondary)">ID: #${d.id} · Flight: ₹${(d.flightCost || 25000).toLocaleString('en-IN')}</div>
            </div>
          </div>
        </td>
        <td>${d.country} · ${d.continent}</td>
        <td><strong>${d.avgCost}</strong></td>
        <td>⭐ ${d.rating} / 5</td>
        <td>
          <button class="btn-small danger" onclick="adminDeleteDest(${d.id})" style="padding:0.35rem 0.75rem">
            🗑️ Delete
          </button>
        </td>
      </tr>
    `).join('');
  }

  // 2. Bookings Table
  const bookingsTbody = document.getElementById('adminBookingsTableBody');
  if (bookingsTbody) {
    bookingsTbody.innerHTML = State.trips.map(t => `
      <tr>
        <td><strong>${t.name}</strong></td>
        <td>📍 ${t.destination}</td>
        <td>${formatDate(t.startDate)} → ${formatDate(t.endDate)}</td>
        <td><strong>${formatINR(t.budget)}</strong></td>
        <td><span class="admin-badge-status upcoming">${getTripStatus(t)}</span></td>
      </tr>
    `).join('');
  }

  // 3. Payments Table
  const paymentsTbody = document.getElementById('adminPaymentsTableBody');
  if (paymentsTbody) {
    paymentsTbody.innerHTML = State.walletTxns.map(txn => `
      <tr>
        <td><code>${txn.id}</code></td>
        <td><span class="review-method-tag">✓ ${txn.method}</span></td>
        <td><strong style="color:#059669">${formatINR(txn.amount)}</strong></td>
        <td>${txn.desc}</td>
        <td style="font-size:0.8rem;color:var(--text-secondary)">${txn.date}</td>
        <td><span class="admin-badge-status success">${txn.status}</span></td>
      </tr>
    `).join('');
  }

  // 4. Reviews Moderation Table
  const reviewsTbody = document.getElementById('adminReviewsTableBody');
  if (reviewsTbody) {
    reviewsTbody.innerHTML = State.reviews.map(r => `
      <tr>
        <td><strong>${r.userName}</strong></td>
        <td>${r.destName}</td>
        <td>⭐ ${r.rating} / 5</td>
        <td style="max-width:280px">"${r.comment}"</td>
        <td>${r.method}</td>
        <td>
          <button class="btn-small danger" onclick="adminDeleteReview('${r.id}')" style="padding:0.35rem 0.75rem">
            Delete
          </button>
        </td>
      </tr>
    `).join('');
  }
}
window.renderAdminPage = renderAdminPage;

function adminDeleteDest(id) {
  if (confirm('Are you sure you want to remove this destination from the Life Journey catalog?')) {
    State.destinations = State.destinations.filter(d => d.id !== id);
    saveState();
    renderAdminPage();
    renderDestCards(State.destinations.slice(0, 8), 'featuredDestinations');
    renderExploreGrid(State.destinations);
    if (window.renderMapSidebar) window.renderMapSidebar();
    showToast('Destination deleted from catalog.', 'info');
  }
}
window.adminDeleteDest = adminDeleteDest;

function adminDeleteReview(id) {
  State.reviews = State.reviews.filter(r => r.id !== id);
  saveState();
  renderAdminPage();
  renderDashboardReviews();
  showToast('Review removed from public wall.', 'info');
}
window.adminDeleteReview = adminDeleteReview;

function handleAdminAddDest(e) {
  e.preventDefault();
  const name = document.getElementById('admDestName').value.trim();
  const country = document.getElementById('admDestCountry').value.trim();
  const continent = document.getElementById('admDestContinent').value;
  const cost = document.getElementById('admDestCost').value.trim();
  const imgUrl = document.getElementById('admDestImg').value.trim();
  const desc = document.getElementById('admDestDesc').value.trim();

  const newDest = {
    id: Date.now(),
    name,
    country,
    continent,
    emoji: "📍",
    flag: "🌍",
    type: ["cultural", "city"],
    rating: 4.9,
    avgCost: cost.startsWith('₹') ? cost : `₹${cost}`,
    flightCost: 35000,
    roomCost: 28000,
    busCost: 5500,
    foodCost: 12000,
    photographerCost: 8000,
    totalPackage: 88500,
    tags: ["Must Visit", "Heritage", "Sightseeing"],
    image: imgUrl,
    coverImage: imgUrl,
    gallery: [imgUrl],
    description: desc,
    highlights: [
      `Experience iconic cultural spots in ${name}`,
      `Authentic local gourmet dining in ${country}`,
      `Dedicated scenic photography tour`
    ],
    whereWeGo: [`${name} Central City`, `${name} Scenic Viewpoint`, `${name} Historic Quarter`],
    whatWeDo: ["Guided walking tour", "Dedicated photographer portrait session", "Local feast tasting"],
    schedule: [
      { day: "Day 1", title: "Arrival & Sightseeing", timeline: [{ time: "10:00 AM", activity: "Airport pickup & hotel check-in" }, { time: "05:00 PM", activity: "Sunset walk & dinner" }] },
      { day: "Day 2", title: "Main Highlights", timeline: [{ time: "09:00 AM", activity: "Photoshoot & landmark tour" }, { time: "07:00 PM", activity: "Farewell dinner" }] }
    ],
    bestTime: "September–May",
    currency: "Indian Rupee (₹)",
    language: "English / Local",
    coordinates: [20.0, 77.0],
    timezone: "GMT+5:30"
  };

  State.destinations.unshift(newDest);
  saveState();
  closeModal('adminAddDestModal');
  document.getElementById('adminDestForm').reset();
  renderAdminPage();
  renderDestCards(State.destinations.slice(0, 8), 'featuredDestinations');
  renderExploreGrid(State.destinations);
  if (window.renderMapSidebar) window.renderMapSidebar();
  showToast(`Destination "${name}" added to Life Journey catalog! 🌍`, 'success');
}
window.handleAdminAddDest = handleAdminAddDest;

function setupAdminTabs() {
  document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const tabId = btn.dataset.admintab;
      const panel = document.getElementById(`adminPanel-${tabId}`);
      if (panel) panel.classList.add('active');
    });
  });
}

// ── Navigation Engine ────────────────────────────────────────
function navigateTo(page) {
  // Creator Admin Gate
  if (page === 'admin') {
    const isCreator = State.user && State.user.isLoggedIn && State.user.role === 'admin' && State.user.isCreatorVerified;
    if (!isCreator) {
      showToast('🔒 Admin Portal is strictly reserved for the Project Creator. Please authenticate with Creator Passcode.', 'warning');
      openModal('creatorAuthModal');
      return;
    }
  }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link, .sidebar-link').forEach(l => l.classList.remove('active'));

  const pageEl = document.getElementById(`page-${page}`);
  if (pageEl) pageEl.classList.add('active');
  const navEl = document.getElementById(`nav-${page}`);
  if (navEl) navEl.classList.add('active');
  const slinkEl = document.getElementById(`slink-${page}`);
  if (slinkEl) slinkEl.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Close mobile sidebar and dropdown if open
  document.getElementById('appSidebar')?.classList.remove('mobile-open');
  document.getElementById('sidebarBackdrop')?.classList.remove('active');
  document.getElementById('userDropdownMenu')?.classList.remove('show');

  // Page-specific initializers
  if (page === 'map') initMap();
  if (page === 'guide') renderTourGuidePage(State.currentGuideDestId);
  if (page === 'budget') renderBudgetPage();
  if (page === 'trips') renderTripsPage();
  if (page === 'itinerary') populateItinerarySelect();
  if (page === 'explore') renderExploreGrid(State.destinations);
  if (page === 'dashboard') refreshDashboardStats();
  if (page === 'admin') renderAdminPage();
}
window.navigateTo = navigateTo;

// ── Hero Particles ──────────────────────────────────────────
function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  const colors = ['#4f46e5', '#0284c7', '#f43f5e', '#059669', '#d97706'];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 6 + 2;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      --duration:${Math.random()*8+6}s;
      --delay:${Math.random()*4}s;
      opacity:${Math.random()*0.4+0.15};
    `;
    container.appendChild(p);
  }
}

// ── Animated Stats ──────────────────────────────────────────
function initHeroStats() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.dataset.target);
        animateCount(el, target, 2000);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
}

// ── Dashboard Quick Stats ────────────────────────────────────
function refreshDashboardStats() {
  const upcoming = State.trips.filter(t => getTripStatus(t) === 'upcoming').length +
                   State.trips.filter(t => getTripStatus(t) === 'ongoing').length;
  const saved = State.savedDestinations.length;
  const spent = State.expenses.reduce((s, e) => s + parseFloat(e.amount || 0), 0);
  const days = State.trips.reduce((s, t) => s + daysBetween(t.startDate, t.endDate), 0);

  animateCount(document.getElementById('upcomingCount'), upcoming);
  animateCount(document.getElementById('destinationsCount'), saved);
  const budgetSpentEl = document.getElementById('budgetSpent');
  if (budgetSpentEl) budgetSpentEl.textContent = formatINR(spent);

  const daysPlannedEl = document.getElementById('daysPlanned');
  if (daysPlannedEl) animateCount(daysPlannedEl, days);

  updateUserUI();
}

// ── Destination Cards ────────────────────────────────────────
function renderDestCards(destinations, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = destinations.map(d => buildDestCard(d)).join('');
  container.querySelectorAll('.dest-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.dest-save-btn')) {
        const id = parseInt(card.dataset.id);
        openDestDetail(State.destinations.find(d => d.id === id));
      }
    });
  });
  container.querySelectorAll('.dest-save-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      toggleSaveDestination(id, btn);
    });
  });
}

function buildDestCard(dest) {
  const isSaved = State.savedDestinations.includes(dest.id);
  const stars = buildStars(dest.rating);
  const fallbackEmoji = dest.emoji || '🌍';
  const imgUrl = dest.image || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80';

  return `
  <div class="dest-card" data-id="${dest.id}">
    <div class="dest-image-wrap">
      <img src="${imgUrl}" alt="${dest.name}, ${dest.country}" class="dest-card-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
      <div class="dest-image-fallback" style="display:none;">${fallbackEmoji}</div>
      <div class="dest-image-overlay"></div>
      <div class="dest-badge">⭐ ${dest.rating}</div>
      <span class="dest-continent-badge">${dest.continent}</span>
      <button class="dest-save-btn ${isSaved ? 'saved' : ''}" data-id="${dest.id}" title="${isSaved ? 'Saved!' : 'Save Destination'}">
        ${isSaved ? '❤️' : '🤍'}
      </button>
    </div>
    <div class="dest-info">
      <div class="dest-name">${dest.name} <span style="font-size:1.15rem">${dest.flag}</span></div>
      <div class="dest-country">📍 ${dest.country} · ${dest.continent}</div>
      
      <!-- Specific Expense Badges -->
      <div class="dest-price-breakdown-mini">
        <span>✈️ Flight: ${formatINR(dest.flightCost || 25000)}</span>
        <span>🏨 Stay: ${formatINR(dest.roomCost || 20000)}</span>
        <span>📸 Photo: ${formatINR(dest.photographerCost || 6000)}</span>
      </div>

      <div class="dest-tags">
        ${(dest.tags || []).slice(0, 3).map(t => `<span class="dest-tag">${t}</span>`).join('')}
      </div>
      <div class="dest-meta">
        <div class="dest-rating">${stars} <span>${dest.rating}</span></div>
        <div class="dest-cost">From <strong>${dest.avgCost}</strong></div>
      </div>
    </div>
  </div>`;
}

function buildStars(rating) {
  return Array.from({length: 5}, (_, i) =>
    `<span class="star${i + 0.5 > rating ? ' empty' : ''}">★</span>`
  ).join('');
}

function toggleSaveDestination(id, btn) {
  const idx = State.savedDestinations.indexOf(id);
  if (idx === -1) {
    State.savedDestinations.push(id);
    btn.innerHTML = '❤️';
    btn.classList.add('saved');
    showToast('Destination saved to your favorites! ❤️', 'success');
  } else {
    State.savedDestinations.splice(idx, 1);
    btn.innerHTML = '🤍';
    btn.classList.remove('saved');
    showToast('Destination removed from favorites.', 'info');
  }
  saveState();
  refreshDashboardStats();
}

// ── Destination Detail Modal (With 5 Specific Expenses) ───────
function openDestDetail(dest) {
  if (!dest) return;
  const cover = dest.coverImage || dest.image;
  const gallery = (dest.gallery && dest.gallery.length) ? dest.gallery : [dest.image];
  const reviewsForDest = State.reviews.filter(r => r.destId === dest.id || r.destName.includes(dest.name));

  document.getElementById('destModalTitle').textContent = `${dest.name}, ${dest.country} ${dest.flag}`;
  document.getElementById('destModalBody').innerHTML = `
    <div class="dest-detail-banner">
      <img id="destDetailMainImg" src="${cover}" alt="${dest.name}" class="dest-detail-banner-img" />
      <div class="dest-detail-banner-overlay">
        <div>
          <div class="dest-banner-title">${dest.name} ${dest.flag}</div>
          <div style="color:rgba(255,255,255,0.95);font-weight:700;font-size:1.05rem">📍 ${dest.country} · ${dest.continent}</div>
        </div>
      </div>
    </div>

    ${gallery.length > 1 ? `
    <div class="dest-gallery-container">
      <div class="dest-gallery-title">📸 Verified Destination Photo Gallery (click to view)</div>
      <div class="dest-gallery-strip">
        ${gallery.map((gUrl, idx) => `
          <div class="dest-gallery-thumb ${idx === 0 ? 'active' : ''}" onclick="switchDetailPhoto('${gUrl}', this)">
            <img src="${gUrl}" alt="${dest.name} photo ${idx + 1}" loading="lazy" />
          </div>
        `).join('')}
      </div>
    </div>
    ` : ''}

    <!-- 5 SPECIFIC EXPENSES BREAKDOWN IN RUPEES (₹) -->
    <div class="specific-expenses-card">
      <div class="sec-title">💰 Complete Transparent Expense Breakdown (₹)</div>
      <div class="sec-grid">
        <div class="sec-item">
          <div class="sec-icon">✈️</div>
          <div>
            <div class="sec-label">Flight Ticket (Roundtrip)</div>
            <div class="sec-amount">${formatINR(dest.flightCost || 25000)}</div>
          </div>
        </div>
        <div class="sec-item">
          <div class="sec-icon">🏨</div>
          <div>
            <div class="sec-label">Room / Luxury Hotel Stay</div>
            <div class="sec-amount">${formatINR(dest.roomCost || 20000)}</div>
          </div>
        </div>
        <div class="sec-item">
          <div class="sec-icon">🚌</div>
          <div>
            <div class="sec-label">Bus / AC Coach Travel</div>
            <div class="sec-amount">${formatINR(dest.busCost || 4500)}</div>
          </div>
        </div>
        <div class="sec-item">
          <div class="sec-icon">🍽️</div>
          <div>
            <div class="sec-label">Food & Gourmet Dining</div>
            <div class="sec-amount">${formatINR(dest.foodCost || 9500)}</div>
          </div>
        </div>
        <div class="sec-item sec-item-highlight">
          <div class="sec-icon">📸</div>
          <div>
            <div class="sec-label">Dedicated Travel Photographer</div>
            <div class="sec-amount">${formatINR(dest.photographerCost || 6500)}</div>
            <div style="font-size:0.75rem;color:var(--text-secondary)">DSLR Photoshoot + Drone Reels</div>
          </div>
        </div>
        <div class="sec-item sec-item-total">
          <div class="sec-icon">✨</div>
          <div>
            <div class="sec-label">Total All-Inclusive Tour Package</div>
            <div class="sec-total-amount">${formatINR(dest.totalPackage || 65000)}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="dest-detail-meta">
      <span class="dest-detail-meta-item">🗓️ Best Time: ${dest.bestTime}</span>
      <span class="dest-detail-meta-item">💰 Daily Avg: ${dest.avgCost}</span>
      <span class="dest-detail-meta-item">💱 Currency: ${dest.currency}</span>
      <span class="dest-detail-meta-item">🗣️ Language: ${dest.language}</span>
      <span class="dest-detail-meta-item">🕐 Timezone: ${dest.timezone}</span>
      <span class="dest-detail-meta-item">⭐ ${dest.rating} / 5</span>
    </div>

    <p class="dest-detail-desc">${dest.description}</p>

    <div class="dest-detail-highlights">
      <h4>🌟 Top Highlights & Sightseeing Spots</h4>
      <div class="highlight-list">
        ${(dest.highlights || []).map(h => `
          <div class="highlight-item">
            <div class="highlight-dot"></div>
            <span>${h}</span>
          </div>`).join('')}
      </div>
    </div>

    <!-- Reviews for this Destination -->
    <div style="margin-top:1.75rem;padding-top:1.5rem;border-top:1px solid var(--border-glass)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem">
        <h4>🌟 Traveler Reviews (${reviewsForDest.length})</h4>
        <button class="btn-small" onclick="closeModal('destinationModal');openModal('addReviewModal')" style="padding:0.4rem 0.8rem">
          ✍️ Add Review
        </button>
      </div>
      ${reviewsForDest.length ? `
        <div style="display:flex;flex-direction:column;gap:0.75rem">
          ${reviewsForDest.slice(0, 3).map(r => `
            <div style="background:var(--bg-card);padding:0.85rem;border-radius:var(--radius-sm);border:1px solid var(--border-glass)">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.3rem">
                <strong>${r.userName}</strong>
                <span style="font-size:0.75rem;color:#059669;font-weight:700">✓ ${r.method}</span>
              </div>
              <div style="color:#d97706;font-size:0.8rem;margin-bottom:0.3rem">${'★'.repeat(r.rating)}</div>
              <div style="font-size:0.85rem;color:var(--text-secondary)">"${r.comment}"</div>
            </div>
          `).join('')}
        </div>
      ` : '<div style="font-size:0.85rem;color:var(--text-secondary)">No reviews yet for this destination. Be the first to share your experience!</div>'}
    </div>

    <div class="dest-detail-actions">
      <button class="btn-primary" onclick="openTourGuideFor(${dest.id}); closeModal('destinationModal');" style="background:linear-gradient(135deg,#059669,#0284c7)">
        🧭 View Complete Tour Guide (Schedule & Map)
      </button>
      <button class="btn-primary" onclick="addToTripFromDest('${dest.name}', '${dest.country}'); closeModal('destinationModal');">
        ✈️ Plan a Trip Here (₹)
      </button>
      <button class="btn-primary" style="background:linear-gradient(135deg,#4f46e5,#0284c7)" onclick="viewOnMap(${dest.coordinates[0]}, ${dest.coordinates[1]}, '${dest.name}'); closeModal('destinationModal');">
        🛰️ Satellite World View
      </button>
    </div>
  `;
  openModal('destinationModal');
}
window.openDestDetail = openDestDetail;

function switchDetailPhoto(url, thumbEl) {
  const mainImg = document.getElementById('destDetailMainImg');
  if (mainImg) mainImg.src = url;
  document.querySelectorAll('.dest-gallery-thumb').forEach(t => t.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}
window.switchDetailPhoto = switchDetailPhoto;

function viewOnMap(lat, lon, name) {
  navigateTo('map');
  setTimeout(() => {
    if (window.travelMap) {
      window.travelMap.flyTo([lat, lon], 6, { duration: 1.5 });
    }
  }, 300);
}
window.viewOnMap = viewOnMap;

function addToTripFromDest(name, country) {
  openModal('addTripModal');
  const nameInput = document.getElementById('tripName');
  const destInput = document.getElementById('tripDestination');
  if (nameInput) nameInput.value = `${name} Holiday Tour`;
  if (destInput) destInput.value = `${name}, ${country}`;
}
window.addToTripFromDest = addToTripFromDest;

// ── TOUR GUIDE PAGE ENGINE ("Enga Pora, Enna Pandram, Enna Schedule") ──
function renderTourGuidePage(destId = 1) {
  State.currentGuideDestId = destId;
  const dest = State.destinations.find(d => d.id === parseInt(destId)) || State.destinations[0];
  if (!dest) return;

  // 1. Populate Guide Selector
  const selector = document.getElementById('tourGuideSelect');
  if (selector) {
    selector.innerHTML = State.destinations.map(d =>
      `<option value="${d.id}" ${d.id === dest.id ? 'selected' : ''}>${d.flag} ${d.name}, ${d.country} — ${d.avgCost}</option>`
    ).join('');
  }

  // 2. Populate Quick Chips Carousel
  const chipsContainer = document.getElementById('guideQuickChips');
  if (chipsContainer) {
    chipsContainer.innerHTML = State.destinations.map(d => `
      <button class="guide-chip-btn ${d.id === dest.id ? 'active' : ''}" onclick="selectGuideDestination(${d.id})">
        <span>${d.flag}</span>
        <span>${d.name}</span>
      </button>
    `).join('');
  }

  // 3. Render Hero Header
  const titleEl = document.getElementById('guideDestTitle');
  if (titleEl) titleEl.innerHTML = `${dest.name} Comprehensive Tour Guide <span style="font-size:1.4rem">${dest.flag}</span>`;
  const subEl = document.getElementById('guideDestSub');
  if (subEl) subEl.textContent = `📍 ${dest.country} · ${dest.continent} · Best Season: ${dest.bestTime} · Currency: ${dest.currency}`;

  // 4. Render "Enga Pora" (Where We Go)
  const whereContainer = document.getElementById('guideWhereWeGoList');
  if (whereContainer) {
    const spots = dest.whereWeGo && dest.whereWeGo.length ? dest.whereWeGo : (dest.highlights || []);
    whereContainer.innerHTML = spots.map((spot, i) => `
      <div class="guide-spot-card">
        <div class="guide-spot-num">Spot ${i + 1}</div>
        <div class="guide-spot-title">📍 ${spot}</div>
        <div class="guide-spot-desc">Vetted scenic sightseeing point included with dedicated entry and transport.</div>
      </div>
    `).join('');
  }

  // 5. Render "Enna Pandram" (What We Do)
  const whatContainer = document.getElementById('guideWhatWeDoList');
  if (whatContainer) {
    const activities = dest.whatWeDo && dest.whatWeDo.length ? dest.whatWeDo : (dest.highlights || []);
    whatContainer.innerHTML = activities.map((act, i) => `
      <div class="guide-activity-card">
        <div class="guide-act-icon">${i === 0 ? '📸' : (i === 1 ? '⛵' : (i === 2 ? '🍷' : (i === 3 ? '🍽️' : '🧗')))}</div>
        <div style="flex:1">
          <div class="guide-act-title">${act}</div>
          <div class="guide-act-sub">Full experience managed by Life Journey local coordinators.</div>
        </div>
      </div>
    `).join('');
  }

  // 6. Render "Enna Schedule" (Day-by-Day Timetable)
  const schedContainer = document.getElementById('guideScheduleTimeline');
  if (schedContainer) {
    const sched = dest.schedule && dest.schedule.length ? dest.schedule : [
      {
        day: "Day 1",
        title: "VIP Arrival, Hotel Check-in & Evening Leisure",
        timeline: [
          { time: "09:00 AM", activity: `Arrival & chauffeured pickup to 4-star stay in ${dest.name}` },
          { time: "01:00 PM", activity: "Traditional local welcome lunch & orientation" },
          { time: "05:00 PM", activity: "Sunset view and walking tour of central spots" },
          { time: "07:30 PM", activity: "Welcome dinner featuring regional specialties" }
        ]
      },
      {
        day: "Day 2",
        title: "Dedicated Photoshoot & Major Landmarks",
        timeline: [
          { time: "06:30 AM", activity: "Golden hour portrait photoshoot with dedicated DSLR photographer" },
          { time: "10:30 AM", activity: "VIP guided discovery of top historical and natural monuments" },
          { time: "02:00 PM", activity: "Gourmet lunch and market exploration" },
          { time: "07:30 PM", activity: "Evening entertainment, night bazaar, and dinner" }
        ]
      },
      {
        day: "Day 3",
        title: "Adventure Experience & Onward Departure",
        timeline: [
          { time: "08:30 AM", activity: "Scenic boat cruise or mountain exploration with drone video capturing" },
          { time: "01:00 PM", activity: "Handicrafts and souvenir shopping" },
          { time: "05:00 PM", activity: "Chauffeured transfer to airport for onward flight" }
        ]
      }
    ];

    schedContainer.innerHTML = sched.map(dayObj => `
      <div class="guide-day-box">
        <div class="guide-day-header">
          <span class="guide-day-badge">${dayObj.day}</span>
          <span class="guide-day-title">${dayObj.title}</span>
        </div>
        <div class="guide-day-timeline">
          ${(dayObj.timeline || []).map(item => `
            <div class="guide-timeline-row">
              <div class="guide-time-pill">${item.time}</div>
              <div class="guide-timeline-dot"></div>
              <div class="guide-time-act">${item.activity}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // 7. Render Specific Expenses Breakdown Card
  const flightEl = document.getElementById('guideFlightCost');
  if (flightEl) flightEl.textContent = formatINR(dest.flightCost || 25000);
  const roomEl = document.getElementById('guideRoomCost');
  if (roomEl) roomEl.textContent = formatINR(dest.roomCost || 20000);
  const busEl = document.getElementById('guideBusCost');
  if (busEl) busEl.textContent = formatINR(dest.busCost || 4500);
  const foodEl = document.getElementById('guideFoodCost');
  if (foodEl) foodEl.textContent = formatINR(dest.foodCost || 9500);
  const photoEl = document.getElementById('guidePhotoCost');
  if (photoEl) photoEl.textContent = formatINR(dest.photographerCost || 6500);
  const totalEl = document.getElementById('guideTotalPackage');
  if (totalEl) totalEl.textContent = formatINR(dest.totalPackage || 65000);

  // Hook Book Button
  const bookBtn = document.getElementById('guideBookPackageBtn');
  if (bookBtn) {
    bookBtn.onclick = () => {
      openUPIModal(dest.totalPackage || 65000, `Life Journey Package: ${dest.name}`);
    };
  }

  // 8. Render Satellite Flight Path Map
  setTimeout(() => {
    if (window.renderGuideSatelliteMap) {
      window.renderGuideSatelliteMap('guideSatelliteMap', dest);
    }
  }, 200);
}
window.renderTourGuidePage = renderTourGuidePage;

function selectGuideDestination(destId) {
  renderTourGuidePage(destId);
}
window.selectGuideDestination = selectGuideDestination;

// ── Explore Grid & Filters ───────────────────────────────────
let currentFilter = 'all';

function renderExploreGrid(destinations) {
  const grid = document.getElementById('exploreGrid');
  if (!grid) return;
  const filtered = currentFilter === 'all'
    ? destinations
    : destinations.filter(d => (d.type || []).includes(currentFilter));

  if (!filtered.length) {
    grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><h3>No destinations found</h3><p>Try clearing filters or search terms.</p></div>';
    return;
  }
  grid.innerHTML = filtered.map(d => buildDestCard(d)).join('');
  grid.querySelectorAll('.dest-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.dest-save-btn')) {
        const id = parseInt(card.dataset.id);
        openDestDetail(State.destinations.find(d => d.id === id));
      }
    });
  });
  grid.querySelectorAll('.dest-save-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      toggleSaveDestination(id, btn);
    });
  });
}

// ── Trips Page ───────────────────────────────────────────────
function renderTripsPage() {
  const container = document.getElementById('tripsContainer');
  if (!container) return;
  const filtered = State.trips.filter(t => getTripStatus(t) === State.currentTab);

  if (!filtered.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">✈️</div>
        <h3>No ${State.currentTab} trips</h3>
        <p>Start planning your next unforgettable journey today.</p>
        <button class="btn-primary" onclick="openModal('addTripModal')" style="margin-top:1rem">+ Plan a Trip</button>
      </div>`;
    return;
  }

  container.innerHTML = filtered.map(trip => {
    const days = daysBetween(trip.startDate, trip.endDate);
    const destObj = State.destinations.find(d => trip.destination.toLowerCase().includes(d.name.toLowerCase()));
    const thumbImg = destObj ? destObj.image : 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80';
    return `
    <div class="trip-card">
      <img src="${thumbImg}" class="trip-card-thumb" alt="${trip.destination}" />
      <div class="trip-card-body">
        <div class="trip-card-header">
          <div>
            <div class="trip-card-title">${trip.name}</div>
            <div class="trip-card-dest">📍 ${trip.destination}</div>
          </div>
          <span class="trip-badge ${getTripStatus(trip)}">${getTripStatus(trip)}</span>
        </div>
        <div class="trip-card-dates">🗓️ ${formatDate(trip.startDate)} → ${formatDate(trip.endDate)} (${days} days)</div>
        <div class="trip-card-budget">Budget in Rupees: <strong>${formatINR(trip.budget)}</strong></div>
        ${trip.notes ? `<div class="trip-card-notes">📝 ${trip.notes}</div>` : ''}
        <div class="trip-card-actions">
          <button class="btn-small" onclick="viewTripItinerary('${trip.id}')">🗓️ View Itinerary</button>
          <button class="btn-small" onclick="openUPIModal(${Math.round(trip.budget * 0.25)}, 'Trip Deposit: ${trip.name}')" style="background:linear-gradient(135deg,#059669,#0284c7);color:white">
            ⚡ Pay Deposit
          </button>
          <button class="btn-small danger" onclick="deleteTrip('${trip.id}')">🗑️ Delete</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function viewTripItinerary(tripId) {
  State.currentItineraryTrip = tripId;
  navigateTo('itinerary');
  const sel = document.getElementById('itineraryTripSelect');
  if (sel) {
    sel.value = tripId;
    renderItinerary(tripId);
  }
}
window.viewTripItinerary = viewTripItinerary;

function deleteTrip(tripId) {
  if (confirm('Delete this trip?')) {
    State.trips = State.trips.filter(t => t.id !== tripId);
    State.activities = State.activities.filter(a => a.tripId !== tripId);
    State.expenses = State.expenses.filter(e => e.tripId !== tripId);
    saveState();
    renderTripsPage();
    refreshDashboardStats();
    showToast('Trip deleted.', 'info');
  }
}
window.deleteTrip = deleteTrip;

function saveTrip() {
  const name = document.getElementById('tripName').value.trim();
  const destination = document.getElementById('tripDestination').value.trim();
  const startDate = document.getElementById('tripStartDate').value;
  const endDate = document.getElementById('tripEndDate').value;
  const budget = document.getElementById('tripBudget').value;
  const type = document.getElementById('tripType').value;
  const notes = document.getElementById('tripNotes').value.trim();

  if (!name || !destination || !startDate || !endDate) {
    showToast('Name, destination, start and end dates are required.', 'warning');
    return;
  }
  if (endDate < startDate) {
    showToast('End date must be after start date.', 'warning');
    return;
  }

  const newTrip = {
    id: generateId(),
    name,
    destination,
    startDate,
    endDate,
    budget: parseFloat(budget) || 100000,
    type,
    notes,
    createdAt: new Date().toISOString()
  };

  State.trips.unshift(newTrip);
  saveState();
  closeModal('addTripModal');
  ['tripName','tripDestination','tripStartDate','tripEndDate','tripBudget','tripNotes'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  renderTripsPage();
  refreshDashboardStats();
  showToast(`Trip "${name}" created! ✈️`, 'success');
}

// ── Itinerary Page ───────────────────────────────────────────
function populateItinerarySelect() {
  const sel = document.getElementById('itineraryTripSelect');
  if (!sel) return;
  sel.innerHTML = '<option value="">Select a Trip...</option>' +
    State.trips.map(t => `<option value="${t.id}">${t.name} (${t.destination})</option>`).join('');

  if (State.currentItineraryTrip) {
    sel.value = State.currentItineraryTrip;
    renderItinerary(State.currentItineraryTrip);
  } else if (State.trips.length > 0) {
    sel.value = State.trips[0].id;
    State.currentItineraryTrip = State.trips[0].id;
    renderItinerary(State.trips[0].id);
  }
}

function renderItinerary(tripId) {
  const container = document.getElementById('itineraryContent');
  if (!container) return;
  const acts = State.activities.filter(a => a.tripId === tripId);
  const trip = State.trips.find(t => t.id === tripId);

  if (!acts.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🗓️</div>
        <h3>No activities scheduled yet</h3>
        <p>Add tours, flights, dining, and photo shoots to your itinerary.</p>
        <button class="btn-primary" onclick="openModal('addActivityModal')" style="margin-top:1rem">+ Add First Activity</button>
      </div>`;
    return;
  }

  // Group by date
  const grouped = {};
  acts.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
  acts.forEach(a => {
    if (!grouped[a.date]) grouped[a.date] = [];
    grouped[a.date].push(a);
  });

  container.innerHTML = Object.entries(grouped).map(([date, dayActs]) => `
    <div class="itinerary-day-group">
      <div class="itinerary-day-label">🗓️ ${formatDate(date)}</div>
      <div class="itinerary-items-wrap">
        ${dayActs.map(act => `
          <div class="itinerary-item">
            <div class="itinerary-time">${act.time || 'All Day'}</div>
            <div class="itinerary-icon">${CATEGORY_ICONS[act.category] || '📍'}</div>
            <div class="itinerary-info">
              <div class="itinerary-name">${act.name}</div>
              ${act.location ? `<div class="itinerary-loc">📍 ${act.location}</div>` : ''}
              ${act.notes ? `<div class="itinerary-notes">📝 ${act.notes}</div>` : ''}
            </div>
            <button class="itinerary-delete" onclick="deleteActivity('${act.id}')">✕</button>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function deleteActivity(actId) {
  State.activities = State.activities.filter(a => a.id !== actId);
  saveState();
  if (State.currentItineraryTrip) renderItinerary(State.currentItineraryTrip);
  showToast('Activity removed.', 'info');
}
window.deleteActivity = deleteActivity;

function saveActivity() {
  const tripId = document.getElementById('itineraryTripSelect')?.value;
  const name = document.getElementById('activityName')?.value.trim();
  const date = document.getElementById('activityDate')?.value;
  const time = document.getElementById('activityTime')?.value;
  const category = document.getElementById('activityCategory')?.value;
  const location = document.getElementById('activityLocation')?.value.trim();
  const notes = document.getElementById('activityNotes')?.value.trim();

  if (!tripId || !name || !date) {
    showToast('Trip, activity name and date are required.', 'warning');
    return;
  }

  State.activities.push({ id: generateId(), tripId, name, date, time, category, location, notes });
  saveState();
  closeModal('addActivityModal');
  ['activityName','activityDate','activityTime','activityLocation','activityNotes'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  renderItinerary(tripId);
  showToast('Activity added to itinerary! 📅', 'success');
}

// ── Budget & Expense Tracker (INR ₹) ─────────────────────────
function populateTripSelects() {
  const selects = ['budgetTripSelect', 'expenseTripSelect'];
  selects.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const currentVal = el.value;
    const prefix = id === 'itineraryTripSelect' ? '' : '<option value="">All Trips</option>';
    el.innerHTML = prefix + State.trips.map(t => `<option value="${t.id}">${t.name} (${t.destination})</option>`).join('');
    if (currentVal) el.value = currentVal;
  });
}

function renderBudgetPage() {
  populateTripSelects();
  const allBudget = State.trips.reduce((s, t) => s + parseFloat(t.budget || 0), 0);
  const allSpent = State.expenses.reduce((s, e) => s + parseFloat(e.amount || 0), 0);
  const remaining = allBudget - allSpent;
  const pct = allBudget > 0 ? Math.min((allSpent / allBudget) * 100, 100) : 0;

  const totalEl = document.getElementById('totalBudgetDisplay');
  if (totalEl) totalEl.textContent = formatINR(allBudget);
  const barEl = document.getElementById('budgetBar');
  if (barEl) barEl.style.width = pct + '%';
  const subEl = document.getElementById('budgetSubText');
  if (subEl) subEl.textContent = `${formatINR(allSpent)} spent · ${formatINR(Math.max(0, remaining))} remaining`;

  renderExpensesList();
  renderBudgetChart();
}

function renderExpensesList(filterTripId = '') {
  const container = document.getElementById('expensesList');
  if (!container) return;
  const filtered = filterTripId
    ? State.expenses.filter(e => e.tripId === filterTripId)
    : State.expenses;

  if (!filtered.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">💸</div><h3>No expenses yet</h3><p>Track your flight, room, food, bus and photographer costs here.</p></div>`;
    return;
  }

  container.innerHTML = [...filtered].reverse().map(exp => {
    const trip = State.trips.find(t => t.id === exp.tripId);
    return `
    <div class="expense-item">
      <div class="expense-left">
        <div class="expense-icon-wrap">${EXPENSE_ICONS[exp.category] || '💸'}</div>
        <div>
          <div class="expense-desc">${exp.description}</div>
          <div class="expense-meta">${formatDate(exp.date)} · ${exp.category}${trip ? ` · ${trip.name}` : ''}</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:.75rem">
        <div class="expense-amount">-${formatINR(exp.amount)}</div>
        <button class="expense-delete" data-id="${exp.id}">🗑️</button>
      </div>
    </div>`;
  }).join('');

  container.querySelectorAll('.expense-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      State.expenses = State.expenses.filter(e => e.id !== btn.dataset.id);
      saveState();
      renderBudgetPage();
      showToast('Expense removed.', 'info');
    });
  });
}

function renderBudgetChart() {
  const ctx = document.getElementById('budgetChart');
  if (!ctx) return;
  const categories = {};
  State.expenses.forEach(e => {
    categories[e.category] = (categories[e.category] || 0) + parseFloat(e.amount || 0);
  });
  const labels = Object.keys(categories);
  const data = Object.values(categories);
  const colors = ['#4f46e5','#0284c7','#f43f5e','#059669','#d97706','#ea580c'];

  if (State.budgetChart) State.budgetChart.destroy();
  if (!labels.length) return;
  State.budgetChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels.map(l => (EXPENSE_ICONS[l] || '📌') + ' ' + l),
      datasets: [{ data, backgroundColor: colors, borderColor: '#ffffff', borderWidth: 2 }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom', labels: { color: '#475569', padding: 12, font: { size: 12, weight: 'bold' } } },
        tooltip: { callbacks: { label: (ctx) => ` ${formatINR(ctx.parsed)}` } }
      },
      cutout: '65%'
    }
  });
}

function saveExpense() {
  const description = document.getElementById('expenseDesc')?.value.trim();
  const amount = document.getElementById('expenseAmount')?.value;
  const date = document.getElementById('expenseDate')?.value;
  const category = document.getElementById('expenseCategory')?.value;
  const tripId = document.getElementById('expenseTripSelect')?.value;

  if (!description || !amount || !date) {
    showToast('Description, amount and date are required.', 'warning');
    return;
  }
  State.expenses.push({ id: generateId(), description, amount: parseFloat(amount), date, category, tripId });
  saveState();
  closeModal('addExpenseModal');
  ['expenseDesc','expenseAmount','expenseDate'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  renderBudgetPage();
  refreshDashboardStats();
  showToast(`Expense "${formatINR(amount)}" saved! 💰`, 'success');
}

// ── Travel Tips ──────────────────────────────────────────────
function renderTravelTips() {
  const grid = document.getElementById('tipsGrid');
  if (!grid || typeof TRAVEL_TIPS === 'undefined') return;
  grid.innerHTML = TRAVEL_TIPS.map(tip => `
    <div class="tip-card">
      <div class="tip-icon">${tip.icon}</div>
      <div class="tip-title">${tip.title}</div>
      <div class="tip-text">${tip.text}</div>
    </div>
  `).join('');
}

// ── Hero Search ──────────────────────────────────────────────
function performHeroSearch(query) {
  if (!query.trim()) return;
  const results = State.destinations.filter(d =>
    d.name.toLowerCase().includes(query.toLowerCase()) ||
    d.country.toLowerCase().includes(query.toLowerCase()) ||
    (d.tags || []).some(t => t.toLowerCase().includes(query.toLowerCase()))
  );
  navigateTo('explore');
  setTimeout(() => {
    const input = document.getElementById('exploreSearch');
    if (input) input.value = query;
    renderExploreGrid(results.length ? results : State.destinations);
    if (!results.length) showToast(`No exact match for "${query}" — showing all destinations.`, 'info');
    else showToast(`Found ${results.length} destinations matching "${query}"`, 'success');
  }, 100);
}

// ── Event Listeners ──────────────────────────────────────────
function initEventListeners() {
  // Navigation Links (both navbar and sidebar items with data-page)
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      if (page) navigateTo(page);
    });
  });

  // Sidebar Toggle Button (Desktop Collapse & Mobile Drawer)
  document.getElementById('sidebarToggleBtn')?.addEventListener('click', () => {
    if (window.innerWidth >= 1024) {
      document.body.classList.toggle('sidebar-collapsed');
    } else {
      document.getElementById('appSidebar')?.classList.toggle('mobile-open');
      document.getElementById('sidebarBackdrop')?.classList.toggle('active');
    }
  });

  // Mobile Backdrop Click
  document.getElementById('sidebarBackdrop')?.addEventListener('click', () => {
    document.getElementById('appSidebar')?.classList.remove('mobile-open');
    document.getElementById('sidebarBackdrop')?.classList.remove('active');
  });

  // Header Global Search
  const headerSearch = document.getElementById('headerGlobalSearch');
  headerSearch?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') performHeroSearch(headerSearch.value);
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 30);
  });

  // Hero search
  const heroSearchBtn = document.getElementById('heroSearchBtn');
  const heroSearch = document.getElementById('heroSearch');
  heroSearchBtn?.addEventListener('click', () => performHeroSearch(heroSearch.value));
  heroSearch?.addEventListener('keydown', (e) => { if (e.key === 'Enter') performHeroSearch(heroSearch.value); });

  // Explore filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      const q = document.getElementById('exploreSearch').value.trim().toLowerCase();
      const filtered = q
        ? State.destinations.filter(d => d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q))
        : State.destinations;
      renderExploreGrid(filtered);
    });
  });

  // Explore search
  document.getElementById('exploreSearch')?.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    const filtered = q
      ? State.destinations.filter(d => d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q) || (d.tags||[]).some(t=>t.toLowerCase().includes(q)))
      : State.destinations;
    renderExploreGrid(filtered);
  });

  // Tour Guide Destination Dropdown
  document.getElementById('tourGuideSelect')?.addEventListener('change', (e) => {
    renderTourGuidePage(parseInt(e.target.value));
  });

  // Header User Pill Dropdown
  const headerUserPill = document.getElementById('headerUserPill');
  const userDropdownMenu = document.getElementById('userDropdownMenu');
  headerUserPill?.addEventListener('click', (e) => {
    e.stopPropagation();
    userDropdownMenu?.classList.toggle('show');
  });
  document.addEventListener('click', (e) => {
    if (!headerUserPill?.contains(e.target)) {
      userDropdownMenu?.classList.remove('show');
    }
  });

  // Wallet and Profile triggers
  document.getElementById('walletPillBtn')?.addEventListener('click', () => openUPIModal(5000, 'Wallet Top-up'));
  document.getElementById('walletStatCard')?.addEventListener('click', () => openUPIModal(5000, 'Wallet Top-up'));
  document.getElementById('budgetTopUpBtn')?.addEventListener('click', () => openUPIModal(10000, 'Travel Budget Allocation'));
  document.getElementById('userAvatarBtn')?.addEventListener('click', () => openModal('profileModal'));
  document.getElementById('loginNavBtn')?.addEventListener('click', () => {
    switchAuthMode('login');
    openModal('authModal');
  });

  // Creator Gate verification button
  document.getElementById('verifyCreatorBtn')?.addEventListener('click', verifyCreatorFromModal);

  // Reviews triggers
  document.getElementById('writeReviewBtn')?.addEventListener('click', () => {
    populateReviewDestDropdown();
    openModal('addReviewModal');
  });

  // Admin triggers
  document.getElementById('adminAddDestBtn')?.addEventListener('click', () => openModal('adminAddDestModal'));
  document.getElementById('adminSimulateTxnBtn')?.addEventListener('click', () => openUPIModal(15000, 'Admin Test Deposit'));

  // Trip modals
  document.getElementById('addTripBtn')?.addEventListener('click', () => openModal('addTripModal'));
  document.getElementById('saveTripBtn')?.addEventListener('click', saveTrip);

  // Activity modal
  document.getElementById('addActivityBtn')?.addEventListener('click', () => {
    const sel = document.getElementById('itineraryTripSelect')?.value;
    if (!sel) { showToast('Please select a trip first.', 'warning'); return; }
    openModal('addActivityModal');
  });
  document.getElementById('saveActivityBtn')?.addEventListener('click', saveActivity);

  // Budget
  document.getElementById('addExpenseBtn')?.addEventListener('click', () => {
    populateTripSelects();
    openModal('addExpenseModal');
  });
  document.getElementById('saveExpenseBtn')?.addEventListener('click', saveExpense);
  document.getElementById('budgetTripSelect')?.addEventListener('change', (e) => renderExpensesList(e.target.value));

  // Itinerary trip select
  document.getElementById('itineraryTripSelect')?.addEventListener('change', (e) => {
    State.currentItineraryTrip = e.target.value;
    if (e.target.value) renderItinerary(e.target.value);
    else document.getElementById('itineraryContent').innerHTML = `<div class="empty-state"><div class="empty-state-icon">📅</div><h3>Select a trip to view itinerary</h3></div>`;
  });

  // Trips tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      State.currentTab = btn.dataset.tab;
      renderTripsPage();
    });
  });

  // Modal close buttons
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.dataset.modal));
  });
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });

  // Weather toggle
  document.getElementById('weatherToggle')?.addEventListener('click', () => {
    const section = document.getElementById('weatherSection');
    if (section) section.style.display = section.style.display === 'none' ? 'block' : 'none';
  });

  // Keyboard ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(m => closeModal(m.id));
    }
  });

  setupAdminTabs();
  setupStarRatingSelector();
}

// ── App Init ─────────────────────────────────────────────────
function initApp() {
  initParticles();
  initHeroStats();
  initEventListeners();
  updateUserUI();
  renderDestCards(State.destinations.slice(0, 8), 'featuredDestinations');
  renderDashboardReviews();
  renderTravelTips();
  refreshDashboardStats();

  setTimeout(() => {
    if (typeof loadWeather === 'function') loadWeather();
  }, 300);

  showToast('Welcome to Life Journey! 🌍 30 World Destinations, Complete Tour Guides & Rupee (₹) Pricing.', 'success', '✨');
}

document.addEventListener('DOMContentLoaded', initApp);

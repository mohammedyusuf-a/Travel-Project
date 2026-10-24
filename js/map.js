/* ============================================================
   Life Journey — Interactive Satellite Map Module (Leaflet.js)
   ESRI High-Resolution World Imagery Satellite Layer + Street View
   Real Orbit / Space World View Simulation & Flight Path Arcs
   ============================================================ */

let mapInitialized = false;
let currentTileLayer = null;
let currentLabelLayer = null;
let currentMapMode = 'satellite'; // 'satellite' (default world view), 'street', 'night'

// Tile URLs
const SATELLITE_TILE_URL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
const SATELLITE_LABELS_URL = 'https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}';
const LIGHT_TILE_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const DARK_TILE_URL = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';

const ESRI_ATTRIBUTION = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
const CARTO_ATTRIBUTION = '&copy; <a href="https://carto.com/">CARTO</a> | &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>';

function setMapMode(mode) {
  currentMapMode = mode;
  if (!window.travelMap) return;

  if (currentTileLayer) window.travelMap.removeLayer(currentTileLayer);
  if (currentLabelLayer) {
    window.travelMap.removeLayer(currentLabelLayer);
    currentLabelLayer = null;
  }

  if (mode === 'satellite') {
    currentTileLayer = L.tileLayer(SATELLITE_TILE_URL, {
      attribution: ESRI_ATTRIBUTION,
      maxZoom: 19
    }).addTo(window.travelMap);

    currentLabelLayer = L.tileLayer(SATELLITE_LABELS_URL, {
      maxZoom: 19
    }).addTo(window.travelMap);
  } else if (mode === 'night') {
    currentTileLayer = L.tileLayer(DARK_TILE_URL, {
      attribution: CARTO_ATTRIBUTION,
      subdomains: 'abcd',
      maxZoom: 18
    }).addTo(window.travelMap);
  } else {
    currentTileLayer = L.tileLayer(LIGHT_TILE_URL, {
      attribution: CARTO_ATTRIBUTION,
      subdomains: 'abcd',
      maxZoom: 18
    }).addTo(window.travelMap);
  }

  // Update UI buttons
  document.querySelectorAll('.map-layer-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.mode === mode);
  });
}
window.setMapMode = setMapMode;

function updateMapTileTheme(themeName) {
  if (currentMapMode === 'satellite') return; // keep satellite intact
  setMapMode(themeName === 'night' ? 'night' : 'street');
}
window.updateMapTileTheme = updateMapTileTheme;

function initMap() {
  if (mapInitialized) {
    if (window.travelMap) window.travelMap.invalidateSize();
    return;
  }
  mapInitialized = true;

  window.travelMap = L.map('mainMap', {
    center: [22, 45],
    zoom: 3,
    minZoom: 2,
    zoomControl: true,
  });

  // Default to ESRI Satellite World View
  setMapMode('satellite');

  // Custom marker icon
  function makeIcon(emoji, color = '#4f46e5') {
    return L.divIcon({
      html: `<div style="
        background:${color};
        border:2px solid #ffffff;
        border-radius:50% 50% 50% 0;
        width:38px; height:38px;
        display:flex; align-items:center; justify-content:center;
        font-size:18px;
        transform:rotate(-45deg);
        box-shadow:0 6px 18px rgba(0,0,0,0.45);
        transition:transform 0.2s ease;
      "><span style="transform:rotate(45deg);line-height:1">${emoji}</span></div>`,
      className: '',
      iconSize: [38, 38],
      iconAnchor: [19, 38],
      popupAnchor: [0, -38]
    });
  }

  // Add destination markers (all 30 destinations)
  window.markers = [];
  const dests = (typeof State !== 'undefined' && State.destinations) ? State.destinations : DESTINATIONS;

  dests.forEach(dest => {
    if (!dest.coordinates) return;
    const marker = L.marker(dest.coordinates, {
      icon: makeIcon(dest.emoji, '#4f46e5'),
      title: dest.name
    }).addTo(window.travelMap);

    marker.bindPopup(`
      <div style="min-width:230px;font-family:sans-serif">
        <img class="map-popup-img" src="${dest.image}" alt="${dest.name}" style="width:100%;height:110px;object-fit:cover;border-radius:8px" />
        <div class="map-popup-title" style="font-weight:800;font-size:1rem;margin-top:.4rem">${dest.name} ${dest.flag}</div>
        <div class="map-popup-country" style="font-size:.8rem;color:#64748b;margin-bottom:.4rem">📍 ${dest.country} · ${dest.continent}</div>
        <div style="font-size:.8rem;color:#0f172a;margin-bottom:.25rem">⭐ <strong>${dest.rating} / 5</strong> · ${dest.avgCost}</div>
        <div style="font-size:.78rem;color:#059669;font-weight:700">✈️ Flight: ₹${(dest.flightCost || 25000).toLocaleString('en-IN')}</div>
        <div style="margin-top:.6rem;display:flex;gap:.4rem">
          <button onclick="showMapInfo(${dest.id})" style="
            flex:1;padding:.45rem .6rem; background:linear-gradient(135deg,#4f46e5,#0284c7);
            color:white; border:none; border-radius:6px; font-size:.78rem;
            font-weight:700; cursor:pointer;
          ">Explore Place →</button>
          <button onclick="openTourGuideFor(${dest.id})" style="
            flex:1;padding:.45rem .6rem; background:linear-gradient(135deg,#059669,#0284c7);
            color:white; border:none; border-radius:6px; font-size:.78rem;
            font-weight:700; cursor:pointer;
          ">Tour Guide 🧭</button>
        </div>
      </div>
    `, { maxWidth: 260 });

    marker.on('click', () => {
      window.travelMap.flyTo(dest.coordinates, Math.max(window.travelMap.getZoom(), 5), { duration: 1.2 });
    });

    window.markers.push(marker);
  });

  // User trip markers (emerald green)
  if (typeof State !== 'undefined' && State.trips) {
    State.trips.forEach(trip => {
      const destMatch = dests.find(d =>
        trip.destination.toLowerCase().includes(d.name.toLowerCase())
      );
      if (destMatch && destMatch.coordinates) {
        const tripMarker = L.marker(destMatch.coordinates, {
          icon: makeIcon('📌', '#059669'),
          title: trip.name
        }).addTo(window.travelMap);
        tripMarker.bindPopup(`
          <div style="min-width:180px">
            <div class="map-popup-title" style="font-weight:800">📌 ${trip.name}</div>
            <div class="map-popup-country" style="font-size:.8rem">📍 ${trip.destination}</div>
            <div class="map-popup-info" style="font-size:.8rem">📅 ${formatDate(trip.startDate)} → ${formatDate(trip.endDate)}</div>
            <div style="font-size:.8rem;color:#059669;font-weight:700;margin-top:.3rem">Budget: ₹${(trip.budget || 0).toLocaleString('en-IN')}</div>
          </div>
        `);
      }
    });
  }

  // Populate sidebar
  renderMapSidebar();
  setupMapSearch();
}

function renderMapSidebar() {
  const list = document.getElementById('mapPlacesList');
  if (!list) return;
  const dests = (typeof State !== 'undefined' && State.destinations) ? State.destinations : DESTINATIONS;

  list.innerHTML = dests.map(dest => `
    <div class="map-place-item" data-id="${dest.id}" onclick="flyToDestination(${dest.id})">
      <img src="${dest.image}" alt="${dest.name}" class="map-place-thumb" loading="lazy" />
      <div style="flex:1;min-width:0">
        <div class="map-place-name">${dest.name} ${dest.flag}</div>
        <div class="map-place-country">${dest.country} · ⭐ ${dest.rating}</div>
        <div style="font-size:0.75rem;color:var(--accent-primary);font-weight:700">${dest.avgCost}</div>
      </div>
    </div>
  `).join('');
}

function flyToDestination(destId) {
  const dests = (typeof State !== 'undefined' && State.destinations) ? State.destinations : DESTINATIONS;
  const dest = dests.find(d => d.id === destId);
  if (!dest || !dest.coordinates || !window.travelMap) return;
  window.travelMap.flyTo(dest.coordinates, 6, { duration: 1.5 });
  setTimeout(() => showMapInfo(destId), 1000);
}

function showMapInfo(destId) {
  const dests = (typeof State !== 'undefined' && State.destinations) ? State.destinations : DESTINATIONS;
  const dest = dests.find(d => d.id === destId);
  if (!dest) return;
  const panel = document.getElementById('mapInfoPanel');
  if (!panel) return;

  document.getElementById('mapInfoContent').innerHTML = `
    <img src="${dest.image}" alt="${dest.name}" class="map-info-img" />
    <div style="font-weight:800;font-size:1.25rem;margin-bottom:.2rem;color:var(--text-primary)">${dest.name} ${dest.flag}</div>
    <div style="font-size:.85rem;color:var(--text-secondary);margin-bottom:.65rem">📍 ${dest.country} · ${dest.continent}</div>
    <div style="font-size:.82rem;color:var(--text-secondary);margin-bottom:.35rem">⭐ <strong>${dest.rating} / 5</strong> · <strong>${dest.avgCost}</strong></div>
    
    <div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:10px;padding:.75rem;margin:.6rem 0">
      <div style="font-size:.78rem;font-weight:700;color:var(--text-primary);margin-bottom:.3rem">💰 Specific Expense Breakdown:</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.3rem;font-size:.75rem">
        <div>✈️ Flight: <strong>₹${(dest.flightCost || 25000).toLocaleString('en-IN')}</strong></div>
        <div>🏨 Hotel: <strong>₹${(dest.roomCost || 20000).toLocaleString('en-IN')}</strong></div>
        <div>🚌 Bus/Coach: <strong>₹${(dest.busCost || 4000).toLocaleString('en-IN')}</strong></div>
        <div>🍽️ Food: <strong>₹${(dest.foodCost || 9000).toLocaleString('en-IN')}</strong></div>
        <div style="grid-column:span 2">📸 Photographer: <strong>₹${(dest.photographerCost || 6000).toLocaleString('en-IN')}</strong></div>
      </div>
      <div style="font-size:.82rem;font-weight:800;color:#059669;margin-top:.4rem;border-top:1px dashed var(--border-glass);padding-top:.3rem">
        All-Inclusive Tour Package: ₹${(dest.totalPackage || 65000).toLocaleString('en-IN')}
      </div>
    </div>

    <div style="font-size:.82rem;color:var(--text-secondary);margin-bottom:.35rem">🗓️ Best time: ${dest.bestTime}</div>
    <div style="font-size:.82rem;color:var(--text-secondary);margin-bottom:.35rem">💱 Currency: ${dest.currency}</div>
    <div style="font-size:.82rem;color:var(--text-secondary);margin-bottom:.8rem">🗣️ Language: ${dest.language}</div>
    
    <div style="display:flex;gap:.5rem;flex-direction:column">
      <div style="display:flex;gap:.5rem">
        <button onclick="openDestDetail(State.destinations.find(d=>d.id===${dest.id}))" style="
          flex:1;padding:.6rem;background:linear-gradient(135deg,#4f46e5,#0284c7);
          color:white;border:none;border-radius:8px;font-size:.8rem;font-weight:700;cursor:pointer
        ">Full Details</button>
        <button onclick="openTourGuideFor(${dest.id})" style="
          flex:1;padding:.6rem;background:linear-gradient(135deg,#059669,#0284c7);
          color:white;border:none;border-radius:8px;font-size:.8rem;font-weight:700;cursor:pointer
        ">Tour Guide 🧭</button>
      </div>
      <button onclick="addToTripFromDest('${dest.name}','${dest.country}')" style="
        width:100%;padding:.6rem;background:var(--bg-card);border:1px solid var(--accent-primary);
        color:var(--accent-primary);border-radius:8px;font-size:.8rem;font-weight:700;cursor:pointer
      ">Plan This Trip ✈️</button>
    </div>
  `;
  panel.classList.add('active');
}

function openTourGuideFor(destId) {
  if (window.navigateTo) window.navigateTo('guide');
  if (window.selectGuideDestination) window.selectGuideDestination(destId);
}
window.openTourGuideFor = openTourGuideFor;

function setupMapSearch() {
  const input = document.getElementById('mapSearch');
  const btn = document.getElementById('mapSearchBtn');
  if (!input || !btn) return;

  function doSearch() {
    const q = input.value.trim().toLowerCase();
    if (!q) return;
    const dests = (typeof State !== 'undefined' && State.destinations) ? State.destinations : DESTINATIONS;
    const dest = dests.find(d =>
      d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q)
    );
    if (dest) {
      flyToDestination(dest.id);
      showToast(`Found: ${dest.name}, ${dest.country}`, 'success');
    } else {
      geocodeSearch(q);
    }
  }

  btn.addEventListener('click', doSearch);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') doSearch(); });
}

// Map Info close button
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('mapInfoClose')?.addEventListener('click', () => {
    document.getElementById('mapInfoPanel')?.classList.remove('active');
  });
});

async function geocodeSearch(query) {
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`);
    const data = await res.json();
    if (data && data.length > 0) {
      const { lat, lon, display_name } = data[0];
      window.travelMap.flyTo([parseFloat(lat), parseFloat(lon)], 10, { duration: 1.5 });
      L.popup()
        .setLatLng([parseFloat(lat), parseFloat(lon)])
        .setContent(`<div style="font-weight:700">${display_name}</div>`)
        .openOn(window.travelMap);
      showToast(`Located: ${query}`, 'info');
    } else {
      showToast('Location not found. Try another search term.', 'warning');
    }
  } catch (e) {
    showToast('Search service unavailable.', 'error');
  }
}

// ── Satellite Tour Guide Flight Path Map Renderer ────────────
let guideMapInstance = null;
let guideFlightArc = null;

function renderGuideSatelliteMap(containerId, dest) {
  const el = document.getElementById(containerId);
  if (!el || !dest || !dest.coordinates) return;

  if (guideMapInstance) {
    guideMapInstance.remove();
    guideMapInstance = null;
  }

  guideMapInstance = L.map(containerId, {
    center: [dest.coordinates[0], dest.coordinates[1]],
    zoom: 6,
    zoomControl: true,
    attributionControl: false
  });

  // ESRI Satellite tile layer
  L.tileLayer(SATELLITE_TILE_URL, { maxZoom: 18 }).addTo(guideMapInstance);
  L.tileLayer(SATELLITE_LABELS_URL, { maxZoom: 18 }).addTo(guideMapInstance);

  // India Origin Marker (Delhi or Mumbai hub)
  const indiaCoords = [28.6139, 77.2090]; // New Delhi Airport
  const originMarker = L.marker(indiaCoords, {
    icon: L.divIcon({
      html: `<div style="background:#ea580c;color:white;border:2px solid white;border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;font-size:14px;box-shadow:0 4px 10px rgba(0,0,0,0.5)">🇮🇳</div>`,
      className: '',
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    })
  }).addTo(guideMapInstance);
  originMarker.bindPopup(`<strong>Departure Hub: India (DEL / BOM)</strong>`);

  // Destination Marker
  const destMarker = L.marker(dest.coordinates, {
    icon: L.divIcon({
      html: `<div style="background:#4f46e5;color:white;border:2px solid white;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:16px;box-shadow:0 6px 16px rgba(0,0,0,0.6);animation:pulse-marker 2s infinite">${dest.emoji || '📍'}</div>`,
      className: '',
      iconSize: [36, 36],
      iconAnchor: [18, 18]
    })
  }).addTo(guideMapInstance);
  destMarker.bindPopup(`<strong>Destination: ${dest.name}, ${dest.country}</strong>`);

  // Flight Path Curved Arc / Polyline
  // Calculate midpoint with curved offset
  const lat1 = indiaCoords[0], lon1 = indiaCoords[1];
  const lat2 = dest.coordinates[0], lon2 = dest.coordinates[1];
  const midLat = (lat1 + lat2) / 2 + 10; // arc curvature
  const midLon = (lon1 + lon2) / 2;

  const curvedPoints = [];
  for (let t = 0; t <= 1; t += 0.05) {
    // Quadratic Bezier interpolation
    const lat = (1 - t) * (1 - t) * lat1 + 2 * (1 - t) * t * midLat + t * t * lat2;
    const lon = (1 - t) * (1 - t) * lon1 + 2 * (1 - t) * t * midLon + t * t * lon2;
    curvedPoints.push([lat, lon]);
  }

  guideFlightArc = L.polyline(curvedPoints, {
    color: '#38bdf8',
    weight: 3,
    dashArray: '8, 8',
    opacity: 0.9
  }).addTo(guideMapInstance);

  // Fit bounds to show both India and Destination
  guideMapInstance.fitBounds([indiaCoords, dest.coordinates], { padding: [40, 40] });
}
window.renderGuideSatelliteMap = renderGuideSatelliteMap;

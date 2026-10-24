/* ============================================================
   Life Journey — Modern Theme Engine
   Default: Pure White Theme
   Respects user choice and maintains a crisp, bright aesthetic.
   ============================================================ */

(function () {
  'use strict';

  // Default theme is white
  const THEME_KEY = 'lifejourney_theme';

  function getSavedTheme() {
    return localStorage.getItem(THEME_KEY) || localStorage.getItem('wander_theme') || 'white';
  }

  /**
   * Applies the theme to <html> and updates the badge.
   */
  function applyTheme(themeName) {
    const root = document.documentElement;
    root.setAttribute('data-theme', themeName);
    localStorage.setItem(THEME_KEY, themeName);

    // Update badge
    const badge = document.getElementById('themeBadge');
    if (badge) {
      if (themeName === 'white' || themeName === 'day') {
        badge.innerHTML = `<span class="theme-icon">☀️</span><span class="theme-name">White Theme</span>`;
        badge.title = 'White Theme active (click to toggle)';
      } else {
        badge.innerHTML = `<span class="theme-icon">🌙</span><span class="theme-name">Dark Theme</span>`;
        badge.title = 'Dark Theme active (click to toggle)';
      }
    }

    // Update map tiles if map is open
    if (window.travelMap && window.updateMapTileTheme) {
      window.updateMapTileTheme(themeName);
    }

    // Dispatch a custom event
    window.dispatchEvent(new CustomEvent('themechange', { detail: { name: themeName } }));
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'white';
    const next = (current === 'white' || current === 'day') ? 'night' : 'white';
    applyTheme(next);
  }

  // Initialize with white theme
  const initialTheme = getSavedTheme();
  applyTheme(initialTheme);

  // Hook badge click for seamless user control
  function setupThemeBadge() {
    const badge = document.getElementById('themeBadge');
    if (badge) {
      badge.style.cursor = 'pointer';
      badge.addEventListener('click', toggleTheme);
      applyTheme(getSavedTheme());
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupThemeBadge);
  } else {
    setupThemeBadge();
  }

  // Expose helper on window
  window.setWanderTheme = applyTheme;
  window.toggleWanderTheme = toggleTheme;
})();

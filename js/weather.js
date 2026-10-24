/* ============================================================
   Life Journey — Live Weather Module
   Uses Open-Meteo API (free, no API key required)
   ============================================================ */

// WMO Weather code → emoji + label
const WMO_CODES = {
  0: { emoji: '☀️', label: 'Clear Sky' },
  1: { emoji: '🌤️', label: 'Mainly Clear' },
  2: { emoji: '⛅', label: 'Partly Cloudy' },
  3: { emoji: '☁️', label: 'Overcast' },
  45: { emoji: '🌫️', label: 'Fog' },
  48: { emoji: '🌫️', label: 'Icy Fog' },
  51: { emoji: '🌦️', label: 'Light Drizzle' },
  53: { emoji: '🌦️', label: 'Drizzle' },
  55: { emoji: '🌧️', label: 'Heavy Drizzle' },
  61: { emoji: '🌧️', label: 'Light Rain' },
  63: { emoji: '🌧️', label: 'Rain' },
  65: { emoji: '🌧️', label: 'Heavy Rain' },
  71: { emoji: '🌨️', label: 'Light Snow' },
  73: { emoji: '❄️', label: 'Snow' },
  75: { emoji: '❄️', label: 'Heavy Snow' },
  80: { emoji: '🌦️', label: 'Rain Showers' },
  81: { emoji: '🌧️', label: 'Showers' },
  82: { emoji: '⛈️', label: 'Heavy Showers' },
  85: { emoji: '🌨️', label: 'Snow Showers' },
  95: { emoji: '⛈️', label: 'Thunderstorm' },
  96: { emoji: '⛈️', label: 'Thunderstorm + Hail' },
  99: { emoji: '⛈️', label: 'Heavy Thunderstorm' },
};

function getWeatherInfo(code) {
  return WMO_CODES[code] || { emoji: '🌡️', label: 'Unknown' };
}

async function fetchCityWeather(city) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&wind_speed_unit=kmh&timezone=auto`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Weather API error');
  return res.json();
}

async function loadWeather() {
  const grid = document.getElementById('weatherGrid');
  if (!grid) return;

  // Show loading skeletons
  grid.innerHTML = WEATHER_CITIES.map(() => `
    <div class="weather-card skeleton" style="min-height:160px"></div>
  `).join('');

  const results = await Promise.allSettled(WEATHER_CITIES.map(city => fetchCityWeather(city)));

  grid.innerHTML = results.map((result, i) => {
    const city = WEATHER_CITIES[i];
    if (result.status === 'rejected') {
      return `
        <div class="weather-card">
          <div class="weather-city">${city.city}</div>
          <div class="weather-country">${city.flag} ${city.country}</div>
          <div class="weather-icon">❓</div>
          <div class="weather-temp" style="font-size:1rem;color:var(--text-secondary)">Unavailable</div>
        </div>`;
    }

    const { current } = result.value;
    const { emoji, label } = getWeatherInfo(current.weather_code);
    const temp = Math.round(current.temperature_2m);
    const humidity = current.relative_humidity_2m;
    const wind = Math.round(current.wind_speed_10m);

    return `
      <div class="weather-card">
        <div class="weather-city">${city.city}</div>
        <div class="weather-country">${city.flag} ${city.country}</div>
        <div class="weather-icon">${emoji}</div>
        <div class="weather-temp">${temp}°C</div>
        <div class="weather-desc">${label}</div>
        <div class="weather-extra">
          <div class="weather-detail">💧 ${humidity}%</div>
          <div class="weather-detail">💨 ${wind} km/h</div>
        </div>
      </div>`;
  }).join('');
}

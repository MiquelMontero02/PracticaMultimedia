// jsonld-loader.js
async function loadJsonLd(route='/assets/json/fires.json') {
  const res = await fetch(route);
  const data = await res.json();

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}


async function loadMeteoData(lat,lon){
    const apiURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`;
    const data=await fetchAPI(apiURL);
    const currentValues=data.current;
    const units=data.current_units;
    await generateMeteoContainer(currentValues, units);
}

async function getMeteoIcon(weatherCode) {
    const weatherIconsURL="https://gist.githubusercontent.com/stellasphere/9490c195ed2b53c707087c8c2db4ec0c/raw/76b0cb0ef0bfd8a2ec988aa54e30ecd1b483495d/descriptions.json"
    const data=await fetchAPI(weatherIconsURL)
    const weatherData=data[weatherCode]
    return weatherData ? weatherData.day.image : null;
}
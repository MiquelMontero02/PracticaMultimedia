function addMapStylesLinks() {
    const MAP_DEPENDENCIES_URL=[
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css",
        "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Amatic+SC:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
    ]
    MAP_DEPENDENCIES_URL.forEach(url =>{
        const link=document.createElement('link');
        link.href=url;
        link.rel="stylesheet";
        document.head.appendChild(link);
    });
}
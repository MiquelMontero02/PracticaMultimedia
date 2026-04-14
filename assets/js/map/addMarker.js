function addMarkers(opcFormatedName, item) {
    const longitude = item.location.geo.longitude;
    const latitude = item.location.geo.latitude;
    const url = item.url;
    const markerName = item.name;
    const link=document.createElement('a');
    const marker = L.marker(
        [latitude, longitude],
        {
            icon: L.icon(
                {
                    iconUrl: `/assets/img/icon${opcFormatedName}.svg`,
                    iconSize: [20, 20]
                })
        });
    marker.options.type = opcFormatedName;
            
    link.href=url;
    link.target="_blank";
    link.textContent=markerName;

    if(opcFormatedName==="Fires"){
        link.href="#";
        link.addEventListener('click', function(e){
            e.preventDefault();
            loadFiraContent(item, document.querySelector('main'), '#event');
        });
    }
    
    marker.bindPopup(link);
    return marker;
}
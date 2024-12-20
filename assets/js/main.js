---
---

{% include js/conference.js %}

window.conference.awaitReady().then(() => {
    const map = window.conference.map.getMap();

    if (typeof map !== 'undefined') {
        let mpiaCoords = [49.3968, 8.7241];
        let mpiaMarker = L.marker(mpiaCoords, {
            icon: L.divIcon({
                className: '',
                html: '<span class="fas fa-map-marker-alt" style="font-size: 24px; color: red;"></span>',
                iconSize: [24, 36],       // Width and height of the icon
                iconAnchor: [12, 36]      // Anchor point: (width / 2, height) to point the bottom center of the icon to the location
            })
        }).addTo(map);

        // Re-center the map on MPIA
        map.setView(mpiaCoords, 17);
    } else {
        console.log("Map object is undefined");
    }
});



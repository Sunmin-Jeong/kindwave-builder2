import btsLocations from './data.js';

function initMap() {
    const center = { lat: 36.5, lng: 127.5 }; // Central Korea
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: center,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [{ "weight": "2.00" }]
            },
            {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [{ "color": "#9c27b0" }, { "lightness": "50" }]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{ "color": "#f2f2f2" }]
            }
        ]
    });

    const infoWindow = new google.maps.InfoWindow();

    btsLocations.forEach(location => {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.name,
            icon: {
                url: 'https://maps.google.com/mapfiles/ms/icons/purple-dot.png'
            }
        });

        marker.addListener('click', () => {
            const contentString = `
                <div style="max-width: 200px;">
                    <h3 style="margin-top: 0; color: #BB86FC;">${location.name}</h3>
                    <img src="${location.photo}" alt="${location.name}" style="width: 100%; border-radius: 8px; margin-bottom: 10px;">
                    <p style="font-size: 0.8rem;">${location.description}</p>
                    <a href="${location.googleMapsLink}" target="_blank" style="color: #03DAC6; font-weight: bold; text-decoration: none;">Open in Google Maps</a>
                </div>
            `;
            infoWindow.setContent(contentString);
            infoWindow.open(map, marker);
        });
    });
}

// Make initMap available globally for Google Maps callback
window.initMap = initMap;

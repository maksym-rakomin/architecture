let myMap = null,
    marker = null,
    popup = 'img/icon-marker.svg',
    center = {lat: 40.663317, lng: -73.897541},
    centerMarker = {lat: 40.6740652, lng: -73.9029962},
    myStyles = [
        {
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#f5f5f5"
            }
        ]
        },
        {
        "elementType": "labels.icon",
        "stylers": [
            {
            "visibility": "off"
            }
        ]
        },
        {
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#616161"
            }
        ]
        },
        {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
            "color": "#f5f5f5"
            }
        ]
        },
        {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
            "visibility": "off"
            }
        ]
        },
        {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#bdbdbd"
            }
        ]
        },
        {
        "featureType": "administrative.neighborhood",
        "stylers": [
            {
            "visibility": "off"
            }
        ]
        },
        {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#eeeeee"
            }
        ]
        },
        {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
            "visibility": "off"
            }
        ]
        },
        {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#757575"
            }
        ]
        },
        {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#e5e5e5"
            }
        ]
        },
        {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#9e9e9e"
            }
        ]
        },
        {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#ffffff"
            }
        ]
        },
        {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
            "visibility": "off"
            }
        ]
        },
        {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
            "visibility": "off"
            }
        ]
        },
        {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#757575"
            }
        ]
        },
        {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#dadada"
            }
        ]
        },
        {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
            "visibility": "off"
            }
        ]
        },
        {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#616161"
            }
        ]
        },
        {
        "featureType": "road.local",
        "stylers": [
            {
            "visibility": "off"
            }
        ]
        },
        {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#9e9e9e"
            }
        ]
        },
        {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#e5e5e5"
            }
        ]
        },
        {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#eeeeee"
            }
        ]
        },
        {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#c9c9c9"
            }
        ]
        },
        {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
            "visibility": "off"
            }
        ]
        },
        {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#9e9e9e"
            }
        ]
        }
    ];

function initMap() {
    myMap = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 13,
        disableDefaultUI: true,
    });

    marker = new google.maps.Marker({
        position: centerMarker,
        map: myMap,
        icon: popup
    });

    myMap.setOptions({styles: myStyles});

}
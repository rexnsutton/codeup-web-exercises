geocode('Dallas', mapboxtoken).then(function (result) {
    console.log(result);
    mapboxgl.accessToken = mapboxtoken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 15,
        center: ([-96.8057, 32.7787])
    });

    var markerOptions = {
        color: 'red',
        draggable: true
    };
    var marker = new mapboxgl.Marker(markerOptions)
        .setLngLat([-96.8057, 32.7787])
        .addTo(map);

    map.on('click', function() {
    var popup = new mapboxgl.Popup()
        .setHTML("<h1>Codeup Rocks!!!</h1>")
        .addTo(map);
    marker.setPopup(popup);
});
});


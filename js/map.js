function initialisation() {
    var map = new google.maps.Map(document.getElementById('zootopie'), {
        zoom: 4,
        center: {lat: 48.8589507, lng: 2.2775163}
    });

    var image = 'boss.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 48.876905, lng: 2.270650},
        map: map,
        icon: image
    });
}

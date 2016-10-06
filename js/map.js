/*
function initialisation(){
        var optionsCarte = {
            zoom: 4,
            center: new google.maps.LatLng(-33, 151)
            // Remarque : Il est désormais possible de remplacer :
            // center: new google.maps.LatLng(47.389982, 0.688877)
            // par :
            // center: {lat: 47.389982, lng: 0.688877}
        };
        var myMap = new google.maps.Map(document.getElementById("zootopie"), optionsCarte);
    }

  */

    // ajout d'un méchant sur la map


function initialisation() {
    var map = new google.maps.Map(document.getElementById('zootopie'), {
        zoom: 4,
        center: {lat: 48.8589507, lng: 2.2775163}
    });

    var image = 'img/icon.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 48.876905, lng: 2.270650},
        map: map,
        icon: image
    });
}
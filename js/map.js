var personnage = function(race,age,nom,photo,metier){
    this.race = race;
    this.age = age;
    this.nom = nom;
    this.photo = photo;
    this.metier = metier;

};

var bellwether ='<h1> Nom: Bellwether</h1>' +
    '<h2> Race: Biquette</h2>' +
    '<img class="personnage" src="img/mairess.png" title="La mairess" />' +
    '<h4>Age: 36</h4>' +
    '<h3>Metier: Assistante diabolique du maire</h3>' +
    '<h5>Lieu: Bois de boulogne</h5>';


var ramses ='<h1> Nom: Doug Ramses</h1>' +
    '<h2> Race: Bélier</h2>' +
    '<img class="personnage" src="img/ramses.png" title="ramses" />' +
    '<h4>Age: 28</h4>' +
    '<h3>Metier: Scientifique</h3>';

var weaselton ='<h1> Nom: Duke Weaselton</h1>' +
    '<h2> Race: Rat</h2>' +
    '<img class="personnage" src="img/weaselton.png" title="weaselton" />' +
    '<h4>Age: 22</h4>' +
    '<h3>Metier: voleur</h3>';

var flash ='<h1> Nom: Flash</h1>' +
    '<h2> Race: Paresseux</h2>' +
    '<img class="personnage" src="img/flash.png" title="flash" />' +
    '<h4>Age: 26</h4>' +
    '<h3>Metier: travaille au département d’immatriculation des véhicules</h3>';

var big ='<h1> Nom: Mister Big</h1>' +
    '<h2> Race: Musaraigne</h2>' +
    '<img class="personnage" src="img/big.png" title="big" />' +
    '<h4>Age: 60</h4>' +
    '<h3>Metier: Chef de la mafia</h3>';

function initialisation(){
    var map_info = {
        zoom: 13,
        center: new google.maps.LatLng(48.8589507, 2.2775163)
    };
    var map = new google.maps.Map(document.getElementById("zootopie"), map_info);

    var image = 'boss.png';
    var optionsMarqueur1 = {
        position: {lat: 48.876905, lng: 2.270650},
        map: map,
        icon: image,
        title: "Mairess"
    };

    var optionsMarqueur2 = {
        position: {lat: 48.8589507, lng: 2.2775163},
        map: map,
        icon: image,
        title: "Ramses"
    };
/*
    var optionsMarqueur3 = {
        position: {lat: 48.876905, lng: 2.270650},
        map: map,
        icon: image,
        title: "Weaselton"
    };

    var optionsMarqueur4 = {
        position: {lat: 48.876905, lng: 2.270650},
        map: map,
        icon: image,
        title: "Flash"
    };

    var optionsMarqueur5 = {
        position: {lat: 48.876905, lng: 2.270650},
        map: map,
        icon: image,
        title: "Big"
    };

*/

    var marqueur1 = new google.maps.Marker(optionsMarqueur1);

    var optionsInfoBulle1 = {
        content: bellwether
    };

    var infoBulle1 = new google.maps.InfoWindow( optionsInfoBulle1 )

    google.maps.event.addListener(marqueur1, 'click', function() {
        infoBulle1.open(map, marqueur1);
    });

    // marqueur 2

    var marqueur2 = new google.maps.Marker(optionsMarqueur2);

    var optionsInfoBulle2 = {
        content: ramses
    };

    var infoBulle2 = new google.maps.InfoWindow( optionsInfoBulle2 )

    google.maps.event.addListener(marqueur2, 'click', function() {
        infoBulle2.open(map, marqueur2);
    });

}










/*

function initialisation() {
    var map = new google.maps.Map(document.getElementById('zootopie'), {
        zoom: 4,
        center: {lat: 48.8589507, lng: 2.2775163}
    });

    var image = 'boss.png';
    var marker = new google.maps.Marker({
        position: {lat: 48.876905, lng: 2.270650},
        map: map,
        icon: image,
        title: "ramses"

    });

    marker.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker.getPosition());
    });

    var optionsInfoBulle = {
        content: bellwether
    };

    var infoBulle = new google.maps.InfoWindow( optionsInfoBulle )
}

*/

/*
bounds_changed
center_changed
*/
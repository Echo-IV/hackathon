var bellwether ='<h1> Nom: Bellwether</h1>' +
    '<h2> Race: Biquette</h2>' +
    '<img class="personnage" src="img/mairess.png" title="La mairess" />' +
    '<h4>Age: 36</h4>' +
    '<h3>Metier: Assistante diabolique du maire</h3>' +
    '<h5>Lieu: Bois de boulogne</h5>' +
    '<a href="index.html" class="btn btn-primary">Capturer !</a>';


// méchant 1

var ramses ='<h1> Nom: Doug Ramses</h1>' +
    '<h2> Race: Bélier</h2>' +
    '<img class="personnage" src="img/ramses.png" title="ramses" />' +
    '<h4>Age: 28</h4>' +
    '<h3>Metier: Scientifique</h3>' +
    '<h5>Lieu: Fistinière</h5>' +
    '<button class="btn">Capturer !</button>';

// méchant 2

var weaselton ='<h1> Nom: Duke Weaselton</h1>' +
    '<h2> Race: Rat</h2>' +
    '<img class="personnage" src="img/weaselton.png" title="weaselton" />' +
    '<h4>Age: 22</h4>' +
    '<h3>Metier: voleur</h3>' +
    '<h5>Lieu: Gros Cul, Sainte-Colombe-sur-Seine</h5>' +
    '<button class="btn">Capturer !</button>';

// méchant 3

var flash ='<h1> Nom: Flash</h1>' +
    '<h2> Race: Paresseux</h2>' +
    '<img class="personnage" src="img/flash.png" title="flash" />' +
    '<h4>Age: 26</h4>' +
    '<h3>Metier: travaille au département d’immatriculation des véhicules</h3>' +
    '<h5>Lieu: Futuroscope</h5>' +
    '<button class="btn">Capturer !</button>';

// méchant 4

var big ='<h1> Nom: Mister Big</h1>' +
    '<h2> Race: Musaraigne</h2>' +
    '<img class="personnage" src="img/big.png" title="big" />' +
    '<h4>Age: 60</h4>' +
    '<h3>Metier: Chef de la mafia</h3>' +
    '<button class="btn">Capturer !</button>';

//méchant 5

function initialisation(){
    var map_info = {
        zoom: 13,
        center: new google.maps.LatLng(48.8589507, 2.2775163)
    };
    var map = new google.maps.Map(document.getElementById("zootopie"), map_info);

    //initialisation

    var image = 'boss.png';
    var optionsMarqueur1 = {
        position: {lat: 48.876905, lng: 2.270650},
        map: map,
        icon: image,
        title: "Mairess"
    };

    // options marqueur 1

    var optionsMarqueur2 = {
        position: {lat: 47.4299244, lng: 2.7367621},
        map: map,
        icon: image,
        title: "Ramses"
    };

    // options marqueur 2

    var optionsMarqueur3 = {
        position: {lat: 47.8625239, lng: 4.5239774},
        map: map,
        icon: image,
        title: "Weaselton"
    };

    // options marqueur 3

    var optionsMarqueur4 = {
        position: {lat: 46.669861, lng: 0.3675694},
        map: map,
        icon: image,
        title: "Flash"
    };

    // options marqueur 4

    var optionsMarqueur5 = {
        position: {lat: 48.2431028, lng: 0.4179514},
        map: map,
        icon: image,
        title: "Big"
    };



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

    // marqueur 3

    var marqueur3 = new google.maps.Marker(optionsMarqueur3);

    var optionsInfoBulle3 = {
        content: weaselton
    };

    var infoBulle3 = new google.maps.InfoWindow( optionsInfoBulle3 )

    google.maps.event.addListener(marqueur3, 'click', function() {
        infoBulle3.open(map, marqueur3);
    });

    //marqueur 4

    var marqueur4 = new google.maps.Marker(optionsMarqueur4);

    var optionsInfoBulle4 = {
        content: weaselton
    };

    var infoBulle4 = new google.maps.InfoWindow( optionsInfoBulle4 )

    google.maps.event.addListener(marqueur4, 'click', function() {
        infoBulle4.open(map, marqueur4);
    });

    //marqueur 5

    var marqueur5 = new google.maps.Marker(optionsMarqueur5);

    var optionsInfoBulle5 = {
        content: weaselton
    };

    var infoBulle5 = new google.maps.InfoWindow( optionsInfoBulle5 )

    google.maps.event.addListener(marqueur5, 'click', function() {
        infoBulle5.open(map, marqueur5);
    });
}


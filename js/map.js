var user = document.getElementById('zootopie').innerHTML = '<div id="user"></div>';

var bellwether = '<div class="col-xs-6 info">' +
    '<img class="personnage" src="img/mairess1.png" title="La mairess" />' +
    '</div>' +
    '<div class="col-xs-6">' +
    '<h1 class="title"> Nom: Bellwether</h1>' +
    '<h2 class="sub_title"> Race: Biquette</h2>' +
    '<h4>Age: 36</h4>' +
    '<h3>Metier: Assistante diabolique du maire</h3>' +
    '<h5>Lieu: Bois de boulogne</h5>' +
    '<a href="index.html"><button class="btn">Capturer !</button></a>' +
    '</div>';



// méchant 1

var yax = '<div class="col-xs-6 info">' +
    '<img class="personnage" src="img/Yax.png" title="yax" />' +
    '</div>' +
    '<div class="col-xs-6">' +
    '<h1 class="title"> Nom: Yax</h1>' +
    '<h2 class="sub_title"> Race: Bélier</h2>' +
    '<h4>Age: 28</h4>' +
    '<h3>Metier: Nudiste</h3>' +
    '<h5>Lieu: Fistinière</h5>' +
    '<a href="index.html"><button class="btn">Capturer !</button></a>' +
    '</div>';

// méchant 2

var lion = '<div class="col-xs-6 info">' +
    '<img class="personnage" src="img/Lion.png" title="Dominique" />' +
    '</div>' +
    '<div class="col-xs-6">' +
'<h1 class="title"> Nom: Dominique</h1>' +
'<h2 class="sub_title"> Race: Lion</h2>' +
'<h4>Age: 35</h4>' +
'<h3>Metier: Maire</h3>' +
'<h5>Lieu: Gros Cul, Sainte-Colombe-sur-Seine</h5>' +
'<a href="index.html"><button class="btn">Capturer !</button></a>' +
'</div>';

// méchant 3

var flash = '<div class="col-xs-6 info">' +
    '<img class="personnage flash" src="img/flash1.png" title="flash" />' +
    '</div>' +
    '<div class="col-xs-6">' +
    '<h1 class="title"> Nom: Flash</h1>' +
    '<h2 class="sub_title"> Race: Paresseux</h2>' +
    '<h4>Age: 26</h4>' +
    '<h3>Metier: travaille au département d’immatriculation des véhicules</h3>' +
    '<h5>Lieu: Futuroscope</h5>' +
    '<a href="index.html"><button class="btn btn2">Capturer !</button></a>' +
    '</div>';

// méchant 4

var big = '<div class="col-xs-6 info">' +
    '<img class="personnage" src="img/mbig1.png" title="big" />' +
    '</div>' +
    '<div class="col-xs-6">' +
    '<h1 class="title"> Nom: Mister Big</h1>' +
    '<h2 class="sub_title"> Race: Musaraigne</h2>' +
    '<h4>Age: 60</h4>' +
    '<h3>Metier: Chef de la mafia</h3>' +
    '<h5>Lieu: Saint-Cosme-en-Vairais</h5>' +
    '<a href="index.html"><button class="btn">Capturer !</button></a>' +
    '</div>';

//méchant 5

function initialisation(){
    var map_info = {
        zoom: 6,
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
        title: "Lion"
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

    var infoBulle1 = new google.maps.InfoWindow( optionsInfoBulle1 );

    google.maps.event.addListener(marqueur1, 'click', function() {
        infoBulle1.open(map, marqueur1);
    });

    // marqueur 2

    var marqueur2 = new google.maps.Marker(optionsMarqueur2);

    var optionsInfoBulle2 = {
        content: yax
    };

    var infoBulle2 = new google.maps.InfoWindow( optionsInfoBulle2 )

    google.maps.event.addListener(marqueur2, 'click', function() {
        infoBulle2.open(map, marqueur2);
    });

    // marqueur 3

    var marqueur3 = new google.maps.Marker(optionsMarqueur3);

    var optionsInfoBulle3 = {
        content: lion
    };

    var infoBulle3 = new google.maps.InfoWindow( optionsInfoBulle3 )

    google.maps.event.addListener(marqueur3, 'click', function() {
        infoBulle3.open(map, marqueur3);
    });

    //marqueur 4

    var marqueur4 = new google.maps.Marker(optionsMarqueur4);

    var optionsInfoBulle4 = {
        content: flash
    };

    var infoBulle4 = new google.maps.InfoWindow( optionsInfoBulle4 )

    google.maps.event.addListener(marqueur4, 'click', function() {
        infoBulle4.open(map, marqueur4);
    });

    //marqueur 5

    var marqueur5 = new google.maps.Marker(optionsMarqueur5);

    var optionsInfoBulle5 = {
        content: big
    };

    var infoBulle5 = new google.maps.InfoWindow( optionsInfoBulle5 )

    google.maps.event.addListener(marqueur5, 'click', function() {
        infoBulle5.open(map, marqueur5);
    });
}


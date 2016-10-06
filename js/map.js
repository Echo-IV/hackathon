var personnage = function(race,age,nom,photo,metier){
    this.race = race;
    this.age = age;
    this.nom = nom;
    this.photo = photo;
    this.metier = metier;

};

var bellwether = new personnage("<h2>biquette</h2>",36,"Bellwether","img/mairess.png","assistante diabolique du maire");

var clawhauser = new personnage("guepard",19,"Benjamin Clawhauser","img/clawhauser.png","bouffeur de donuts");

var ramses = new personnage("bélier",28,"Doug Ramses","img/ramses.png","scientifique");

var weaselton = new personnage("rat",22,"Duke Weaselton","img/weaselton.png","voleur");

var flash = new personnage("paresseux",26,"Flash","img/flash.png","travaille au département d’immatriculation des véhicules");

var judy = new personnage("lapin",20,"Judy Hopps","img/judy.png","policière");

var bogo = new personnage("buffle",30,"Bogo","img/bogo.png","policier");

var wilde = new personnage("renard",26,"Nick Wilde","img/wilde.png","policier");


function initialisation(){
    var map_info = {
        zoom: 8,
        center: new google.maps.LatLng(48.8589507, 2.2775163)
    };
    var map = new google.maps.Map(document.getElementById("zootopie"), map_info);

    var image = 'boss.png';
    var optionsMarqueur = {
        position: map.getCenter(),
        map: map,
        icon: image,
    };
    var marqueur = new google.maps.Marker(optionsMarqueur);
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
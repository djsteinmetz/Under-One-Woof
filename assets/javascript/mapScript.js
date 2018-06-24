$(initMap);

function initMap(){
//map options
    var options = {
        zoom:11,
        center:{lat:44.9537, lng:-93.0900}
}
//new map
var map = new 
google.maps.Map(document.getElementById('map'), options);



/*
// add marker
//{lat:45.082570, lng:-93.231165}
var marker = new google.maps.Marker({
    position:{lat:44.996832, lng:-93.280261},
    map:map,
    icon:'https://www.shareicon.net/data/32x32/2016/05/16/766092_dog_512x512.png'
});

var infoWindow = new google.maps.InfoWindow({
    content:'<p> Minneapolis Animal Shelter<br>212 17th Ave. N.<br> Minneapolis, MN 55411 </p>'
});

marker.addListener('click',function(){
    infoWindow.open(map,marker);
});
*/

//add marker function, 

addMarker({lat:45.082570, lng:-93.231165});
addMarker({lat:44.996832, lng:-93.280261});

function addMarker(coords){

    var marker = new google.maps.Marker({
    position:coords,
    map:map,
    icon:'https://www.shareicon.net/data/32x32/2016/05/16/766092_dog_512x512.png'
       });

    }
}	




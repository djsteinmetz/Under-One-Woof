var geocoder;
  var map;
//intialize map 
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(44.9537, -93.0900);
    var mapOptions = {
      zoom: 10,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  
 //get corresponding values from html 

  function codeAddress() {
    var address = document.getElementById('address').value;
    if (address.length < 5 || address.length > 5){
      console.log(this)
      $("#zip-error").css("display", "block");
      return false
    }
    else {
      $("#zip-error").css("display", "none");
    }
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {

        //sets shelter location and info for shelter 1
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          position:{lat:44.996832, lng:-93.280261},
          map:map,
          icon:'assets/images/mapIcon.png'
      });
      var infoWindow = new google.maps.InfoWindow({
        content:'<p> Minneapolis Animal Shelter<br>Address: 212 17th Ave. N., Minneapolis, MN 55411<br>Phone: 612-673-MACC (6222)<br><a href="http://petharbor.com/results.asp?searchtype=ADOPT&friends=1&samaritans=1&nosuccess=0&rows=10&imght=120&imgres=thumb&fontface=arial&fontsize=10&bgcolor=ffffff&imgborder=1&col_hdr_bg=B4CD95&col_hdr_fg=000000&col_bg=ffffff&col_bg2=B4CD95&col_fg=000000&sbg=4D5864&zip=55411&shelterlist=%27MNPL%27&atype=dog&start=4&nomax=1&page=1&where=type_DOG&nopod=1&view=sysadm.v_mnpl"target"_blank">Our Adoptable Dogs</a> </p>'
    });
    marker.addListener('click',function(){
      infoWindow.open(map,marker);
  });

//sets shelter location marker info for shelter 2

  map.setCenter(results[0].geometry.location);
  var marker2 = new google.maps.Marker({
    position:{lat:45.279124, lng:-92.990531},
    map:map,
    icon:'assets/images/mapIcon.png'
});
var infoWindow2 = new google.maps.InfoWindow({

  
  content:('<p> St. Francis Animal Rescue <br> Address: Forest Lake, MN 55025 <br>Phone: (612) 387-4869<br><a href="http://www.stfrananimal.org/animals/browse?species=Dog&status=Available" target="_blank">Adoptable Dogs</a></p>'
)
});
marker2.addListener('click',function(){
infoWindow2.open(map,marker2);
});

//sets shelter location marker and info for shelter 3
map.setCenter(results[0].geometry.location);
var marker3 = new google.maps.Marker({
  position:{lat:45.106629, lng:-93.333117},
  map:map,
  icon:'assets/images/mapIcon.png'
});
var infoWindow3 = new google.maps.InfoWindow({


content:('<p> Midwest Animal Rescue & Services <br> Address: 4084 83rd Ave N, Brooklyn Park, Minnesota 55443<br>Phone: (763) 503-4990<br><a href="http://www.midwestanimalrescue.org/animals/browse?Species=Dog" target="_blank">Adoptable Dogs</a></p>')

});
marker3.addListener('click',function(){
infoWindow3.open(map,marker3);
});

//sets shelter location marker and info for shelter 4

map.setCenter(results[0].geometry.location);
var marker4 = new google.maps.Marker({
  position:{lat:44.974696, lng:-93.154784},
  map:map,
  icon:'assets/images/mapIcon.png'
});
var infoWindow4 = new google.maps.InfoWindow({


content:('<p> Animal Humane Society <br> Address: 1115 Beulah Ln, St Paul, MN 55108<br>Phone: (651) 645-7387<br><a href="https://www.animalhumanesociety.org/adoption?f%5B0%5D=animal_type%3ADog" target="_blank">Adoptable Dogs</a></p>')

});
marker4.addListener('click',function(){
infoWindow4.open(map,marker4);
});

//sets shelter location and marker info for shelter 5

map.setCenter(results[0].geometry.location);
var marker5 = new google.maps.Marker({
  position:{lat:44.987351, lng:-93.329415},
  map:map,
  icon:'assets/images/mapIcon.png'
});
var infoWindow5 = new google.maps.InfoWindow({


content:('<p> Animal Humane Society <br> Address: 845 Meadow Ln. N., Golden Valley, MN 554228<br>Phone: (952) 435-7738<br><a href="https://www.animalhumanesociety.org/adoption?f%5B0%5D=animal_type%3ADog" target="_blank">Adoptable Dogs</a></p>')

});
marker5.addListener('click',function(){
infoWindow5.open(map,marker5);
});

//sets shelter location and marker info for shelter 6

map.setCenter(results[0].geometry.location);
var marker6 = new google.maps.Marker({
  position:{lat:44.789345, lng:-93.601839},
  map:map,
  icon:'assets/images/mapIcon.png'
});
var infoWindow6 = new google.maps.InfoWindow({


content:('<p> Southwest Metro Animal Rescue<br> Address: Chaska, MN 55318<br>Phone: (952) 368-7297<br><a href="https://www.swmetroanimalrescue.org/index.php/adoption/adoptable-dogs" target="_blank">Adoptable Dogs</a></p>')

});
marker6.addListener('click',function(){
infoWindow6.open(map,marker6);
});

//sets shelter location and marker info for shelter 7

map.setCenter(results[0].geometry.location);
var marker7 = new google.maps.Marker({
  position:{lat:45.198214, lng:-93.301995},
  map:map,
  icon:'assets/images/mapIcon.png'
});
var infoWindow7 = new google.maps.InfoWindow({


content:('<p> Animal Humane Society <br> Address: 1411 Main St NW, Coon Rapids, MN 55448<br>Phone: (763) 862-4030<br><a href="https://www.animalhumanesociety.org/adoption?f[0]=animal_type:Dog" target="_blank">Adoptable Dogs</a></p>')

});
marker7.addListener('click',function(){
infoWindow7.open(map,marker7);
});

//sets shelter marker and info for 8

map.setCenter(results[0].geometry.location);
var marker8 = new google.maps.Marker({
  position:{lat:44.797396, lng:-93.527286},
  map:map,
  icon:'assets/images/mapIcon.png'
});
var infoWindow8 = new google.maps.InfoWindow({


content:('<p> Wags & Whiskers Animal Rescue of MN <br> Address: Wags & Whiskers does not have a shelter location<br>Phone: N/A <br><a href="http://www.wagsmn.org/adoption/adoptable-dogs/" target="_blank">Adoptable Dogs</a></p>')

});
marker8.addListener('click',function(){
infoWindow8.open(map,marker8);
});

//sets shelter marker and info for 9


map.setCenter(results[0].geometry.location);
var marker9 = new google.maps.Marker({
  position:{lat:44.797396, lng:-93.527286},
  map:map,
  icon:'assets/images/mapIcon.png'
});
var infoWindow9 = new google.maps.InfoWindow({


content:('<p> Southwest Metro Animal Rescue<br> Chaska, MN<br>Phone:(952) 368-7297 <br><a href="http://www.swmetroanimalrescue.org/index.php/adoption/adoptable-dogs" target="_blank">Adoptable Dogs</a></p>')

});
marker9.addListener('click',function(){
infoWindow9.open(map,marker9);
});

//sets shelter marker and info for 10


map.setCenter(results[0].geometry.location);
var marker10 = new google.maps.Marker({
  position:{lat:44.945970, lng:-92.907687},
  map:map,
  icon:'assets/images/mapIcon.png'
});
var infoWindow10 = new google.maps.InfoWindow({


content:('<p> Animal Humane Society <br> Address:  9785 Hudson Rd, Woodbury, MN 55125<br>Phone: (651) 730-6008<br><a href="https://www.animalhumanesociety.org/adoption?f[0]=animal_type:Dog" target="_blank">Adoptable Dogs</a></p>')

});
marker10.addListener('click',function(){
infoWindow10.open(map,marker10);
});

//sets shelter marker and info for 11
map.setCenter(results[0].geometry.location);
var marker11 = new google.maps.Marker({
  position:{lat:44.860236, lng:-93.405254},
  map:map,
  icon:'assets/images/mapIcon.png'
});
var infoWindow11 = new google.maps.InfoWindow({


content:('<p> Animal Humane Society <br> Address:  10100 Viking Dr #100, Eden Prairie, MN 55344<br>Phone:  (952) 322-7643<br><a href="https://secondhandhounds.org/dogs-for-adoption/" target="_blank">Adoptable Dogs</a></p>')

});
marker11.addListener('click',function(){
infoWindow11.open(map,marker11);
});

//sets shelter marker and info for 12
map.setCenter(results[0].geometry.location);
var marker12 = new google.maps.Marker({
  position:{lat:44.950371, lng:-93.322425},
  map:map,
  icon:'assets/images/mapIcon.png'
});
var infoWindow12 = new google.maps.InfoWindow({


content:('<p> Underdog Rescue <br> Address:  16453 St Louis Ave, Minneapolis, MN 55416<br>Phone: (952) 929-0777<br><a href="https://underdogrescuemn.com/adoptable-dogs/" target="_blank">Adoptable Dogs</a></p>')

});
marker12.addListener('click',function(){
infoWindow12.open(map,marker12);
});


//sets shelter marker and info for 13

map.setCenter(results[0].geometry.location);
var marker13 = new google.maps.Marker({
  position:{lat:45.337500, lng:-92.998056},
  map:map,
  icon:'assets/images/mapIcon.png'
});
var infoWindow13 = new google.maps.InfoWindow({


content:('<p> Northwoods Humane Society <br> Address:  7153 Lake Blvd, Wyoming, MN 55092<br>Phone: (651) 982-0240<br><a href="http://northwoodshs.org/adoptable-dogs/" target="_blank">Adoptable Dogs</a></p>')

});
marker13.addListener('click',function(){
infoWindow13.open(map,marker13);
});

//sets shelter marker and info for 14

map.setCenter(results[0].geometry.location);
var marker14 = new google.maps.Marker({
  position:{lat:45.138259, lng:-93.831573},
  map:map,
  icon:'assets/images/mapIcon.png'
});
var infoWindow14 = new google.maps.InfoWindow({


content:('<p> Crossroads Animal Shelter <br> Address: 2800 10th St SE, Buffalo, MN 55313 <br>Phone: (763) 684-1234 <br><a href="http://www.crossroadsshelter.org/adopt/adopt-a-dog" target="_blank">Adoptable Dogs</a></p>')

});
marker14.addListener('click',function(){
infoWindow14.open(map,marker14);
});

//sets shelter marker and info for 15 

map.setCenter(results[0].geometry.location);
var marker15 = new google.maps.Marker({
  position:{lat:44.785829, lng:-93.600116},
  map:map,
  icon:'assets/images/mapIcon.png'
});
var infoWindow15 = new google.maps.InfoWindow({


content:('<p> Carver Scott Humane Society <br> Address: 210 N Chestnut St, Chaska, MN 55318 <br>Phone:(952) 368-3553 <br><a href="https://www.carverscotths.org/find-dogs/#sl_embed&page=shelterluv_wrap_1514472410954%2Favailable_pets%2F2514%3Fspecies%3DDog" target="_blank">Adoptable Dogs</a></p>')

});
marker15.addListener('click',function(){
infoWindow15.open(map,marker15);
});

//sets shelter marker and info for 16 

map.setCenter(results[0].geometry.location);
var marker16 = new google.maps.Marker({
  position:{lat:44.721930, lng:-92.843647},
  map:map,
  icon:'assets/images/mapIcon.png'
});
var infoWindow16 = new google.maps.InfoWindow({


content:('<p> Animal Ark <br> Address: 2600 Industrial Ct, Hastings, MN 55033 <br>Phone:(651) 772-8983 <br><a href="https://www.animalarkmn.org/animals-for-adoption.html" target="_blank">Adoptable Dogs</a></p>')

});
marker16.addListener('click',function(){
infoWindow16.open(map,marker16);
});

//sets shelter marker and info for 17

map.setCenter(results[0].geometry.location);
var marker17 = new google.maps.Marker({
  position:{lat:45.547864, lng:-93.585284},
  map:map,
  icon:'assets/images/mapIcon.png'
});
var infoWindow17 = new google.maps.InfoWindow({


content:('<p> Ruff Start Rescue <br> Address: 12526 319th Ave, Princeton, MN 55371 <br>Phone: (763) 355-3981 <br><a href="http://www.ruffstartrescue.org/animals/browse?special=Dogs" target="_blank">Adoptable Dogs</a></p>')

});
marker17.addListener('click',function(){
infoWindow17.open(map,marker17);
});



//error code status

        
      } else {
        console.log('Geocode was not successful for the following reason: ' + status); 
      }
    });
  }




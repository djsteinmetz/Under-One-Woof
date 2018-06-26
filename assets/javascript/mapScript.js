var geocoder;
  var map;
//intialize map 
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(44.9537, -93.0900);
    var mapOptions = {
      zoom: 11,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  
 //get corresponding values from html 

  function codeAddress() {
    var address = document.getElementById('address').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {

        //sets shelter location and info for shelter 1
        map.setCenter(results[0].geometry.location);
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

//sets shelter location marker info for shelter 2

  map.setCenter(results[0].geometry.location);
  var marker2 = new google.maps.Marker({
    position:{lat:45.082570, lng:-93.231165},
    map:map,
    icon:'https://www.shareicon.net/data/32x32/2016/05/16/766092_dog_512x512.png'
});
var infoWindow2 = new google.maps.InfoWindow({
  content:'<p> test </p>'
});
marker2.addListener('click',function(){
infoWindow2.open(map,marker2);
});

//sets shelter location marker and info for shelter 3

        
        
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
 



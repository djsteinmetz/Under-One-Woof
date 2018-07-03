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
  if (address.length < 5 || address.length > 5) {
    //console.log("BAD ZIP");
    $("#zip-error").css("display", "block");
    $("#mapHidden").css("display", "none")
    $("#cardSpace").css("height", "0");
    return;
  }
  else {
    $("#mapHidden").css("display", "block");
    //console.log("show map");
    $("#zip-error").css("display", "none");
    $("#cardSpace").css("height", "600px");

    geocoder.geocode({ 'address': address }, function (results, status) {

      // console.log("show map2");

      if (status == 'OK') {
        //console.log("show map3");

        //positions and information of each animal shelter
        var shelters = [
          { lat: 44.996832, lng: -93.280261, contents: '<p> Minneapolis Animal Shelter<br>Address: 212 17th Ave. N., Minneapolis, MN 55411<br>Phone: 612-673-MACC (6222)<br><a href="http://petharbor.com/results.asp?searchtype=ADOPT&friends=1&samaritans=1&nosuccess=0&rows=10&imght=120&imgres=thumb&fontface=arial&fontsize=10&bgcolor=ffffff&imgborder=1&col_hdr_bg=B4CD95&col_hdr_fg=000000&col_bg=ffffff&col_bg2=B4CD95&col_fg=000000&sbg=4D5864&zip=55411&shelterlist=%27MNPL%27&atype=dog&start=4&nomax=1&page=1&where=type_DOG&nopod=1&view=sysadm.v_mnpl"target"_blank">Our Adoptable Dogs</a> </p>' },
          { lat: 45.279124, lng: -92.990531, contents: '<p> St. Francis Animal Rescue <br> Address: Forest Lake, MN 55025 <br>Phone: (612) 387-4869<br><a href="http://www.stfrananimal.org/animals/browse?species=Dog&status=Available" target="_blank">Adoptable Dogs</a></p>' },
          { lat: 45.106629, lng: -93.333117, contents: '<p> Midwest Animal Rescue & Services <br> Address: 4084 83rd Ave N, Brooklyn Park, Minnesota 55443<br>Phone: (763) 503-4990<br><a href="http://www.midwestanimalrescue.org/animals/browse?Species=Dog" target="_blank">Adoptable Dogs</a></p>' },
          { lat: 44.974696, lng: -93.154784, contents: '<p> Animal Humane Society <br> Address: 1115 Beulah Ln, St Paul, MN 55108<br>Phone: (651) 645-7387<br><a href="https://www.animalhumanesociety.org/adoption?f%5B0%5D=animal_type%3ADog" target="_blank">Adoptable Dogs</a></p>' },
          { lat: 44.987351, lng: -93.329415, contents: '<p> Animal Humane Society <br> Address: 845 Meadow Ln. N., Golden Valley, MN 554228<br>Phone: (952) 435-7738<br><a href="https://www.animalhumanesociety.org/adoption?f%5B0%5D=animal_type%3ADog" target="_blank">Adoptable Dogs</a></p>' },
          { lat: 44.789345, lng: -93.601839, contents: '<p> Southwest Metro Animal Rescue<br> Address: Chaska, MN 55318<br>Phone: (952) 368-7297<br><a href="https://www.swmetroanimalrescue.org/index.php/adoption/adoptable-dogs" target="_blank">Adoptable Dogs</a></p>' },
          { lat: 45.198214, lng: -93.301995, contents: '<p> Animal Humane Society <br> Address: 1411 Main St NW, Coon Rapids, MN 55448<br>Phone: (763) 862-4030<br><a href="https://www.animalhumanesociety.org/adoption?f[0]=animal_type:Dog" target="_blank">Adoptable Dogs</a></p>' },
          { lat: 44.797396, lng: -93.527286, contents: '<p> Wags & Whiskers Animal Rescue of MN <br> Address: Wags & Whiskers does not have a shelter location<br>Phone: N/A <br><a href="http://www.wagsmn.org/adoption/adoptable-dogs/" target="_blank">Adoptable Dogs</a></p>' },
          { lat: 44.797396, lng: -93.527286, contents: '<p> Southwest Metro Animal Rescue<br> Chaska, MN<br>Phone:(952) 368-7297 <br><a href="http://www.swmetroanimalrescue.org/index.php/adoption/adoptable-dogs" target="_blank">Adoptable Dogs</a></p>' },
          { lat: 44.945970, lng: -92.907687, contents: '<p> Animal Humane Society <br> Address:  9785 Hudson Rd, Woodbury, MN 55125<br>Phone: (651) 730-6008<br><a href="https://www.animalhumanesociety.org/adoption?f[0]=animal_type:Dog" target="_blank">Adoptable Dogs</a></p>' },
          { lat: 44.860236, lng: -93.405254, contents: '<p> Animal Humane Society <br> Address:  10100 Viking Dr #100, Eden Prairie, MN 55344<br>Phone:  (952) 322-7643<br><a href="https://secondhandhounds.org/dogs-for-adoption/" target="_blank">Adoptable Dogs</a></p>' },
          { lat: 44.950371, lng: -93.322425, contents: '<p> Underdog Rescue <br> Address:  16453 St Louis Ave, Minneapolis, MN 55416<br>Phone: (952) 929-0777<br><a href="https://underdogrescuemn.com/adoptable-dogs/" target="_blank">Adoptable Dogs</a></p>' },
          { lat: 45.337500, lng: -92.998056, contents: '<p> Northwoods Humane Society <br> Address:  7153 Lake Blvd, Wyoming, MN 55092<br>Phone: (651) 982-0240<br><a href="http://northwoodshs.org/adoptable-dogs/" target="_blank">Adoptable Dogs</a></p>' },
          { lat: 45.138259, lng: -93.831573, contents: '<p> Crossroads Animal Shelter <br> Address: 2800 10th St SE, Buffalo, MN 55313 <br>Phone: (763) 684-1234 <br><a href="http://www.crossroadsshelter.org/adopt/adopt-a-dog" target="_blank">Adoptable Dogs</a></p>' },
          { lat: 44.785829, lng: -93.600116, contents: '<p> Carver Scott Humane Society <br> Address: 210 N Chestnut St, Chaska, MN 55318 <br>Phone:(952) 368-3553 <br><a href="https://www.carverscotths.org/find-dogs/#sl_embed&page=shelterluv_wrap_1514472410954%2Favailable_pets%2F2514%3Fspecies%3DDog" target="_blank">Adoptable Dogs</a></p>' },
          { lat: 44.721930, lng: -92.843647, contents: '<p> Animal Ark <br> Address: 2600 Industrial Ct, Hastings, MN 55033 <br>Phone:(651) 772-8983 <br><a href="https://www.animalarkmn.org/animals-for-adoption.html" target="_blank">Adoptable Dogs</a></p>' },
          { lat: 45.547864, lng: -93.585284, contents: '<p> Ruff Start Rescue <br> Address: 12526 319th Ave, Princeton, MN 55371 <br>Phone: (763) 355-3981 <br><a href="http://www.ruffstartrescue.org/animals/browse?special=Dogs" target="_blank">Adoptable Dogs</a></p>' }
        ];
       
        //console.log(map);
        for (var i = 0; i < shelters.length; i++) {
          var icons = {
            center: map.setCenter(results[0].geometry.location),
            icon: 'assets/images/mapIcon.png',
            marker: new google.maps.Marker({
              position: shelters[i],
              map: map,
              icon: 'assets/images/mapIcon.png'
            })

          }
          attachInfoWindow(icons.marker, shelters[i].contents);

        };
        function attachInfoWindow(marker, content) {
          var infoWindow = new google.maps.InfoWindow({
            content: content
          })

          marker.addListener('click', function () {
            infoWindow.open(marker.get('map'), marker);
          });
        };//end function attachInfo

        //error code status
        console.log("show map5");

      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
}




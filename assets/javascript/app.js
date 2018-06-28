// // assigning our api key to a variable; easier to read and reuse.
// var apiKey = "d4faf03d83d711fa3aa93aedf9160107";

// // function so that our button is clickable and interactive.

// document.addEventListener("DOMContentLoaded", bindButtons);
$(document).ready(function () {
    // assigning our api key to a variable; easier to read and reuse.
    var apiKey = "d4faf03d83d711fa3aa93aedf9160107";



    bindButtons();
    console.log(bindButtons);

    function bindButtons() {
        // document.getElementById("submitZip").addEventListener("click", function(event) {
        $("#submitBtn").on("click", function (event) {
            event.preventDefault();
            // getting zip code from form entry by user.
            var zip = $("#address").val().trim();
            var queryUrl = "https://api.petfinder.com/pet.find";

            // filling out the query with ajax

            $.ajax({
                url: queryUrl,
                // method: "GET",
                jsonp: "callback",
                dataType: "jsonp",
                data: {
                    key: apiKey,
                    animal: "dog",
                    "location": zip,
                    output: "full",
                    format: "json"

                },
 
                success: function (response) {
                    // debug with console log
                    console.log(response);
                    // Reset the card display
                    $("#cardSpace").html("");
                    for (var i = 0; i < 10; i++) {
                        // JSONP response variables
                        var dogName = response.petfinder.pets.pet[i].name.$t;
                        var img = response.petfinder.pets.pet[i].media.photos.photo[2].$t;
                        var id = response.petfinder.pets.pet[i].id.$t;
                        var gender = response.petfinder.pets.pet[i].sex.$t;
                        // var breed = response.petfinder.pets.pet[i].breeds.breed;
                        // var age = response.petfinder.pets.pet[i].age.$t;

                        var dogDiv = $("<div class='card'>");
                        var div = $("<div class='card-body'>").html("<h1 class='card-title'>" + dogName + '</h1>');
                        if (gender === 'F') {
                            div.append('Female');
                        } else if (gender === 'M') {
                            div.append('Male');
                        } else {
                            div.append('');
                        };
                        var ul = $("<ul class='list-group list-group-flush'>");
                        var dogImage = $("<a id='href" + i + "'><img src='" + img + "' id='displayImage" + i +  "'class='card-img-top' alt='Card image cap'></a>");
                        dogDiv.prepend(div);
                        dogDiv.prepend(dogImage);
                        dogDiv.append(ul);

                        ul.append("<li class='list-group-item'><strong>Source:</strong> " + "https://www.petfinder.com/petdetail/" + id + "<br/>");

                        $("#cardSpace").prepend(dogDiv);
                        $("#href"+ i).attr("href", "https://www.petfinder.com/petdetail/" + id)
                                     .attr("target", "_blank");
                    }//end of forloop
                }, // end then function
                
                
            });
        });
    }

});
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
            var zip = $("#zip").val().trim();
            var queryUrl = "http://api.petfinder.com/pet.find";

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

                // .then(function (response) {

                // hadling the response we get back from the call to Petfinder

                success: function (response) {
                    // debug with console log
                    console.log(response);

                    for (var i = 0; i < 10; i++) {
                        // JSONP response variables
                        var dogName = response.petfinder.pets.pet[i].name.$t;
                        var img = response.petfinder.pets.pet[i].media.photos.photo[2].$t;
                        var id = response.petfinder.pets.pet[i].id.$t;
                        var gender = response.petfinder.pets.pet[i].sex.$t;
                        var breed = response.petfinder.pets.pet[i].breeds.breed;
                        var age = response.petfinder.pets.pet[i].age.$t;
                        console.log(dogName);
                        // console.log(img);
                        // console.log(id);
                        console.log(gender);
                        console.log(breed);
                        console.log(age);
                        var dogDiv = $("<div class='card'>");
                        var div = $("<div class='card-body'>").html("<h5 class='card-title text-center'>" + dogName + '</h5>');
                        var ul = $("<ul class='list-group list-group-flush'>");
                        var dogImage = $("<img class='card-img-top' alt='Card image cap'>");
                        dogImage.attr("src", img);
                        dogDiv.prepend(div);
                        dogDiv.prepend(dogImage);
                        dogDiv.append(ul);
                        ul.append("<li class='list-group-item'><strong>Source:</strong> " + "https://www.petfinder.com/petdetail/" + id + "<br/>")
                        $("#cardSpace").prepend(dogDiv);
                    }//end of forloop
                } // end then function


                // .then(function(response){

            });
        });
    }

});
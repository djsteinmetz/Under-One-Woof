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
        $("#submitZip").on("click", function (event) {


            event.preventDefault();

            // getting zip code from form entry by user.
            var zip = $("#zip").val().trim();
            // // var animal="dog";
            // var location=zip;
            // var output="full";
            // var format="json"
            // document.getElementById("zip").value;

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
                    
                    for (var i=0; i<10; i++){
                    var dogName = response.petfinder.pets.pet[i].name.$t;
                    console.log(dogName);
                    var img = response.petfinder.pets.pet[i].media.photos.photo[i].$t;
                    console.log(img);
                    var id = response.petfinder.pets.pet[i].id.$t;
                        console.log(id);
                    var newName = document.createElement("a");

                    var newDiv = document.createElement("div");

                    newName.textContent = dogName;

                    newName.href = "https://www.petfinder.com/petdetail" + id;

                    var newImg = document.createElement("img");

                    newImg.src = img;

                    // adding the results from the JSON to the webpage.
                    var list = document.createElement("div");
                    list.setAttribute("id", "List");
                    document.body.appendChild(list);

                    newDiv.appendChild(newName);
                    list.appendChild(newDiv);
                    list.appendChild(newImg);
                }//end of forloop
                } // end then function


                // .then(function(response){

            });
        });
    }

});
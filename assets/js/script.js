
var topics = ["Michael Jordan","John Travolta","Elvis Presley","Leonardo Dicaprio",
"Beyonce Knowles","George Clooney","Denzel Washington","Floyd Mayweather","Mike Tyson",
"Russell Crowe"];



function renderButtons(){

$(".buttons-view").empty();

for( var i=0; topics.length > i;i++) {
//create button
var movieBt = $("<button>");
//add classes
movieBt.addClass("btn btn-primary btn-md moviestar");

movieBt.attr("data-name", topics[i]);
movieBt.text(topics[i]);

$(".buttons-view").append(movieBt);

}

}



function displayMovieInfo() {
var starName = $(this).attr("data-name");


$(".gallery").empty();


var queryURL ="https://api.giphy.com/v1/gifs/search?api_key=f191f9153b4140f1b759fc7633b43e50&q="+starName+"&limit=10";

//

$.ajax({
url: queryURL,
method: 'GET'
}).done(function(response) {
console.log(response);


for(var i=0;response.data.length >i;i++){

var galleryDiv = $("<div>");
galleryDiv.addClass("col-md-4");

galleryDiv.append( $("<p>").html("<h3>Rating :</h3> "+response.data[i].rating.toUpperCase()));
var img = $("<img>");
img.addClass("img-thumbnail actorimage");
img.attr("src",response.data[i].images.fixed_height_still.url);
img.attr("data-still",response.data[i].images.fixed_height_still.url);
img.attr("data-animate",response.data[i].images.fixed_height.url);
img.attr("data-state","still");
galleryDiv.append(img);

$(".gallery").append(galleryDiv);
}	
});

}


renderButtons();



$(document).on("click", ".moviestar", displayMovieInfo);



$(document).on("click",".actorimage", function() {
var state = $(this).attr("data-state");
console.log(state);
if(state ==="still"){
var animate = ($(this).attr("data-animate"));
state = 'animate';
$(this).attr("src",animate);
$(this).attr("data-state" ,state);

}
else { 
console.log("Reset to still");
var still = ($(this).attr("data-still"));
state = 'still';
$(this).attr("src",still);
$(this).attr("data-state" ,state);
}
});


//Add new buttons
$("#newactorbutton").on("click",function(){

var newactor = $('input[type="text"]').val().trim();

console.log(newactor);

if(newactor != ""){
//push to topics array
topics.push(newactor);
renderButtons();
$('input[type="text"]').val("");
}
else {
}


});
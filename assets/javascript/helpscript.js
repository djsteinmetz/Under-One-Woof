


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBS-w_TrjzakR4g7WKGbhX3Yum7zp8cAps",
    authDomain: "group-project-1-6a102.firebaseapp.com",
    databaseURL: "https://group-project-1-6a102.firebaseio.com",
    projectId: "group-project-1-6a102",
    storageBucket: "group-project-1-6a102.appspot.com",
    messagingSenderId: "597394321329"
};
firebase.initializeApp(config);

// saving database to a variable called database.
var database = firebase.database();

// on-click button will run input function after it's clicked; will capture user input in the category, description and link fields,
//and at the same time triggering the push method to save user input to the database.
$(document).on("click", "#input-resource", function (event) {

    event.preventDefault();

    var category = $("#category-input").val().trim();
    var description = $("#description-input").val().trim();
    var link = $("#link-input").val().trim();

    database.ref().push({
        category: category,
        description: description,
        link: link,
        dateAdded: firebase.database.ServerValue.TIMESTAMP // takes timesstamp of when the data goes in database.


    }); // end data-base push method
});// end on-click function

// initiate child-added function, to append the user input that was saved to data-base on to the html web page.
database.ref().on("child_added", function(snapshot){
  
     //Dynamically creating the table rows and columns.
    var newval = snapshot.val();
    
    var newRow = $("<tr>");
    var categoryTd = $("<td>");
    var descriptionTd = $("<td>");
    var linkTd = $("<td>");

    // appending captured user input from data-base unto html.
    categoryTd.text(newval.category);
    descriptionTd.text(newval.description);
    linkTd.html("<a href='" + newval.link + "' target='_blank'>" + newval.link + "</a>");
    console.log(descriptionTd);
    newRow.append(categoryTd);
    newRow.append(descriptionTd);
    newRow.append(linkTd);

    $("tBody").append(newRow);



}); // end child-added function
// Create array of topics in strings

var topics = [
    "Dogs",
    "Cats",
    "X-Files",
    "Star Trek",
    "Interstellar",
    "The Matrix",
    "Contact",
    "Carl Sagan",
    "Northern Lights",
    "Camping",
    "Westworld",
    "Game of Thrones",
    "Whales",
    "Fractals",
    "Alex Grey",
    "Trent Reznor",

];

function renderButtons() {
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("topics");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);
        
    }
}

function alertTopicName() {
    var topics = $(this).attr("data-name");

    console.log(topics);
}



$("#add-topic").on("click", function (event) {
    event.preventDefault();
    var topic = $("#topic-input").val().trim();
    topics.push(topics);
   
});

$(document).on("click", ".topics", alertTopicName);
renderButtons();


var queryURL = "https://api.giphy.com/v1/gifs/search?q=trent+reznor&limit=10&rating=pg&api_key=uUNE7Q3A6C6PVuGwdTyE8Qkn0EXnEZnU";

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response) {
    // console.log(response);
})



// Dynamically turn them into buttons on my webpage
//  {
//      $("#topics-list").append("<button>" + topics[i] + "</button>");
//  }

// When the user clicks a button, 10 static gifs should appear from API with rating displayed
// $('button').on('click', function () {
//     console.log("button clicked!");
// })
// When giphy images is clicked, gif should animate
// When gif is clicked again, gif should stop




// / Create array of topics in strings

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


renderButtons();

function alertTopicName() {
    var topics = $(this).attr("data-name");

    console.log(topics);
}

function renderButtons() {
    $("#buttons-view").empty();

    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("topics btn btn-sage");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);
    };
};

$("#add-topic").on("click", function (event) {
    event.preventDefault();
    var topic = $("#topic-input").val().trim();
    topics.push(topic);
    renderButtons();
});

$(document).on("click", ".gif",function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });


$('#buttons-view').on('click', ".topics", function () {
    var searchTopic = $(this).attr("data-name");
    console.log(searchTopic);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTopic + "&api_key=dc6zaTOxFJmzC&limit=10&rating=pg";
   

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        $("#gifArea").empty();
        console.log(response);
        // console.log(response.data.length);
        for (var i = 0; i < response.data.length; i++) {
            var gif = response.data[i];
            // create a gif bucket
            var $div = $("<div class='col-12 col-md-6'>");
            // make a p tag to store our rating
            var $rating = $("<p>").text("Rating: " + gif.rating);
            // create an image tag
            var $img = $("<img>");
            // set img src to still img url
            // and an attribute that pulls the original static image url from the ajax 
            $img.attr("src", gif.images.original_still.url);
            $img.attr("data-still", gif.images.original_still.url);
            $img.attr("data-animate", gif.images.original.url);
            $img.attr("data-state", "still");
            $img.attr("class", "gif img-fluid");

            // Designate the div area for the still image and the rating
            // append our rating p tag and img tag
            $div.append($rating, $img);
            // append the image and rating info to the specific '#gifArea'
            $("#gifArea").append($div);

        };

    });
});




// When the user clicks a button, 10 static gifs should appear from API with rating displayed

// When giphy images is clicked, gif should animate

// When gif is clicked again, gif should stop





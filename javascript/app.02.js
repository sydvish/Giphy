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
        a.addClass("topics");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);
    };
};

$("#add-topic").on("click", function (event) {
    event.preventDefault();
    var topic = $("#topic-input").val().trim();
    // console.log(topic);
    topics.push(topic);
    // console.log(topic);
    renderButtons();
});

$('#buttons-view').on('click', function () {
    // console.log("button clicked!");
    var searchTopic = $(this).data("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTopic + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(queryURL);
    

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
    })
})




// Dynamically turn them into buttons on my webpage

// When the user clicks a button, 10 static gifs should appear from API with rating displayed

// When giphy images is clicked, gif should animate

// When gif is clicked again, gif should stop





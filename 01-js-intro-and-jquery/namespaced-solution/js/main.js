var ajax = ajax || {};
var spotify = spotify || {};
spotify.jsonHelper = spotify.jsonHelper || {};

$(document).ready(function() {
  $("#welcome-section").fadeTo("slow", 1);
  $(".alias").focus();
  ajax.performQuery("https://api.spotify.com/v1/search",
    "GET",
    "q=Rolling Stones&type=album",
    spotify.jsonHelper.displayAlbum,
    spotify.error
    );
});

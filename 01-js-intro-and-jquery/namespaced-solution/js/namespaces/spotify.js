var spotify = spotify || {};

spotify.error = function() {
  alert("Could not connect to Spotify");
}

$("#search-btn").click(function() {
  var album = $("#albums-search input").val();
  $("#albums-search input").val("");
  $("#sidebar #albums article ul").html("");
  ajax.performQuery("https://api.spotify.com/v1/search",
    "GET",
    "q=" + album + "&type=album",
    spotify.jsonHelper.displayAlbum,
    spotify.errorSpotify
    );
});
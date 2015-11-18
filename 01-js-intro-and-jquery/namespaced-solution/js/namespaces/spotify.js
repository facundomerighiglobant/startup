var myApp = myApp || {};
myApp.spotify = myApp.spotify || {};
myApp.services = myApp.services || {};
myApp.services.jsonHelper = myApp.services.jsonHelper || {};

myApp.spotify.error = function() {
  alert("Could not connect to Spotify");
}

myApp.spotify.initialLoad = function() {
  //$(document).ready(function() {
    $("#welcome-section").fadeTo("slow", 1);
    $(".alias").focus();
    myApp.services.performQuery("https://api.spotify.com/v1/search",
      "GET",
      "q=Rolling Stones&type=album",
      myApp.services.jsonHelper.displayAlbum,
      myApp.spotify.error
      );
  //});
}();

myApp.spotify.loadListeners = function() {
  $("#search-btn").click(function() {
    var album = $("#albums-search input").val();
    $("#albums-search input").val("");
    $("#sidebar #albums article ul").html("");
    myApp.services.performQuery("https://api.spotify.com/v1/search",
      "GET",
      "q=" + album + "&type=album",
      myApp.services.jsonHelper.displayAlbum,
      myApp.spotify.errorSpotify
      );
  });
}();

var spotify = spotify || {};
spotify.markupHelper = spotify.markupHelper || {};
spotify.jsonHelper = spotify.jsonHelper || {};

spotify.jsonHelper.displayAlbum = function(json) {
  var albums = json.albums.items;
  for(i=0; i < albums.length; i++) {
    var currentAlbum = new spotify.markupHelper.AlbumMarkup(albums[i]);
    $("#albums article ul").append(currentAlbum.toMarkup());
  }
  if(!$("#sidebar #albums article ul").children().length) alert("Artist not found");
}
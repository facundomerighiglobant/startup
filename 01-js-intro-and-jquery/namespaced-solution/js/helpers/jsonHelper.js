var myApp = myApp || {};
myApp.services = myApp.services || {};
myApp.services.markupHelper = myApp.services.markupHelper || {};
myApp.services.jsonHelper = myApp.services.jsonHelper || {};

myApp.services.jsonHelper.displayAlbum = function(json) {
  var albums = json.albums.items;
  for(i=0; i < albums.length; i++) {
    var currentAlbum = new myApp.services.markupHelper.AlbumMarkup(albums[i]);
    $("#albums article ul").append(currentAlbum.toMarkup());
  }
  if(!$("#sidebar #albums article ul").children().length) alert("Artist not found");
}

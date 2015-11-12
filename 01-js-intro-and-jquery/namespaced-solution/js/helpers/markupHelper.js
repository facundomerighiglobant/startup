var myApp = myApp || {};
myApp.services = myApp.services || {};
myApp.services.markupHelper = myApp.services.markupHelper || {};

myApp.services.markupHelper.AlbumMarkup = function(album) {
  this.name = album.name;
  this.album_type = album.album_type;
  this.external_urls = album.external_urls;
  this.images = album.images;
  this.toMarkup = function() {
    return "<li><p class='album-names'>" + this.name + 
    "</p>" + "<p>" + this.album_type + 
    "</p>" + "<a href='" + this.external_urls.spotify + 
    "'>" +  "<img src='" + this.images[1].url +
    "'>" + "</a></li>";
  };
}

myApp.services.markupHelper.highlight = function(id) {
  name = $(".alias").val();
  var newHtml = document.getElementById(id)
  .innerHTML.replace(name, '<span class="highlight">' + name + '</span>');
  document.getElementById(id).innerHTML = newHtml;
  $(".highlight").css("background-color", "yellow");
}
$(document).ready(function() {
  var $welcome_sct = $("#welcome-section");
  var $albums = $("#albums");
  var name = "";
  var album = "";

  $welcome_sct.fadeTo("slow", 1);
  $(".alias").focus();

  performAjaxQuery("https://api.spotify.com/v1/search",
    "GET",
    "q=Rolling Stones&type=album",
    displayJSON,
    errorSpotify
    );

  $("#welcome-btn").click(function() {
    name = $(".alias").val();
    performAjaxQuery("http://bootcamp.aws.af.cm/welcome/" + name, 
      "GET", 
      null, 
      performGreeting, 
      welcomeError);
  });

  $("#search-btn").click(function() {
    album = $("#albums-search input").val();
    $("#albums-search input").val("");
    $("#sidebar #albums article ul").html("");
    performAjaxQuery("https://api.spotify.com/v1/search",
      "GET",
      "q=" + album + "&type=album",
      displayJSON,
      errorSpotify
      );
  });

  function highlight(name, id) {
    var newHtml = document.getElementById(id)
    .innerHTML.replace(name, '<span class="highlight">' + name + '</span>');
    document.getElementById(id).innerHTML = newHtml;
    $(".highlight").css("background-color", "yellow");
  }

  function displayJSON(json) {
    var albums = json.albums.items;
    for(i=0; i < albums.length; i++) {
      $("#albums article ul").append(
        "<li><p class='album-names'>" + albums[i].name + "</p>" + 
        "<p>" + albums[i].album_type + "</p>" + 
        "<a href='" + albums[i].external_urls.spotify + "'>" +  
        "<img src='" + albums[i].images[2].url + "'>" + 
        "</a></li>"
        );
    }
    if($("#sidebar #albums article ul").children().length == 0) alert("Artist not found");
  }

  function performAjaxQuery(_url, _type, _data, successAction, errorAction) {
    $.ajax({
      type: _type,
      url: _url,
      data: _data,
      success: function(res) {
        successAction(res);
      },
      error: function() {
        errorAction();
      }
    });
  }

  function errorSpotify() {
    alert("Could not connect to Spotify");

  }


  function welcomeError() {
    $welcome_sct.children().css("color","red");
  }

  function performGreeting(val) {
    $("#label").text(val["response"]);
    $welcome_sct.children().css("color","black");
    highlight(name, "label");
    $(".alias").val("");
  }

});


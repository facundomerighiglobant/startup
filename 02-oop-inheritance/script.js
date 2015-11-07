function Movie(){}

Movie.prototype.attributes = {
  title: null,
  year: null,
  actors: []
}
Movie.prototype.play = function() {
  MovieObserver.notify(this, 'play');
}
Movie.prototype.stop = function() {
  MovieObserver.notify(this, 'stop');
}
Movie.prototype.set = function(attr, value) {
  this.attributes[attr] = value;
  console.log(attr + " set to " + value);
}
Movie.prototype.get = function(attr) {
  console.log("Retrieved " + attr);
  return this.attributes.attr;
}

function DownloadableMovie(){}

DownloadableMovie.prototype = Object.create(Movie.prototype);
DownloadableMovie.prototype.constructor = DownloadableMovie;

DownloadableMovie.prototype.download = function(){
  console.log("Downloading " + DownloadableMovie.attributes.title);
}

var MovieObserver = {
  notify : function(movie, fn) {
    switch(fn){
      case 'play' : {
        console.log("Playing " + movie.attributes.title);
        break;
      }
      case 'stop' : {
        console.log("Stopped " + movie.attributes.title);
      }
    }
  }
}

function Actor(name) {
  this.name = name
}

var george = new Actor("George Clooney");
var morgan = new Actor("Morgan Freeman");
var johnny = new Actor("Johnny Depp");

var movieStars = [george, morgan, johnny];

var movie = new Movie();
movie.set('title', "someTitle");

movie.attributes.actors = movie.attributes.actors.concat(movieStars);
var movieActors = movie.attributes.actors;

for(actor in movieActors){
 console.log(movieActors[actor].name);
}
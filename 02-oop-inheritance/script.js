function Movie(){}

Movie.prototype.attributes = {
  title : null,
  year : null,
  actors : null
}
Movie.prototype.play = function(){
  MovieObserver.notify(this, 'play');
}
Movie.prototype.stop = function(){
  MovieObserver.notify(this, 'stop');
}
Movie.prototype.set = function(attr, value){
  this.attributes.attr = value;
  console.log(attr + " set to " + value);
}
Movie.prototype.get = function(attr){
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
  notify : function(movie, fn){
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
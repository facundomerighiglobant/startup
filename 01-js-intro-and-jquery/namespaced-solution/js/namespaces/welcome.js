var myApp = myApp || {};
myApp.welcome = myApp.welcome || {};
myApp.services = myApp.services || {};
myApp.services.markupHelper = myApp.services.markupHelper || {};

myApp.welcome.error = function() {
  $("#welcome-section").children().css("color","red");
}

myApp.welcome.performGreeting = function(val) {
  $("#label").text(val.response);
  $("#welcome-section").children().css("color","black");
  myApp.services.markupHelper.highlight("label");
  $(".alias").val("");
}

myApp.welcome.loadListeners = function() {
  $("#welcome-btn").click(function() {
    myApp.services.performQuery("http://bootcamp.aws.af.cm/welcome/" + $(".alias").val(), 
      "GET", 
      null,
      myApp.welcome.performGreeting, 
      myApp.welcome.error
      );
  });
}();
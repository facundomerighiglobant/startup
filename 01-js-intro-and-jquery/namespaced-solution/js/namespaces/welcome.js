var welcome = welcome || {};
var ajax = ajax || {};
var markupHelper = markupHelper || {};

$("#welcome-btn").click(function() {
  ajax.performQuery("http://bootcamp.aws.af.cm/welcome/" + $(".alias").val(), 
    "GET", 
    null,
    welcome.performGreeting, 
    welcome.error);
});

welcome.error = function() {
  $("#welcome-section").children().css("color","red");
}

welcome.performGreeting = function(val) {
  $("#label").text(val.response);
  $("#welcome-section").children().css("color","black");
  markupHelper.highlight("label");
  $(".alias").val("");
}
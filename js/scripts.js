// back end logic

//this is to convert values from survey into int

var intValues = function {
  $("form#survey").
}
var suggestLang = function {
  if (value <= 7) {
    $("#Noobstuff").show();
  } else if (value >= 8) {
    $("#Python").show();
  } else if (value >= 26) {
    $("#leetstuff").show();
  }
};



//front end UI
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();

  });
});
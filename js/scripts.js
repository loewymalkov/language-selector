// back end logic

//this is to convert values from survey into int

// var intValues = function {
//   $("form#survey").submit(function(){
//     var experienceVal = parseInt.($("survey#experience").val());
//     var intentVal = parseInt.($("survey#intent").val());
//     var applicationVal = parseInt.($("survey#experience").val());
//   });
// };

var selectVal = parseInt(document.getElementById("experience").value);

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
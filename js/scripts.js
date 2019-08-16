// back end logic

//this is to convert values from survey into int

// var intValues = function {
//   $("form#survey").submit(function(){
//     
//     var intentVal = parseInt.($("survey#intent").val());
//     var applicationVal = parseInt.($("survey#experience").val());
//   });
// };


// var selectVal = parseInt($("#experience").val());




//front end UI
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    console.log('event');
    var selectVal = parseInt(document.getElementById("experience"));
    var selectVal = parseInt(document.getElementById("intent"));
    var selectVal = parseInt(document.getElementById("application"));
    var selectVal = parseInt(document.getElementById("interest"));
    var selectVal = parseInt(document.getElementById("level"));

    var suggestLang = function() {
      if (selectVal <= 7) {
        $("#javascript").show();
      } else if (selectVal >= 8) {
        $("#python").show();
      } else if (selectVal >= 26) {
        $("#ruby").show();
      }
    };
  });
});
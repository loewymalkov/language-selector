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
    var experienceValue = parseInt($("#experience").val());
    var intentValue = parseInt($("#intent").val());
    var applicationValue = parseInt($("#application").val());
    var interestValue = parseInt($("#interest").val());
    var levelValue = parseInt($("#level").val());

    
    if (totalVal <= 7) {
      $("#javascript").show();
    } else if (totalVal >= 8) {
      $("#python").show();
    } else if (totalVal >= 26) {
      $("#ruby").show();
    }
  });
});
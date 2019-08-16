// back end logic
addVal = function (val1, val2, val3, val4, val5) {
  return val1 += val2 += val3 += val4 += val5;
}


//front end UI
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    let experienceValue = parseInt($("#experience").val());
    let intentValue = parseInt($("#intent").val());
    let applicationValue = parseInt($("#application").val());
    let interestValue = parseInt($("#interest").val());
    let levelValue = parseInt($("#level").val());
    let totalVal = addVal(experienceValue, intentValue, applicationValue, interestValue, levelValue);
    
    if (totalVal <= 5 ) {
      $("#javascript").show();
      $("#python").hide();
      $("#ruby").hide();
    } else if ((totalVal >= 6) && (totalval <=9)) {
      $("#javascript").hide();
      $("#python").show();
      $("#ruby").hide();
    } else if (totalVal >= 10) {
      $("#javascript").hide();
      $("#python").hide();
      $("#ruby").show();
    };
  });
});
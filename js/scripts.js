// back end logic

// var totalVal = experienceValue += intentValue += applicationValue += interestValue += levelValue +=


//front end UI
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var experienceValue = parseInt($("#experience").val());
    var intentValue = parseInt($("#intent").val());
    var applicationValue = parseInt($("#application").val());
    var interestValue = parseInt($("#interest").val());
    var levelValue = parseInt($("#level").val());
    var totalVal = experienceValue += intentValue += applicationValue += interestValue += levelValue;
    
    if (totalVal <= 5) {
      $("#javascript").show();
      $("#python").hide();
      $("#ruby").hide();
    } else if (totalVal >= 6) {
      $("#javascript").hide();
      $("#python").show();
      $("#ruby").hide();
    } else if (totalVal >= 11) {
      $("#javascript").hide();
      $("#python").hide();
      $("#ruby").show();
    }
  });
});
$(document).ready(function() {

  $("form#survey").submit(function(event) {
    event.preventDefault();

    var nameInput = $('#name').val();
    var favoriteSeasonInput = parseInt($('#favorite-season').val());
    var bedtimeInput = parseInt($('#bedtime').val());
    var favoriteFoodInput = parseInt($('#favorite-food').val());
    var pastTimeInput = parseInt($('#past-time').val());
    var totalInput = (favoriteSeasonInput + bedtimeInput + favoriteFoodInput + pastTimeInput);

    $('.name').text(nameInput);

    $('#portland').hide();
    $('#sanfrancisco').hide();
    $('#miami').hide();
    $('#lasvegas').hide();
    $('#survey').hide();
    $('#header').hide();


    if((totalInput >= 40) && (totalInput <= 70)) {
      $('#portland').fadeIn(2500);
    } else if ((totalInput >= 80) && (totalInput <= 110 )) {
      $('#sanfrancisco').fadeIn(2500);
    } else if ((totalInput >= 120) && (totalInput <= 150 )) {
      $('#miami').fadeIn(2500);
    } else if ((totalInput >= 160) && (totalInput <= 5000 )) {
      $('#lasvegas').fadeIn(2500);
    }  else (alert("Please completely fill out survey!"));

  });
});

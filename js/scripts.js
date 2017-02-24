$(document).ready(function() {

  $("form#survey").submit(function(event) {
    event.preventDefault();

    var nameInput = $('#name').val();
    var favorite-seasonInput = $('#favorite-season').val();
    var bedtimeInput = $('#bedtime').val();
    var favorite-foodInput = $('#favorite-food').val();
    var past-timeInput = $('#past-time').val();
    var totalInput = (favorite-seasonInput + bedtimeInput + favorite-foodInput + past-timeInput);

    $('.name').text(nameInput);


  });
});

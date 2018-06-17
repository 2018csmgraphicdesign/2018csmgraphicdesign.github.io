$(document).ready(function(){
  setTimeout(function () {
    $( ".loadingState" ).animate({
      opacity: 0,
    }, 1000, function() {

      $(".loadingState").remove();
    });
  }, 11000);
})

$(document).ready(function(){
  setTimeout(function () {
    $( ".loadingState" ).animate({
      opacity: 0,
    }, 1000, function() {
    // Animation complete.
    });
  }, 12000);
  setTimeout(function () {
    $(".loadingState").remove();
  }, 13000);
})

$(document).ready(function(){
  setTimeout(function () {
    $( ".loadingState" ).animate({
      opacity: 0,
    }, 1000, function() {

      $(".loadingState").remove();
      $(".users").css("z-index", 0);
    });
  }, 11500);
})

var dist = 0,
    notInput = false;

$(window).on("scroll", function(){
  dist = $('html').scrollTop();
  if(dist == 0){
    dist = $('body').scrollTop();
  }
  $(".container--search-input-top, .container--search").css({"background": "rgba(255,255,255, " + (dist/$(window).height()) + ")" });
});

$(".container--hover").mouseover(function(){
  if( dist === 0 && !(notInput)){
    $('body, html').animate({scrollTop: 20}, 250);
    // $(".container--search-input").css({"padding": "0 2.5vw 10vh 2.5vw"});
    // $(".container--search").css({"top": "92.5vh"});
    // $(".container--search-input").removeClass("peekTop");
    // $(".container--search").removeClass("peekCont");
  }
});

$("#frame").mouseover(function(){
  if( dist === 20){
    $('body, html').animate({scrollTop: 0}, 250);
    // $(".container--search-input").css({"padding": "0 2.5vw 10vh 2.5vw"});
    // $(".container--search").css({"top": "92.5vh"});
    // $(".container--search-input").removeClass("peekTop");
    // $(".container--search").removeClass("peekCont");
  }
});

// $(".container--hover").mouseout(function(){
//   $('body, html').animate({scrollTop: 0}, 250);
//   // $(".container--search-input").css({"padding": "0 2.5vw 2.5vh"});
//   // $(".container--search").css({"top": "100vh"});
// });

$("section.search--nav.inline").mouseover(function(){
  notInput = true;
});
$("section.search--nav.inline").mouseout(function(){
  notInput = false;
});

//hover doesn't work?

$(window).ready(function() {
  setTimeout(function () {
    if (dist > 0) {
      $(".container--search-input").removeClass("peekTop");
      $(".container--search").removeClass("peekCont");
    }
  }, 9000);
});

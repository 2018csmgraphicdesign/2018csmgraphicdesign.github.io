var dist = 0,
    notInput = false;

$(window).on("scroll", function(){
  dist = $('body, html').scrollTop();
  $(".container--search-input-top, .container--search").css({"background": "rgba(255,255,255, " + (($('body, html').scrollTop())/800) + ")" });
});

$(".container--hover").mouseover(function(){
  if( dist === 0 && !(notInput)){
    $(".container--search-input").css({"padding": "0 2.5vw 10vh 2.5vw"});
    $(".container--search").css({"top": "92.5vh"});
    $(".container--search-input").removeClass("peekTop");
    $(".container--search").removeClass("peekCont");
  }
});
$(".container--hover").mouseout(function(){
  $(".container--search-input").css({"padding": "0 2.5vw 2.5vh"});
  $(".container--search").css({"top": "100vh"});
});

$("section.search--nav.inline").mouseover(function(){
  console.log(notInput);
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

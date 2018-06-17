var dist = 0,
    notInput = false;

$(window).on("scroll", function(){
  dist = $('html').scrollTop();
  console.log(dist);
  if(dist == 0){
    dist = $('body').scrollTop();
    $('body, html').animate({scrollTop: 0}, 250);
  }
  $(".container--search-input-top, .container--search").css({"background": "rgba(255,255,255, " + (dist/$(window).height()) + ")" });
  $('.title.fixed').css({"opacity": 1 - (dist/$(window).height()), "transition": "0.75s"});
});

$(".container--hover").mouseover(function(){
  if( dist === 0 && !(notInput)){
    $('body, html').animate({scrollTop: 50}, 250);
    //remove otherwise peeking happens after the user has already hovered over this area and discovered the peeking functionality
    // $(".container--search-input").removeClass("peekTop");
    // $(".container--search").removeClass("peekCont");
  }
});

$("#frame").mouseover(function(){
  if( dist <= 50){
    $('body, html').animate({scrollTop: 0}, 250);
    $(".container--search-input").removeClass("peekTop");
    $(".container--search").removeClass("peekCont");
  }
});

$("section.search--nav.inline").mouseover(function(){
  notInput = true;
});
$("section.search--nav.inline").mouseout(function(){
  notInput = false;
});

$(window).ready(function() {
  setTimeout(function () {
    // if (dist > 0) {
    //   $(".container--search-input").removeClass("peekTop");
    //   $(".container--search").removeClass("peekCont");
    // }
    if (dist == 0) {
      $('body, html').animate({scrollTop: 80}, 750);
    }
  }, 10000);
});

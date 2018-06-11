var lastScrollTop = 0,
    clicked = false;


$(document).ready(function () {

  $(".search--nav.inline .search--title.hover").on("click", function() {
    var windowType = $(this).attr("id");
    clicked = true;

    if($('.container--'+windowType).hasClass('hideRemove')){
      $(".search--nav.inline .search--title.hover").addClass("hoverActive hidden");
      $(this).removeClass("hoverActive hidden");

    } else {
      $(".search--nav.inline .search--title.hover").removeClass("hidden");
    }

    if (windowType === "about"){
      $(".container--about").toggleClass("hideRemove zIndex");
      $(".container--press, .container--visit").addClass("hideRemove zIndex");
    }

    if (windowType === "press"){
      $(".container--press").toggleClass("hideRemove zIndex");
      $(".container--about, .container--visit").addClass("hideRemove zIndex");
    }

    if (windowType === "visit"){
      $(".container--visit").toggleClass("hideRemove zIndex");
      $(".container--press, .container--about").addClass("hideRemove zIndex");
    }

    if (clicked) {
      var scrollTop = $(document).scrollTop();
      $('body, html').animate({scrollTop:0}, 500);
    }
  });

  $(".containerFade").on("click", function() {
    if (clicked) {
      console.log("x");
      $(".container--visit, .container--about, .container--press").addClass("hideRemove zIndex");
      $(".search--nav.inline .search--title.hover").removeClass("hoverActive hidden");
      clicked = false;
    }
  });
});

$(window).on("scroll", function(event){
  var st = $(this).scrollTop();
   if (st > lastScrollTop){
     $(".containerFade").addClass("hideRemove zIndex");
     $(".search--nav.inline .search--title.hover").removeClass("hidden hoverActive");
   } else {
      // upscroll code
   }
   lastScrollTop = st;
});

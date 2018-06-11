$(document).ready(function () {
  $(".search--nav.inline .search--title.hover").on("click", function() {
    var windowType = $(this).attr("id");

    if($('.container--'+windowType).hasClass('hideRemove')){
      $(".search--nav.inline .search--title.hover").css({"opacity": 0.25});
      $(this).css({"opacity": 1});
    } else {
      $(".search--nav.inline .search--title.hover").css({"opacity": 1});
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
  });


  $(".closeAboutPressVisit").on("click", function() {
    console.log("x");
    $(".container--visit, .container--about, .container--press").addClass("hideRemove zIndex");
    $(".search--nav.inline .search--title.hover").css({"opacity": 1});
  });
});

$(window).on("scroll", function(){
  var dist = $("#search")[0].getBoundingClientRect().top,
      winHeight = $(window).innerHeight();

  // console.log("distance: " + dist);
  if (dist > (winHeight * 0.75)) {
    $(".containerFade").addClass("hideRemove zIndex");
    $(".search--nav.inline .search--title.hover").css({"opacity": 1});
  }
});

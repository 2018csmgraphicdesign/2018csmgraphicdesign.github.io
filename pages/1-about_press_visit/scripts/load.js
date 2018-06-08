// $(".search--nav.inline .search--title.hover").on("click", function() {
//   var typeWindow = $(this).attr("id");
//   console.log(typeWindow);
//
//   if ((typeWindow === "about") || (typeWindow === "press") || (typeWindow === "visit")) {
//     $(".containerFade").toggleClass("hideRemove zIndex");
//     $(".container--" + typeWindow).toggleClass("hideRemove zIndex");
//   }
// });
//
// $(".closeAboutPressVisit").on("click", function() {
//   console.log("x");
//   $(".containerFade").addClass("hideRemove zIndex");
// });
//
// $(document).ready(function () {
//     $(".search--nav.inline .search--title.hover").click(function () {
//         var $clicked = $(this);
//         $(".search--nav.inline .search--title.hover").each(function () {
//             var $menu = $(this);
//             if (!$menu.is($clicked)) {
//                 $($menu).css({"opacity": 0.25});
//             }
//         });
//         $clicked.toggleClass("hideRemove zIndex");
//     });
// });

//could be shortened, see attempt aboveee
//add scrolling behaviour to close?
$(document).ready(function () {
  $(".search--nav.inline .search--title.hover").on("click", function() {
    var windowType = $(this).attr("id");

    $(".search--nav.inline .search--title.hover").css({"opacity": 0.25});
    $(this).css({"opacity": 1});

    if (windowType === "about"){
      $(".container--about").removeClass("hideRemove zIndex");
      $(".container--press").addClass("hideRemove zIndex");
      $(".container--visit").addClass("hideRemove zIndex");
    }

    if (windowType === "press"){
      $(".container--press").removeClass("hideRemove zIndex");
      $(".container--about").addClass("hideRemove zIndex");
      $(".container--visit").addClass("hideRemove zIndex");
    }

    if (windowType === "visit"){
      $(".container--visit").removeClass("hideRemove zIndex");
      $(".container--press").addClass("hideRemove zIndex");
      $(".container--about").addClass("hideRemove zIndex");
    }
  });


  $(".closeAboutPressVisit").on("click", function() {
    console.log("x");
    $(".container--visit").addClass("hideRemove zIndex");
    $(".container--press").addClass("hideRemove zIndex");
    $(".container--about").addClass("hideRemove zIndex");
    $(".search--nav.inline .search--title.hover").css({"opacity": 1});
  });
});

$(window).on("scroll", function(){
  var dist = $("#search")[0].getBoundingClientRect().top,
      winHeight = $(window).innerHeight();
  console.log("distance: " + dist);
  if (dist < (winHeight * 0.75)) {
    $(".containerFade").addClass("hideRemove zIndex");
    $(".search--nav.inline .search--title.hover").css({"opacity": 1});
  }
});

$(".search--nav.inline .search--title.hover").on("click", function() {
  var windowType = $(this).attr("id");

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
});

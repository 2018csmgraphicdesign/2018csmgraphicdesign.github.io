$(".search--nav.inline .search--title.hover").on("click", function() {
  var windowType = $(this).attr("id");

  if (windowType === "about"){
    console.log(1);

    $(".container--about").removeClass("hideRemove");
    $(".container--press").addClass("hideRemove");
    $(".container--visit").addClass("hideRemove");
  }

  if (windowType === "press"){
    console.log(2);

    $(".container--press").removeClass("hideRemove");
    $(".container--about").addClass("hideRemove");
    $(".container--visit").addClass("hideRemove");
  }

  if (windowType === "visit"){
    console.log(3);
    $(".container--visit").removeClass("hideRemove");
    $(".container--press").addClass("hideRemove");
    $(".container--about").addClass("hideRemove");
  }

})

$(window).on("load resize ready", function() {
  heightSearch();
  resizeContainerTags();
  gridResize();
});

$(window).on("click", function() {
  resizeContainerTags();
})

// fix height issue with search container background
function heightSearch() {
  var smallHeight = $(".container--search-input-top").innerHeight(),
      totalHeight = $(window).innerHeight(),
      applyHeight1 = $(".container--search");
      applyHeight2 = $("div#search");

      applyHeight1.css({"height": totalHeight - smallHeight + "px"});
      applyHeight2.css({"height": totalHeight - smallHeight + "px"});
      console.log("adjusting height!");
}

//scrollable container for overflowing tags
function resizeContainerTags() {
  var search = $(".container--search-input.inline").innerWidth(),
      filter = $("#filter-by").innerWidth(),
      clear = $("#clear").innerWidth(),
      input = $("input").innerWidth(),
      tagContainer = $(".container--overflow-tags");

      tagContainer.css({"max-width": (search - filter - clear - input - 25) + "px"})
      tagContainer.animate({scrollLeft: "1000%"}, 800);
}

function gridResize() {
  var longestRow = $("ul.row.type.grid.grid--12.nowrap").innerWidth(),
      titleBelow = $("p.search--subtitle.themes").innerWidth(),
      padding = $(window).innerWidth()*0.025;

  $(".row.students.grid--14.nowrap").css({"width": longestRow + "px",
                                          "left": (titleBelow + padding) + "px"});
}

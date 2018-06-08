$(window).on("load resize ready", function() {
  heightSearch();
  resizeContainerTags();
});

$(window).on("click", function() {
  resizeContainerTags();
})

// fix height issue with search container background
function heightSearch() {
  var smallHeight = $(".container--search-input.inline").innerHeight(),
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

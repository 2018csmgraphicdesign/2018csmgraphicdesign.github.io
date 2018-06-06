$(window).on("load", function() {
  $("input").focus();
  $("input").val("Explore");
});

$(window).on("load resize ready", function() {
  heightSearch();
});

function tagMove(){
  console.log(searchText);

  var searchText = $(".tag-content").html();
  $("input").val("Explore ( " + searchText + " )");
}

$("li").on("click", function() {
  if ($(this).hasClass("unselected")){
    $(this).removeClass("unselected");
  }

  if ($(this).siblings().addClass("selected")){
    $(this).siblings().removeClass("selected");
  }

  tagMove();
  $(this).addClass("selected");
  $(this).siblings().addClass("unselected");
});

//fix height issue with search container background
function heightSearch() {
  var smallHeight = $(".container--search-input.inline").innerHeight(),
      totalHeight = $(window).innerHeight(),
      applyHeight1 = $(".container--search.container--search-student");
      applyHeight2 = $("div#search");

      applyHeight1.css({"height": totalHeight - smallHeight + "px"});
      applyHeight2.css({"height": totalHeight - smallHeight + "px"});
      console.log("adjusting height!");
}

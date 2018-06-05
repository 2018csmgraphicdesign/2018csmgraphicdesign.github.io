$(window).on("load", function() {
  $("input").focus();
  $("input").val("Search for");
});

function tagMove(){
  console.log(searchText);

  var searchText = $(".tag-content").html();
  $("input").val("Search for " + searchText);
}

$("li").on("click", function() {
  // console.log(classParent);
  tagMove();
  // $(this).addClass("active");
  //etc
});

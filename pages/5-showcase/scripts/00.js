$(window).on("load", function() {
  $("input").focus();
  $("input").val("Search for");
});

function tagMove(){
  console.log(searchText);

  var searchText = $(".tag-content").html();
  $("input").val("Search for ( " + searchText + " )");
}

$("li").on("click", function() {
  if ($(this).hasClass("unselected")){
    $(this).removeClass("unselected");
  }
  tagMove();
  $(this).addClass("selected");
  $(this).siblings().addClass("unselected");

});

// function addBrackets() {
//   $(".active").prepend("(");
//   $(".active").append(")");
// }

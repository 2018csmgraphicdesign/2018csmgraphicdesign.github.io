$(window).on("load", function() {
  $("input").focus();
  // $("input").val("Search for");
});

function tagMove(){
  console.log(searchText);

  var searchText = $(".tag-content").html();
  $("input").val("Search for ( " + searchText + " )");
}

$("li").on("click", function() {
  var that = $(this);

  if(that.parent().hasClass('single')){
    if(that.hasClass('selected')){
      that.toggleClass("selected");
      that.siblings().toggleClass("unselected");
    } else {
      if(that.hasClass('unselected')){
        that.removeClass("unselected");
        that.addClass("selected");
        that.siblings().removeClass("selected");
        that.siblings().addClass("unselected");
      } else {
        that.addClass("selected");
        that.siblings().addClass("unselected");
      }
    }
  } else {
    if(that.hasClass('selected')){
      var otherSelected = false;
      that.siblings().each(function(){
        var that = $(this);
        if(that.hasClass('selected')){
          otherSelected = true;
        }
        console.log(otherSelected);
      });
      if(otherSelected){
        that.removeClass("selected");
        that.addClass("unselected");
      } else {
        that.removeClass("unselected");
        that.removeClass("selected");
        that.siblings().removeClass("unselected");
      }
    } else {
      if(that.hasClass('unselected')){
        that.removeClass("unselected");
        that.addClass("selected");
      } else {
        that.addClass("selected");
        that.siblings().addClass("unselected");
      }
    }
  }

  // tagMove();
});

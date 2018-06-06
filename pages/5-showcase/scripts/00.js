$(window).on("load", function() {
  $("input").focus();
  $("input").val("Filter by");
});

$(window).on("load resize ready", function() {
  heightSearch();
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


//updating search input
function tagMove(){
  console.log(searchText);


  var searchText = $(".tag-content").html();
  $("input").val("Filter by ( " + searchText + " )");
}

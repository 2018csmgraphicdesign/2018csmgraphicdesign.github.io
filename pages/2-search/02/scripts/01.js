// base code for search function
var monkeyList = new List('test-list', {
  valueNames: ['name']
});

//basic functions
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//positioning because im lazy
$(window).on("load", function() {
  $("input").focus();
  $("input").css({"top": ($(window).innerHeight() - $("input").innerHeight())/2 + "px" });

  //reorder();
  removeEmpty();
});

//visibility for hidden elements
$(".input--search").on("input", function() {

    $(".list-tag").wrapAll( "<section class='bottom'></section>" );

    var searchValue = this.value;
    console.log(searchValue);

    if (searchValue == "" || searchValue == " ") {
      $(".search--results").addClass("hide");
      $(".top--text").removeClass("blur");
      $(".bottom--text").removeClass("blur");

      //reorder();
      removeEmpty();
    }

    if (!(searchValue == ""))  {
      setTimeout(function () {
        $(".search--results").removeClass("hide");
        $(".top--text").addClass("blur");
        $(".bottom--text").addClass("blur");
        $(".top--text-left").removeClass("blur");
        $(".top--text-right").removeClass("blur");

        //reorder();
        removeEmpty();
      }, 250);
    }
});

//"non-square" images
$(".img").each(function(i){
  $(this).css({"width": getRandomInt(10,50) + "vw",
               "height": getRandomInt(25, 50) + "vh"});
  i++;
});

//remove duplicate tags
var seen = {};
$('.list-name p').each(function() {
    var txt = $(this).text();
    if (seen[txt])
        $(this).remove();
    else
        seen[txt] = true;
});

//remove empty tags
function removeEmpty() {
  $('.list-name:empty').remove();
  $('.list-tag:empty').remove();
  $('.name:empty').remove();
  $('.name-tag:empty').remove();
};

//layout tags
function reorder() {
  $(".list-tag .name-tag").each(function(i){
    $(this).css({"top": "+=" + i*16 + "px"});
    i++;
  });
};

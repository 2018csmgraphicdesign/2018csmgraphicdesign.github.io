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
})

//visibility for hidden elements
$(".input--search").on("input", function() {

    $( ".list-tag" ).wrapAll( "<section class='bottom'></section>" );

    var searchValue = this.value;
    console.log(searchValue);

    if (searchValue == "" || searchValue == " ") {
      $(".search--results").addClass("hide");
      $(".top--text").removeClass("blur");
      $(".bottom--text").removeClass("blur");
    }

    if (!(searchValue == ""))  {
      setTimeout(function () {
        $(".search--results").removeClass("hide");
        $(".top--text").addClass("blur");
        $(".bottom--text").addClass("blur");
        $(".top--text-left").removeClass("blur");
        $(".top--text-right").removeClass("blur");
      }, 250);
    }

    //remove empty blocks from html
    $('ul.list li:empty').remove();
});


$(".img").each(function(i){
  $(this).css({"width": getRandomInt(10,50) + "vw",
               "height": getRandomInt(25, 50) + "vh"});
  i++;
});

// base code for search function
var monkeyList = new List('test-list', {
  valueNames: ['img']
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
        $(".bottom--text-right").removeClass("blur");
      }, 250);
    }

    //remove empty blocks from html
    $('ul.list li:empty').remove();
});

//bloody list css
//  $(".list-contact .name-contact").each(function(i){
//    var names = $(".list-contact .name-contact").length;
//    console.log( names );
//    $(this).css({"margin-top": 10*i + "px"});
//    i++;
// });

$(".img").each(function(i){
  $(this).css({"width": getRandomInt(10,50) + "vw",
               "height": getRandomInt(25, 50) + "vh"});
  i++;
});

//type size fill test
// var autoSizeText;
//
// autoSizeText = function() {
//   var el, elements, _i, _len, _results;
//   elements = $('input span');
//   console.log(elements);
//   if (elements.length < 0) {
//     return;
//   }
//   _results = [];
//   for (_i = 0, _len = elements.length; _i < _len; _i++) {
//     el = elements[_i];
//     _results.push((function(el) {
//       var resizeText, _results1;
//       resizeText = function() {
//         var elNewFontSize;
//         elNewFontSize = (parseInt($(el).css('font-size').slice(0, -2)) - 1) + 'px';
//         return $(el).css('font-size', elNewFontSize);
//       };
//       _results1 = [];
//       while (el.scrollHeight > el.offsetHeight) {
//         _results1.push(resizeText());
//       }
//        return _results1;
//     })(el));
//   }
//   return _results;
// };

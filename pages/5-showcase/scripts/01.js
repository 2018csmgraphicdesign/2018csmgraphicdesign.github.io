$(window).on("load", function() {
  loadTxt();
  loadFiles();
  loadName();
});

$(window).on("load resize ready", function() {
  heightSearch();
});

function loadTxt() {
  // console.log(name);
  var oReq = new XMLHttpRequest();
  oReq.onload = function() {
    $(".load-student--txt").append(this.response);
  }
  oReq.open("get", "../7-student/getStudent-txt.php?name=alva", true);
  oReq.send();
}

function loadFiles() {
  // console.log(name);
  var oReq = new XMLHttpRequest();
  oReq.onload = function() {
    $(".load-student--files").append(this.response);
  }
  oReq.open("get", "../7-student/getStudent-files.php?name=alva", true);
  oReq.send();

  setTimeout(function(){
    $(".student-img").cycle({
      speed:  250,
      next: ".student-img",
      timeout: 0,
    });
    $(".student").css("right", "0%");
    var style = $('<style id="student-blur">.showImg { filter: blur(20px); pointer-events: none; }</style>');
    $('html > head').append(style);

  }, 200);
}

function loadName() {
  // console.log(name);
  var oReq = new XMLHttpRequest();
  oReq.onload = function() {
    $(".load-student--name").append(this.response);
  }
  oReq.open("get", "../7-student/getStudent-name.php?name=alva", true);
  oReq.send();
}

//fix height issue with search container background
function heightSearch() {
  var smallHeight = $(".container--search-input.inline").innerHeight(),
      totalHeight = $(window).innerHeight(),
      applyHeight1 = $(".container--search.container--search-student");
      applyHeight2 = $("div#search");

      // if ((smallHeight + applyHeight1 > totalHeight) || (smallHeight + applyHeight2 > totalHeight)) {
      //   $(".img.cycle-slide.cycle-slide-active").css({"height": totalHeight - smallHeight + "px"});
      // }
      
      applyHeight1.css({"height": totalHeight - smallHeight + "px"});
      applyHeight2.css({"height": totalHeight - smallHeight + "px"});
      console.log("adjusting height!");
}

function hackSlideshow() {
  $("div.vp-player-layout").css({"top": 0 + " !important",
                                 "left": "initial",
                                 "right": 0 + "!important"});
  console.log("resizing video");
}

setInterval(hackSlideshow(), 1000);

$(window).on("load", function() {
  loadTxt();
  loadFiles();
  loadName();
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

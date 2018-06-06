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

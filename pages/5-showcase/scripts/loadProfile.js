var clicked = false,
    imgReady = true,
    name

$(document).ready(function(){
  //get student profile page
  $('.students').click(function(e){
    var that = $(this),
        studentName = e.target.className.split(" ")[0];

    console.log("clicked: " + that[0] + " studentName: " + studentName);

    loadStudentProfile(studentName);

    that.children().css({"opacity": 0.25});
    that.children().addClass("fadeIn");

    $("."+ studentName).css({"opacity": 1});
    $("."+ studentName).addClass("fadeOut");

    clicked = true;
    imgReady = false;

    if (clicked) {
      closeStudentProfile();
      clicked = false;
    }
  });
});

//load student profile page
function loadStudentProfile(name) {
  var oReq = new XMLHttpRequest(),
      target = $(".container--student");

  oReq.onload = function() {
      $(".container--student").append(this.response);
  }
  oReq.open("get", "../7-student/loadProfile.php?name="+name, true);
  oReq.send();

  setTimeout(function(){
    $(".student-img").cycle({
      speed:  250,
      next: ".student-img",
      timeout: 0,
    });

    // target.css({"border": "10px solid red"});
    $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
  }, 750); //extra time otherwise the window scrolls upwards? in general a bit janky
}

function closeStudentProfile() {
  $("#removeStudent").remove();
}

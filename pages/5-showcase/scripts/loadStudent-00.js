var clicked = false,
    imgReady = true;

$(document).ready(function(){
  //get student profile page
  $('.students').click(function(e){
    var that = $(this);
    var studentName = e.target.className.split(" ")[0];

    loadStudentProfile(studentName);
    clicked = true;
    imgReady = false;

    // $('.showImg').each(function() {
    //   $(this).css('top', $(this).offset().top);
    // });

  });

  //load student profile page
  function loadStudentProfile(name) {
    console.log(name);
    var oReq = new XMLHttpRequest();
    oReq.onload = function() {
          $(".student").append(this.response);
    }
    oReq.open("get", "../7-student/getStudent.php?name="+name, true);
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

  //close student page
  $(document).on("click", ".close-button", function(){
    $(".student").css("right", "-50%");
    $('.showImg').each(function() {
      var top = $(this).offset().top;
      $(this).css("top", top + ($(window).height()*-1.5) + "px");
    });
    $("#student-blur").remove();
    var style = $('<style id="student-blur">.showImg { filter: blur(0px); pointer-events: none; }</style>');
    $('html > head').append(style);
    setTimeout(function(){
      $(".student").html("");
      $("#student-blur").remove();
      clicked = false;
      imgReady = true;
    },1000);
  });
});

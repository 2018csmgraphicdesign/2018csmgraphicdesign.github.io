var studentName;

$(document).ready(function(){

  var hash = location.hash;
  hash = hash.slice(1);
  if(hash != '' &&
     hash != 'filter' &&
     hash != 'about' &&
     hash != 'press' &&
     hash != 'visit'){
    studentName = hash;
    console.log(hash);
    loadStudentProfile(studentName);
  }

  //get student profile page
  $('.students').click(function(e){
    var that = $(this),
    studentName = e.target.className.split(" ")[0];
    studentName = studentName.toLowerCase();
    if(studentName == 'row'){
      return;
    }

    loadStudentProfile(studentName);
  });

  $('#showcase-imgs').click(function(e){
    var that = $(this);
    studentName = e.target.className.split(" ")[0];
    studentName = studentName.toLowerCase();

    loadStudentProfile(studentName);
  });

  $(document).on("click", ".close-button", function(){
    closeStudentProfile();

  });

  document.onmousewheel = function( e ) {
    if(e.deltaY < -150){
      closeStudentProfile();
    }
  };
});

//load student profile page
function loadStudentProfile(name) {

  $('body').animate({ scrollTop: ($('body').height())}, 1000, function(){
    $('body, html').css('overflow', 'hidden');
  });

  $('.students').children().css({"opacity": 0.25});
  $('.students').children().addClass("fadeIn");

  $("."+ name + " li").css({"opacity": 1});
  $("."+ name + " li").addClass("fadeOut");

  location.hash = name;

  var oReq = new XMLHttpRequest(),
      target = $(".container--student");

  oReq.onload = function() {
      $(".container--student").append(this.response);
      if($('.student-name').attr('id') == undefined){
        console.log('no no');
        $(".load-student--txt").append('<div class="no-student">Student not found</div>');
      }
  }
  oReq.open("get", "../7-student/loadProfile.php?name="+name, true);
  oReq.send();

  setTimeout(function(){
    $(".student-img").cycle({
      speed:  1,
      next: ".student-img",
      timeout: 0,
    });

    $('.container--student').animate({'top': '7vh'}, 1000);

  }, 750); //extra time otherwise the window scrolls upwards? in general a bit janky
}

function closeStudentProfile() {
  location.hash = 'filter';
  $('.container--student').animate({'top': '108vh'}, 1000);
  $('.students li').each(function(){
    $(this).removeClass('fadeOut fadeIn').css({"opacity": ''});
  });
  $('.showImg').each(function() {
    var top = $(this).offset().top;
    $(this).css("top", top + ($(window).height()*-1.5) + "px");
  });
  setTimeout(function(){
    $(".container--student").html('');
    $('body, html').css('overflow', 'auto');
  }, 1000);
}

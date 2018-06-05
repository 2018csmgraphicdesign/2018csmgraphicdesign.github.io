
var fontSize1;
var fontSize;
var screenWidth;
var userId;
var user;
var uid;
var isAnonymous;
var databaseUsers;
var allUsers;
var database;
var usernames = [];
var mouseAlign;
var isClicked;
var hovered;
var direction;
var direction2;
var count;
var xPos = 0;
var yPos = 0;
var clicked = false;
var online;
var filenames;
var imgCount = 0;
var ready = true;
var userData;
var pos = [{x:0,y:0}];
var random;
var last = -1;
var dup = false;
var isMobile = false;
var existing = 0;
var localRandom = false;
var r1;
var r2;
var firstRun = true;
var online = true;
var imgReady = true;
var showImgCount = 0;
var clicked = false;

var filtered = [];
var showcaseTags = [];
var term = '';

$(document).ready(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDWbvkGPMjv5YHquul1a0xHlp4gpjOooD4",
    authDomain: "degree-show-landing-page.firebaseapp.com",
    databaseURL: "https://degree-show-landing-page.firebaseio.com",
    projectId: "degree-show-landing-page",
    storageBucket: "degree-show-landing-page.appspot.com",
    messagingSenderId: "228336066373"
  };
  firebase.initializeApp(config);

  database = firebase.database();
  allUsers = database.ref('users');
  // allUsers.on('value', gotData);

  getAllStudents();
  getShowcaseImg();
  newUser();

  var isMobile = false;
  // device detection
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
      isMobile = true;
  }

  setTimeout(function(){
    setInterval(gotData, 250);
  },1500);

  setTimeout(function(){
    setInterval(mouseFollow, 20);
    database.ref("userCount").on('value', function(data){
      var userCount = ("0" + data.val()).slice(-2);
      $("#users, #mobileUsers").html("Users ["+userCount+"]");
      if(pos.length<data.val()){
        for(var j = pos.length; j < data.val() ;j++){
          pos[j] = {x:0,y:0};
        }
      }
    });
  },1000);

  setInterval( checkPageFocus, 1000);

  allUsers.on('child_added', function(data){
    var test2 = data.ge.path.n[1];
    if(!isMobile){
      $( "body" ).append( "<div class = 'users'  id='"+test2+"' style='position:fixed; left: 0; top: 0; font-family:Degreeshow; font-size:80px; line-height:0; color:blue;'>™<div class = 'popup' id='"+test2+"'></div></div>" );
    } else {
      yPos = -5;
      xPos = -5;
      $("#"+uid).css({"left": "-5%", "top": "-5%"});
      if(test2 != uid){
        $( "body" ).append( "<div class = 'users'  id='"+test2+"' style='position:fixed; left: 0; top: 0; font-family:Degreeshow; font-size:80px; line-height:0; color:blue;'>™<div class = 'popup' id='"+test2+"'></div></div>" );
      }
    }
    $( "#"+uid ).css({"pointer-events":"none","z-index":"100000"});
    $( "#"+uid ).html("·");


    $( window ).mousemove(function( event ) {

        yPos = ((event.pageY - $(window).scrollTop()) / $(window).height())*100;
        xPos = (event.pageX / $(window).width())*100;
        $("#"+uid).css({"left": xPos+"%", "top": yPos+"%", "transition": "all 0s"});

    });

  });

  allUsers.on('child_removed', function(data){
    var test2 = data.ge.path.n[1];
    $( "#"+test2 ).remove();
  });

  $('.students, #showcase-imgs').click(function(e){
    var that = $(this);
    var studentName = e.target.className.split(" ")[0];
    loadStudent(studentName);
    clicked = true;
    imgReady = false;
    $('.showImg').each(function() {
      $(this).css('top', $(this).offset().top);
    });
  });

  $('#showcase-imgs').hover(function(){
    imgReady = false;
    $('.showImg').each(function() {
      $(this).css('top', $(this).offset().top);
    });
  }, function(){
    if(!clicked){
    imgReady = true;
      $('.showImg').each(function() {
        var top = $(this).offset().top;
        $(this).css("top", top + ($(window).height()*-1.5) + "px");
      });
    }
  });

  $('.type li').click(function(){

    var that = $(this);

    if(that.parents('ul').hasClass('single') && !that.hasClass('active')){
      that.parents('ul').children().each(function(){
        var that = $(this);
        that.removeClass('active');
      });
    }
    that.toggleClass('active');

    filtered = [];
    showcaseTags = [];
    var tags = [];

    $('.type li').each(function(){
      var that = $(this);
      var type = that.parents('ul').data('type');
      var sort = that.data('sort');
      var name = that.text();

      if(that.hasClass('active')){
        filtered.push('.' + type + '-' + sort);
        showcaseTags.push(sort);
        tags.push(name);
      }
    });

    var tagsLength = tags.length;
    var tagBlocks = '';
    for (var i = 0; i < tagsLength; i++){
        tagBlocks = tagBlocks + '<div class="tag tag-content">' + tags[i] + '</div>';
    }
    $('.results').html(tagBlocks);

    updateSearch();

  });

  $('input').on('propertychange change click keyup input paste', function(){
    term = $(this).val().toLowerCase();
    $('li').removeClass('hidden');

    if(filtered.length === 0){
      $('li').removeClass('hidden');
    } else {
      var filterClasses = filtered.join('');
      $('.students li').removeClass('hidden');
      $('.students li').not(filterClasses).addClass('hidden');
    }

    $('.students li').each(function(){
      var li = $(this);
      var liText = li.text().toLowerCase();
      if(liText.indexOf(term) === -1){
        li.addClass('hidden');
      }
    });
  });

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


function getAllStudents(){
  var oReq = new XMLHttpRequest();
  oReq.onload = function() {

    $('.students').html(this.response);
  }
  oReq.open("get", "../7-student/getAllStudents.php", true);
  oReq.send();
}


function imgLoad() {
  firstRun = false;
  console.log('newImg');
  if(imgReady){
    if(showImgCount > filenames.length - 1){
      console.log("reset");
      showImgCount = 0;
    }
    var studentName = filenames[showImgCount].slice(0, -6);
    var randLeft = Math.round(Math.random()*100);
    $("#showcase-imgs").append("<img class='"+studentName+" showImg' id='img"+imgCount+"' src='../7-student/namesTest/"+studentName+"/"+filenames[showImgCount]+"' style='left:"+randLeft+"%; top: 100%'>");
    var currID = "#img"+imgCount;
    setTimeout(function(){
        $(currID).css("top", $(window).height()*-0.5+"px");
    },500);
    imgCount++;
    showImgCount++;
  }
  $('.showImg').each(function() {
      if($(this).offset().top < $(window).height()*-0.49){
        $(this).remove();
      }
  });
}


function loadStudent(name) {
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


function updateSearch() {
  if(filtered.length === 0){
    $('li').removeClass('hidden');
  } else {
    var filterClasses = filtered.join('');
    $('.students li').removeClass('hidden');
    $('.students li').not(filterClasses).addClass('hidden');
  }
  getShowcaseImg();
}


function getShowcaseImg(){
  var allTags = '';
  for (var i = 0; i < showcaseTags.length; i++) {
    allTags = allTags + showcaseTags[i] + " ";
  };
  var oReq = new XMLHttpRequest();
  oReq.onload = function() {

    if(this.response != '') {
      $('.showImg').fadeOut(1000);
      filenames = this.response.split("*");
      filenames = filenames.slice(0,-1);
      filenames = shuffle(filenames);
      $('.resultNum').html('Number of results: ' + filenames.length);
      setTimeout(function(){
        $('.showImg').remove();
        imgReady = true;

        if(firstRun){
          setTimeout(function(){
            r2 = r1;
            imgLoad();
            setInterval(imgLoad, 8000);
          },500);
        } else {
          imgLoad();
        }

      }, 1000);
    } else {
      imgReady = false;
      $('.resultNum').html('No Results Found');
    }
  }
  oReq.open("get", "./php/imgGet.php?tags=" + allTags , true);
  oReq.send();
}


function newUser() {
  firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  firebase.auth().onAuthStateChanged(function(user) {
    if (user && firstRun) {
      isAnonymous = user.isAnonymous;
      uid = user.uid;

      databaseUsers = firebase.database().ref("users/"+uid);
      databaseUsers.onDisconnect().remove();
      databaseUsers.child("mouseData").set({
        mouseX:0,
        mouseY:0
      });
    }
  });
}


function gotData(){
  allUsers.once('value').then(function(snapshot) {
    userData = snapshot.val();
    usernames = Object.keys(userData);
  });
  if(online){
    databaseUsers.child("mouseData").update({
      mouseX:xPos,
      mouseY:yPos,
    });
  }
}


function mouseFollow(){

  for (var i = 0; i <= usernames.length-1; i++){

    var k = usernames[i];
    if(uid != k){
      var dX = userData[k].mouseData.mouseX;
      var dY = userData[k].mouseData.mouseY;

      if(pos[i] != undefined){

        var distX = dX - pos[i].x;
        var distY = dY - pos[i].y;

        pos[i].x = pos[i].x + distX/6;
        pos[i].y = pos[i].y + distY/6;

        $("#"+k).css({"left": pos[i].x+"%", "top": pos[i].y+"%"});

      }
    }
  }
}


function checkPageFocus() {

  if ( document.hasFocus() ) {
    online = true;
  } else {
    databaseUsers.remove();
    online = false;
  }
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

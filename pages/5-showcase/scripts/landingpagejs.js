var user;
var uid;
var isAnonymous;
var databaseUsers;
var allUsers;
var database;
var usernames = [];
var count;
var xPos = 0;
var yPos = 0;
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

  getAllStudents();
  getShowcaseImg();
  newUser();

  var hash = location.hash;
  hash = hash.slice(1);
  if(hash != '' &&
     hash != 'filter' &&
     hash != 'about' &&
     hash != 'press' &&
     hash != 'visit'){
    imgReady = false;
  }

  // device detection
  var isMobile = false;
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
      isMobile = true;
  }

  //Get/end mouse position data to firebase
  setTimeout(function(){
    setInterval(gotData, 250);
  },1500);

  //mouse smoothing
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

  //check if page is in focus
  setInterval( checkPageFocus, 1000);

  //adding firebase users. Create mice on new user.
  allUsers.on('child_added', function(data){
    var test2 = data.ge.path.n[1];
    if(!isMobile){
      $( "body" ).append( "<div class = 'users'  id='"+test2+"' style='position:fixed; left: 0; top: 0; font-size:80px; line-height:0; color:blue;'>™<div class = 'popup' id='"+test2+"'></div></div>" );
    } else {
      yPos = -5;
      xPos = -5;
      $("#"+uid).css({"left": "-5%", "top": "-5%"});
      if(test2 != uid){
        $( "body" ).append( "<div class = 'users'  id='"+test2+"' style='position:fixed; left: 0; top: 0; font-size:80px; line-height:0; color:blue;'>™<div class = 'popup' id='"+test2+"'></div></div>" );
      }
    }
    $( "#"+uid ).css({"pointer-events":"none","z-index":"100000"});
    $( "#"+uid ).html("·");

    //move users own mouse
    $( window ).mousemove(function( event ) {

        yPos = ((event.pageY - $(window).scrollTop()) / $(window).height())*100;
        xPos = (event.pageX / $(window).width())*100;
        $("#"+uid).css({"left": xPos+"%", "top": yPos+"%", "transition": "all 0s"});

    });

  });

  //remove firebase mice on exit
  allUsers.on('child_removed', function(data){
    var test2 = data.ge.path.n[1];
    $( "#"+test2 ).remove();
  });

  //get student profile page
  //----deleted .students as clickable element for this function
  $('#showcase-imgs').click(function(e){

    clicked = true;
    imgReady = false;
    // $('.showImg').each(function() {
    //   $(this).css('top', $(this).offset().top);
    // });
  });

  $(document).on("click", ".close-button", function(){
    clicked = false;
    $('input').attr('placeholder', '...');
  });

  document.onmousewheel = function( e ) {
    if(e.deltaY < -150){
      clicked = false;
      $('input').attr('placeholder', '...');
    }
  };

  //pause showcase scroll on hover
  $('#showcase-imgs').hover(function(e){
    var studentN = e.target.className.split(" ")[0];
    studentN = studentN.replace('-', ' ');
    var studentA = studentN.split(" ");
    var studentI = '';
    for(var i = 0; i<studentA.length; i++) {
      studentI = studentI + studentA[i].charAt(0).toUpperCase() + studentA[i].slice(1) + ' ';
    }
    $('input').attr('placeholder', studentI);
    imgReady = false;
    $('.showImg').each(function() {
      $(this).css('top', $(this).offset().top);
    });
  }, function(){
    console.log(clicked);
    if(!clicked){
      $('input').attr('placeholder', '...');
      imgReady = true;
      $('.showImg').each(function() {
        var top = $(this).offset().top;
        $(this).css("top", top + ($(window).height()*-1.5) + "px");
      });
    }
  });

  //clicking tags
  $('.type li').click(function(){

    var that = $(this);
    // updateTags(that);
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

    //build list of active tags
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

    //generate search tags
    var tagsLength = tags.length;
    var tagBlocks = '';
    $('.tag').each(function(){
      var that = $(this);
      that.remove();
    });

    for (var i = tagsLength-1; i > -1; i--){
        tagBlocks = '<div class="tag tag-content inline" id="'+ filtered[i].slice(1) +'">(' + tags[i] + ')</div>';
        // $('#filter-by').after(tagBlocks);
        $('.container--overflow-tags').append(tagBlocks);
        console.log(tagBlocks);
        console.log("clear within loop:" + clear);
    }

    //update search results
    updateSearch();
    $("input").focus();

    if ($(".tag").length) {
      $(".search--title.hover").addClass("hiddenRemove");
      $("#clear").removeClass("hiddenRemove");
    }
  });

  $("#clear").click(function() {
    $(".tag").remove();

    $(".students li").removeClass("hiddenRemove");
    $(".theme-search li").removeClass("unselected active");
    $(".category-search li").removeClass("unselected active");
    $(".route-search li").removeClass("unselected active");

    $(".tag").removeClass("active");

    $(".search--title.hover").removeClass("hiddenRemove");
    $("#clear").addClass("hiddenRemove");
  });


  //click on tags
  $("li").on("click", function() {
    updateTags($(this));
  });


  //click searchbar tags
  $(document).on("click", ".tag", function(){
    var tag = ((this.id).split(/-(.+)/))[1];
    $(this).remove();

    $('.type li').each(function(){
      var that = $(this);
      if(that.data('sort') == tag){
        console.log('match');
        updateTags(that);
        that.removeClass('active');
      }
    });

    filtered = [];
    showcaseTags = [];

    $('.type li').each(function(){
      var that = $(this);
      var type = that.parents('ul').data('type');
      var sort = that.data('sort');
      var name = that.text();

      if(that.hasClass('active')){
        filtered.push('.' + type + '-' + sort);
        showcaseTags.push(sort);
        // tags.push(name);
      }
    });
    updateSearch();

    if (!($(".tag").length)) {
      $(".search--title.hover").removeClass("hiddenRemove");
      $("#clear").addClass("hiddenRemove");
    }

    // if (clear) {
    //   // remove all tags
    //   filtered.length = 0;
    //   showcaseTags.length = 0;
    //   clear = true;
    // }
  });



  //use this to update content / value for filter function
  //search student names
  $('input').on('propertychange change click keyup input paste', function(){
    $('body').animate({scrollTop: ($(this).offset().top)}, {duration: 500, queue: false});
    term = $(this).val().toLowerCase();
    $('li').removeClass('hiddenRemove');

    if(filtered.length === 0){
      $('li').removeClass('hiddenRemove');
    } else {
      var filterClasses = filtered.join('');
      $('.students li').removeClass('hiddenRemove');
      $('.students li').not(filterClasses).addClass('hiddenRemove');
    }

    $('.students li').each(function(){
      var li = $(this);
      var liText = li.text().toLowerCase();
      if(liText.indexOf(term) === -1){
        li.addClass('hiddenRemove');
      }
    });
  });

  //tag side mouse scroll
  $('.row').mousemove(function(e){
    var that = $(this);
    var mouseX = e.pageX - that.offset().left - 100;
    var containerW = that.width();
    var scrollW = that[0].scrollWidth - containerW;
    var newW = (mouseX/(containerW-200))*scrollW;
    that.scrollLeft(newW);
  });

  $('input').click(function(){
    $('body').animate({scrollTop: ($(this).offset().top)}, 500);
  });

});

//get list of students names and tags
function getAllStudents(){
  var oReq = new XMLHttpRequest();
  oReq.onload = function() {

    $('.students').html(this.response);
  }
  oReq.open("get", "../7-student/getAllStudents.php", true);
  oReq.send();
}

//load next showcase image
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
    $("#showcase-imgs").append("<img class='"+studentName+" showImg' id='img"+imgCount+"' src='../7-student/names/"+studentName+"/"+filenames[showImgCount]+"' style='left:"+randLeft+"%; top: 100%'>");
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

//update showcase filters/tags
function updateSearch() {
  if(filtered.length === 0){
    $('li').removeClass('hiddenRemove');
  } else {
    var filterClasses = filtered.join('');
    $('.students li').removeClass('hiddenRemove');
    $('.students li').not(filterClasses).addClass('hiddenRemove');
  }
  getShowcaseImg();
  if($('.students li:not(.hiddenRemove)').length == 0) {
    $('.students').append('<li class="resultNum tag">No work found</li>');
  } else {
    $('.resultNum').remove();
  }
}

//update tag positions
function updateTags(that) {
  if(that.parent().hasClass('single')){
    if(that.hasClass('selected')){
      that.toggleClass("selected");
      that.siblings().toggleClass("unselected");
    } else {
      if(that.hasClass('unselected')){
        that.removeClass("unselected");
        that.addClass("selected");
        that.siblings().removeClass("selected");
        that.siblings().addClass("unselected");
      } else {
        that.addClass("selected");
        that.siblings().addClass("unselected");
      }
    }
  } else {
    if(that.hasClass('selected')){
      var otherSelected = false;
      that.siblings().each(function(){
        var that = $(this);
        if(that.hasClass('selected')){
          otherSelected = true;
        }
        console.log(otherSelected);
      });
      if(otherSelected){
        that.removeClass("selected");
        that.addClass("unselected");
      } else {
        that.removeClass("unselected");
        that.removeClass("selected");
        that.siblings().removeClass("unselected");
      }
    } else {
      if(that.hasClass('unselected')){
        that.removeClass("unselected");
        that.addClass("selected");
      } else {
        that.addClass("selected");
        that.siblings().addClass("unselected");
      }
    }
  }
}

//get updated showcase image list
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

//add user to firebase
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

//get/send mouse positions
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

//mouse easing
function mouseFollow(){

  for (var i = 0; i <= usernames.length-1; i++){

    var k = usernames[i];
    if(uid != k && userData[k] != null){
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

//is the page in focus
function checkPageFocus() {

  if ( document.hasFocus() ) {
    online = true;
  } else {
    databaseUsers.remove();
    online = false;
  }
}

//shuffle the showcase image array
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

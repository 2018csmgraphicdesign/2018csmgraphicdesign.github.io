
var fontSize1;
var fontSize;
var screenWidth;
var userId;
var user;
var uid;
var isAnonymous;
var databaseUsers;
var personalID;
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

  setTimeout(function(){
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

  $("#fund").hover(function() {
    $("arrows").css({'right':'2vw'});
  }, function() {
    $("arrows").css({'right':'0vw'});
  });
  $("#instagram").hover(function() {
    $("moveText1").css({'left':'2vw'});
  }, function() {
    $("moveText1").css({'left':'0vw'});
  });
  $("#twitter").hover(function() {
    $("moveText").css({'left':'2vw'});
  }, function() {
    $("moveText").css({'left':'0vw'});
  });

  var isMobile = false; //initiate as false
  // device detection
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
      isMobile = true;
  }

  function gotData(){
    allUsers.once('value').then(function(snapshot) {
      userData = snapshot.val();
      usernames = Object.keys(userData);
      setInterval(mouseFollow, 20);
    });

    databaseUsers.child("mouseData").update({
      mouseX:xPos,
      mouseY:yPos,
    });




    // setInterval(function(){
    //   var online = i;
    //   $("#online").html("(00"+online+")");
    //   if(online>9){
    //     $("#online").html("(0"+online+")");
    //   }
    // }, 3000);
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

          pos[i].x = pos[i].x + distX/10;
          pos[i].y = pos[i].y + distY/10;


          $("#"+k).css({"left": pos[i].x+"%", "top": pos[i].y+"%"});

        }
      }

      //$( "body" ).append( "<div id='"+usernames[i]+"' style='left:"+test[k].mouseData.mouseX+"px;top:"+test[k].mouseData.mouseY+"px; position:absolute'>Hello</div>" );
      //$("#"+usernames[i]).css({'left': test[k].mouseData.mouseX+'px','top': test[k].mouseData.mouseY+'px'});
      //$(".popup"+"#"+usernames[i]).css({'left': test[k].mouseData.mouseX+20+'px','top': test[k].mouseData.mouseY+20+'px'});

    }


  }

  setTimeout(function(){
    setInterval(gotData, 250);
    //setInterval(mouseFollow, 20);
  },1500);

  firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      isAnonymous = user.isAnonymous;
      uid = user.uid;
      personalID = uid;
  //    $( "body" ).append( "<div1>Hello</div1>" );

      databaseUsers = firebase.database().ref("users/"+personalID);
      databaseUsers.onDisconnect().remove();
      databaseUsers.child("mouseData").set({
        mouseX:0,
        mouseY:0
      });



  //     getMouseData();
    } else {
      // User is signed out.
    }
  // ...
  });

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


    $( window ).mousemove(function( event ) {

        yPos = ((event.pageY - $(window).scrollTop()) / $(window).height())*100;
        xPos = (event.pageX / $(window).width())*100;
        $("#"+uid).css({"left": xPos+"%", "top": yPos+"%", "transition": "all 0s"});

        // databaseUsers.child("mouseData").update({
        //   mouseX:xPos,
        //   mouseY:yPos
        // });

    });

//     hovered = 0;
//     databaseUsers.child("touchedby").on('value', function(data){
//       hovered = (data.val());
//       console.log(hovered);
// ////              alert("Hello")
// //         hovered = 0;
// //               databaseUsers.child("touchedby").on('value', function(data){
// //           hovered = (data.val());
// //               console.log("yes");
// //////              alert("Hello")

//       if(hovered!=0){

//         var text = '';
//         var quotes = new Array("Hey", "Yo", "What's up?", "Hello", "Nice day eh", "You alright?", "Howdy!", "Sup","Whaddup","Nice to meet you","Looking good!");

//         var randno = Math.floor ( Math.random() * quotes.length );

//         text += quotes[randno];

//         $( ".popup"+"#"+hovered ).text( text );

//         $(".popup"+"#"+hovered).css({"opacity":"1"});
//       } else{
//         $(".popup").css({"opacity":"0"});
//       }
//     });

    // $("#"+test2).hover(function(){
    //   var status = $(this).attr('id');
    //   allUsers.child(status).update({
    //     hello:1,
    //     touchedby:uid
    //   });

    //   console.log(status);
    //   setTimeout(function(){
    //     allUsers.child(status).update({
    //       hello:0,
    //       touchedby:0
    //     });

    //   }, 2000);



    // });

  });

  allUsers.on('child_removed', function(data){
    var test2 = data.ge.path.n[1];
    $( "#"+test2 ).remove();
  });

  var oReq = new XMLHttpRequest(); //New request object
    oReq.onload = function() {
        //This is where you handle what to do with the response.
        //The actual data is found on this.responseText

      filenames = this.response.split(".jpg");
      setTimeout(function(){
        database.ref('random').on('value', function(data){
          random = Math.round(data.val()*filenames.length-2);
          if(random == last){
            dup = true;
          } else {
            last = random;
          }

        });
        setTimeout(function(){
          imgLoad();
          setInterval(imgLoad, 8000);
        },500);
      }, 1000);


    }
    oReq.open("get", "../php/imgGet.php", true);
    //                               ^ Don't block the rest of the execution.
    //                                 Don't wait until the request finishes to
    //                                 continue.
    oReq.send();

});

function imgLoad() {
  if(filenames[random] != undefined && !dup){
    var randLeft = Math.round(Math.random()*100);
    $("#img").append("<img class='showImg' id='img"+imgCount+"' src='../landingImg/"+filenames[random]+".jpg' style='left:"+randLeft+"%; top: 100%'>");
    var currID = "#img"+imgCount;
    setTimeout(function(){
      $(currID).css("top", "-50%");
    },1000);

    setTimeout(function(){
      $(currID).remove();
    },30000);
    imgCount++;
  } else {
    if(dup){
      dup = false;
    }
  }
}

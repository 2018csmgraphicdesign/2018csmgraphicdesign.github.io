
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

  database.ref("userCount").on('value', function(data){
    var userCount = ("0" + data.val()).slice(-2);
    $("#users").html("Users ["+userCount+"]");
    setTimeout(function(){
      for(i=0;i<userCount;i++){
        pos[i] = {x:0, y:0};
      }
    }, 500);
  });

  function gotData(){
    allUsers.once('value').then(function(snapshot) {
      userData = snapshot.val();
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
    usernames = Object.keys(userData);

    for (var i = 0; i <= usernames.length-1; i++){

      var k = usernames[i];
      if(uid != k){
        var dX = userData[k].mouseData.mouseX;
        var dY = userData[k].mouseData.mouseY;

        var distX = dX - pos[i].x;
        var distY = dY - pos[i].y;

        pos[i].x = pos[i].x + distX/4;
        pos[i].y = pos[i].y + distY/4;

        $("#"+k).css({"left": pos[i].x+"%", "top": pos[i].y+"%"});
      }
      
      //$( "body" ).append( "<div id='"+usernames[i]+"' style='left:"+test[k].mouseData.mouseX+"px;top:"+test[k].mouseData.mouseY+"px; position:absolute'>Hello</div>" );
      //$("#"+usernames[i]).css({'left': test[k].mouseData.mouseX+'px','top': test[k].mouseData.mouseY+'px'});
      //$(".popup"+"#"+usernames[i]).css({'left': test[k].mouseData.mouseX+20+'px','top': test[k].mouseData.mouseY+20+'px'});

    }


  }

  setTimeout(function(){
    setInterval(gotData, 250);
    setInterval(mouseFollow, 20);
  },2000);

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
      console.log(databaseUsers);
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
    console.log(test2);

    $( "body" ).append( "<div class = 'users'  id='"+test2+"' style='position:fixed; left: 0; top: 0; font-family:Degreeshow;'>�<div class = 'popup' id='"+test2+"'></div></div>" );

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
    },100);
    
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

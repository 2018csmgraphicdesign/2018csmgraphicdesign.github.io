
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
var xPos;
var yPos;
var clicked = false;
var online;



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
  allUsers.on('value', gotData);

    function gotData(data){
      var test = data.val();
      usernames = Object.keys(test);


      for (var i = 0; i <= usernames.length-1; i++){
        var k = usernames[i];
//        console.log(test[k].mouseData);
        //$( "body" ).append( "<div id='"+usernames[i]+"' style='left:"+test[k].mouseData.mouseX+"px;top:"+test[k].mouseData.mouseY+"px; position:absolute'>Hello</div>" );
        $("#"+usernames[i]).css({'left': test[k].mouseData.mouseX+'px','top': test[k].mouseData.mouseY+'px'});
        $(".popup"+"#"+usernames[i]).css({'left': test[k].mouseData.mouseX+20+'px','top': test[k].mouseData.mouseY+20+'px'});


      }


         setInterval(function()
{
              var online = i;
          console.log(online);
    $("#online").html("(00"+online+")");
          if(online>9){
              $("#online").html("(0"+online+")");
          }
}
, 3000);

    }





      firebase.auth().signInAnonymously().catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
})
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
    mouseY:0,

  });

//     getMouseData();


  } else {
    // User is signed out.

  }
  // ...
})


    allUsers.on('child_added', function(data){
      var test2 = data.ge.path.n[1];
      console.log(test2);

      $( "body" ).append( "<div class = 'users'  id='"+test2+"' style='position:fixed;font-family:Degreeshow;'>�<div class = 'popup' id='"+test2+"'></div></div>" );

      $( "#"+uid ).css({"pointer-events":"none","z-index":"100000"});


        $( window ).mousemove(function( event ) {
//   console.log(uid);

    yPos = event.pageY - mouseAlign - $(window).scrollTop();
    xPos = event.pageX - mouseAlign;
    databaseUsers.child("mouseData").update({
    mouseX:xPos,
    mouseY:yPos
  });
});

       hovered = 0;
          databaseUsers.child("touchedby").on('value', function(data){
           hovered = (data.val());
               console.log(hovered);
////              alert("Hello")
//         hovered = 0;
//               databaseUsers.child("touchedby").on('value', function(data){
//           hovered = (data.val());
//               console.log("yes");
//////              alert("Hello")

            if(hovered!=0){

        var text = '';
               var quotes = new Array("Hey", "Yo", "What's up?", "Hello", "Nice day eh", "You alright?", "Howdy!", "Sup","Whaddup","Nice to meet you","Looking good!");

         var randno = Math.floor ( Math.random() * quotes.length );

            text += quotes[randno];

           $( ".popup"+"#"+hovered ).text( text );

              $(".popup"+"#"+hovered).css({"opacity":"1"});
             } else{
               $(".popup").css({"opacity":"0"});
             }
     });
         $("#"+test2).hover(function(){
             var status = $(this).attr('id');
     allUsers.child(status).update({
    hello:1,
    touchedby:uid
    });


       console.log(status);
   setTimeout(function(){
    allUsers.child(status).update({
    hello:0,
    touchedby:0
    });

   }, 2000);



 });

   });









     allUsers.on('child_removed', function(data){
    var test2 = data.ge.path.n[1];
    $( "#"+test2 ).remove();
   });




















    database.ref('Side2').on('value', function(data){
      isClicked = (data.val());
      mouseAlign = (data.val())/10;
      $('.users').css({'width':30+(data.val())/10+'px','height':30+(data.val())/10+'px'});



   });



});

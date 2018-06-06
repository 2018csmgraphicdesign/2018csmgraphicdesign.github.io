<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
  <script type="text/javascript" src="scripts/landingpagejs.js"></script>
  <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
  <script type="text/javascript" src="../../global/libs/jquery.cycle2.js"></script>

  <link rel="stylesheet" href="../../global/styles/type_00.css">
  <link rel="stylesheet" href="styles/landingpagecss.css">
  <link rel="stylesheet" href="../../global/styles/student-small.css">
  <link rel="stylesheet" href="styles/search-00.css">

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Sincerely,</title>
</head>
<body>
  <!-- <div id="frame">
    <div id="showcase-imgs"></div>
    <div class="student"></div>
  </div> -->

  <section class="container container--search-input inline">
    <input class="search--title search" placeholder="Search for">
    <section class="search--nav inline">
      <!-- <p class="search--title hover">About</p>
      <p class="search--title hover">Press</p>
      <p class="search--title hover">Visit</p> -->
      <p class="search--title hover">Clear</p>
    </section>
    <section class="search--divider"></section>
  </section>

    <section class="container container--search container--search-student">
      <aside class="load-student load-student--text">
        <script>
        $(window).on("load", function() {
          loadText();
        });

          function loadText() {
            // console.log(name);
            var oReq = new XMLHttpRequest();
            oReq.onload = function() {
              $(".load-student").append(this.response);
            }
            oReq.open("get", "../7-student/getStudent-txt.php?name=alva-skog", true);
            oReq.send();
          }
        </script>
      </aside>
      <section class="load-student load-student--files">
        <script>

        $(window).on("load", function() {
          loadFiles();
        });

          function loadFiles() {
            // console.log(name);
            var oReq = new XMLHttpRequest();
            oReq.onload = function() {
              $(".load-student").append(this.response);
            }
            oReq.open("get", "../7-student/getStudent-files.php?name=alva-skog", true);
            oReq.send();

            // slideshow??
            setTimeout(function(){
              $(".student-img").cycle({
                speed:  250,
                next: ".student-img",
                timeout: 0,
              });

            }, 200);
          }
        </script>
      </section>
    </section>

  <script type="text/javascript" src="scripts/00.js"></script>
</body>
</html>

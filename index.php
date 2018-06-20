<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
  <script type="text/javascript" src="pages/3-showcase/scripts/landingpagejs.js"></script>
  <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
  <script type="text/javascript" src="global/libs/jquery.cycle2.js"></script>

  <link rel="stylesheet" href="global/styles/type.css">
  <link rel="stylesheet" href="pages/1-about_press_visit/styles/fadeIn.css">
  <link rel="stylesheet" href="pages/3-showcase/styles/landingpagecss.css">
  <link rel="stylesheet" href="pages/3-showcase/styles/search.css">
  <link rel="stylesheet" href="pages/3-showcase/styles/animation.css">
  <link rel="stylesheet" href="pages/3-showcase/styles/mobile.css">

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Sincerely,</title>

</head>
<body>

  <div id="frame">
    <div id="showcase-imgs"></div>
    <div class="student"></div>
  </div>

  <div id="wrapper">

  <?php
  include_once("pages/0-loading/loading.php");
  //test
  ?>


  <?php
  include_once("pages/1-about_press_visit/containerFade.php");
  ?>



  <p class="title fixed">Sincerely,</p>

  <section class="background">
    <section class="container--hover">
      <section class="container container--search-input container--search-input-top peekTop">
        <div class='search--title search inline' id='filter-by'>Filter by</div>

        <section class="container--overflow-tags search--title"></section>

        <input class="search--title search inline" placeholder="...">
        <section class="search--nav inline">
          <p class="search--title hover hiddenRemove" id="clear">(Clear)</p>
          <p class="search--title hover" id="about"><img src="pages/3-showcase/assets/about-1.svg">About</p>
          <p class="search--title hover" id="press"><img src="pages/3-showcase/assets/press-1.svg">Press</p>
          <p class="search--title hover" id="visit"><img src="pages/3-showcase/assets/visit-1.svg">Visit</p>
        </section>
      </section>

      <section class="container container--search-input inline noBackground peekTop">
        <section class="search--divider search--divider-hide"></section>
      </section>


        <section class="container container--search peekCont">
          <div id="search">
            <div class="results"></div>

            <section class="container--overflow-x student-search">
              <p class="search--subtitle">Students,</p>
              <ul class="row students grid--14 nowrap"></ul>
            </section>

            <section class="container--overflow-x theme-search">
              <p class="search--subtitle themes">Theme,</p>
              <ul class="row type single grid grid--8 nowrap" data-type="theme">
                <li class="column" data-sort="provoke">Provoke</li>
                <li class="column" data-sort="critique">Critique</li>
                <li class="column" data-sort="promote">Promote</li>
                <li class="column" data-sort="educate">Educate</li>
                <li class="column" data-sort="engage">Engage</li>
                <li class="column" data-sort="document">Document</li>
                <li class="column" data-sort="connect">Connect</li>
                <li class="column" data-sort="experiment">Experiment</li>
              </ul>
            </section>

            <section class="container--overflow-x category-search">
              <p class="search--subtitle categories">Categories,</p>
              <ul class="row type grid grid--12 nowrap" data-type="category">
                <li class="column" data-sort="print-making">Print-making</li>
                <li class="column" data-sort="installation">Installation</li>
                <li class="column" data-sort="photography">Photography</li>
                <li class="column" data-sort="film">Film</li>
                <li class="column" data-sort="animation">Animation</li>
                <li class="column" data-sort="interactive">Interactive</li>
                <li class="column" data-sort="performance">Performance</li>
                <li class="column" data-sort="publication">Publication Design</li>
                <li class="column" data-sort="copywriting">Copywriting</li>
                <li class="column" data-sort="writing">Writing</li>
                <li class="column" data-sort="typography">Typography</li>
                <li class="column" data-sort="campaign">Campaign</li>
              </ul>
            </section>

            <section class="container--overflow-x route-search">
              <p class="search--subtitle routes">Route,</p>
              <ul class="row type single grid grid--4 nowrap" data-type="route">
                <li class="column" data-sort="moving-image">Moving Image</li>
                <li class="column" data-sort="design-interaction">Design and Interaction</li>
                <li class="column" data-sort="illustration">Illustration</li>
                <li class="column" data-sort="advertising">Advertising</li>
              </ul>
            </section>

          </div>
        </section>
      </section>
    </section>

    <section class="container container--student"></section>

  <!-- test to load student page to scroll -->
  <script type="text/javascript" src="pages/3-showcase/scripts/loadSearch.js"></script>
  <script type="text/javascript" src="pages/3-showcase/scripts/loadProfile.js"></script>
  <script type="text/javascript" src="pages/3-showcase/scripts/resize.js"></script>
  <script type="text/javascript" src="pages/1-about_press_visit/scripts/load.js"></script>
  </div>
</body>
</html>

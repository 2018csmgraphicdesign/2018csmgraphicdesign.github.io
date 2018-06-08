<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
  <script type="text/javascript" src="scripts/landingpagejs.js"></script>
  <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
  <script type="text/javascript" src="../../global/libs/jquery.cycle2.js"></script>

  <link rel="stylesheet" href="../../global/styles/type.css">
  <link rel="stylesheet" href="styles/landingpagecss.css">
  <link rel="stylesheet" href="styles/search.css">
  <link rel="stylesheet" href="styles/mobile.css">

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Sincerely,</title>

</head>
<body>

  <?php
  include_once("../1-about_press_visit/containerFade.php");
  ?>

  <div id="frame">
    <div id="showcase-imgs"></div>
    <div class="student"></div>
  </div>

  <p class="title--mobile">Sincerely,</p>

  <section class="container container--search-input container--search-input-top">
    <div class='search--title search inline' id='filter-by'>Filter by</div>

    <section class="container--overflow-tags"></section>

    <input class="search--title search inline" placeholder="...">
    <section class="search--nav inline">
      <p class="search--title hover" id="about">About</p>
      <p class="search--title hover" id="press">Press</p>
      <p class="search--title hover" id="visit">Visit</p>
      <p class="search--title hover hiddenRemove" id="clear">(Clear)</p>
    </section>
  </section>

  <section class="container container--search-input inline noBackground">
    <section class="search--divider"></section>
  </section>


    <section class="container container--search">
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
            <li class="column" data-sort="copy-writing">Copy-writing</li>
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
    <section class="container container--student"></section>

  <!-- test to load student page to scroll -->
  <script type="text/javascript" src="scripts/loadProfile.js"></script>
  <script type="text/javascript" src="scripts/resize.js"></script>
  <script type="text/javascript" src="../1-about_press_visit/scripts/load.js"></script>
</body>
</html>

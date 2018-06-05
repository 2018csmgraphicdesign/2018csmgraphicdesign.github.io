<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
  <script type="text/javascript" src="scripts/landingpagejs-1.js"></script>
  <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
  <script type="text/javascript" src="../../global/libs/jquery.cycle2.js"></script>

  <link rel="stylesheet" href="styles/landingpagecss-1.css">
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
      <p class="search--title hover">About</p>
      <p class="search--title hover">Press</p>
      <p class="search--title hover">Visit</p>
    </section>
    <section class="search--divider"></section>
  </section>

    <section class="container container--search">
      <div id="search">
        <div class="results"></div>

        <section class="container--overflow-x">
          <p class="search--subtitle">Students,</p>
          <ul class="row students grid grid--5"></ul>
        </section>

        <section class="container--overflow-x">
          <p class="search--subtitle themes">Theme,</p>
          <ul class="row type single grid grid--5" data-type="theme">
            <li class="column" data-sort="provoke">Provoke</li>
            <li class="column" data-sort="critique">Critique</li>
            <li class="column" data-sort="promote">Promote</li>
            <li class="column" data-sort="educate">Educate</li>
            <li class="column" data-sort="engage">Engage</li>
            <li class="column" data-sort="document">Document</li>
            <li class="column" data-sort="connect">Connect</li>
            <li class="column" data-sort="experiment">Experiment</li>
            <!-- <li data-sort="connect">Connect</li>
            <li data-sort="emerge">Emerge</li>
            <li data-sort="explore">Explore</li>
            <li data-sort="play">Play</li> -->
          </ul>
        </section>

        <section class="container--overflow-x">
          <p class="search--subtitle categories">Categories,</p>
          <ul class="row type grid grid--5" data-type="category">
            <li class="column" data-sort="architecture">Print-making</li>
            <li class="column" data-sort="social">Installation</li>
            <li class="column" data-sort="website">Photography</li>
            <li class="column" data-sort="website">Film</li>
            <li class="column" data-sort="website">Animation</li>
            <li class="column" data-sort="website">Interactive</li>
            <li class="column" data-sort="website">Performance</li>
            <li class="column" data-sort="website">Publication Design</li>
            <li class="column" data-sort="website">Copy-writing</li>
            <li class="column" data-sort="writing">Writing</li>
            <li class="column" data-sort="typography">Typography</li>
            <li class="column" data-sort="campaign">Campaign</li>
          </ul>
        </section>

        <section class="container--overflow-x">
          <p class="search--subtitle routes">Route,</p>
          <ul class="row type single grid grid--5" data-type="route">
            <li class="column" data-sort="moving-image">Moving Image</li>
            <li class="column" data-sort="design-interaction">Design and Interaction</li>
            <li class="column" data-sort="illustration">Illustration</li>
            <li class="column" data-sort="advertising">Advertising</li>
          </ul>
        </section>

        <div class="resultNum tag">No work found</div>

    </section>
  </div>
  <script type="text/javascript" src="scripts/00.js"></script>
</body>
</html>

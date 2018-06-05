<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Sincerely,</title>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
  <script src="scripts/list.js"></script>

  <link rel="stylesheet" type="text/css" href="/global/styles/restart_00.css"/>
  <link rel="stylesheet" type="text/css" href="/global/styles/template_00.css"/>
	<link rel="stylesheet" type="text/css" href="styles/00.css"/>
	<!-- template title.php end? work in a different way? add first 3 tags and then import php?-->
</head>
<body>
		<?php
		include_once("nav.php");
		?>

		<section class="container container__search">

      <!-- important -->
			<div id="test-list">
      <!-- important -->

				<input class="input input--search fuzzy-search" type="text"/>
				<section class="search--results">
					<?php
          echo "<section class='list'>\n\n";
          $f = fopen("csv/data-00.csv", "r");
          while (($line = fgetcsv($f)) !== false) {
          				$row = $line[0];
          				// $row = $line[1]; // class='list list-socialmedia list-instagram'
          				// $row = $line[2]; // class='list list-socialmedia list-twitter'
          				// $row = $line[3]; // class='list list-other'
          				// $row = $line[4]; // class='list list-portfolio'
          				// $row = $line[6]; // class='list list-contact'

          				$cells = explode(";",$row);

                  //IMPORTANT
          				echo "<span class='list-name'>";
                  //IMPORTANT

          				foreach ($cells as $cell) {
          						echo "<p class='name'>" . htmlspecialchars($cell) . "</p>";
          				}

                  //IMPORTANT
          				echo "</span>\n";
                  //IMPORTANT
          }
          fclose($f);
          $f = fopen("csv/data-05.csv", "r");
          while (($line = fgetcsv($f)) !== false) {
                  $row = $line[1];
                  $cells = explode(";",$row);

                  //IMPORTANT
          				echo "<div class='list-name list-tag'>";
                  //IMPORTANT

                  foreach ($cells as $cell) {
                    echo "<p class='name name-tag'>" . htmlspecialchars($cell) . "</p>";
                  }

                  //IMPORTANT
                  echo "</div>\n";
                  //IMPORTANT
                }
          fclose($f);
          echo "</section>\n";
					?>
			</section>

      <!-- important -->
			</div>
      <!-- important -->

		</section>

	<script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
	<script type="text/javascript" src="scripts/01.js"></script>
</body>
</html>

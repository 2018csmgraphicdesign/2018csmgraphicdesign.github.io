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
		<section class="container container__search">

      <!-- important -->
			<div id="test-list">
      <!-- important -->

				<input class="input input--search fuzzy-search" type="text"/>
				<section class="search--results">
					<?php
          echo "<section class='list'>\n\n";
          $f = fopen("csv/data-06.csv", "r");

          while (($line = fgetcsv($f)) !== false) {
          				$row = $line[0];
          				$cells = explode(";",$row);
                  //IMPORTANT
          				echo "<div class='list-name'>";
                  //IMPORTANT
          				foreach ($cells as $cell) {
          						echo "<p class='name name-link' data-link='" . htmlspecialchars($cell) . "' >" . htmlspecialchars($cell) . "</p>";
          				}
                  //IMPORTANT
          				echo "</div>\n";
                  //IMPORTANT
                }
            echo "<br/>";
            // while (($line = fgetcsv($f)) !== false) {
            //         $row = $line[1];
            //         $cells = explode(";",$row);
            //         //IMPORTANT
            //         echo "<div class='list-name list-name-tag'>";
            //         //IMPORTANT
            //         foreach ($cells as $cell) {
            //             echo "<p class='name tag-name'>" . htmlspecialchars($cell) . "</p>";
            //         }
            //         //IMPORTANT
            //         echo "</div>\n";
            //         //IMPORTANT
            //       }
          fclose($f);
          echo "</section>\n";
					?>
			</section>

      <!-- important -->
			</div>
      <!-- important -->

		</section>

    <section class="container__transition"></section>

	<script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
	<script type="text/javascript" src="scripts/01.js"></script>
</body>
</html>

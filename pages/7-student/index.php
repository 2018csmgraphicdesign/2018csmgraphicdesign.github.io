<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Sincerely,</title>
  <!-- FONTS -->
  <link rel="stylesheet" type="text/css" href="https://rawgit.com/2018csmgraphicdesign/2018csmgraphicdesign.github.io/master/assets/fonts/fonts.css">
  <!-- GLOBAL STYLES -->
  <link rel="stylesheet" href="../../global/styles/template_00.css">
  <!-- INDEX STYLES -->
  <link rel="stylesheet" href="">
</head>
<body>

  <?php
  //CREATE AN ARCHIVE/LIST OF NAMES FOR DEVELOPMENT PURPOSES (and testing yo)
  echo "<html><body><table>\n\n";
  $f = fopen("csv/data-00.csv", "r"); //NAME OF FILE TO READ
  while (($line = fgetcsv($f)) !== false) {
          $row = $line[0];    // We need to get the actual row (it is the first element in a 1-element array)
          $cells = explode(";",$row);
          echo "<tr>";
          foreach ($cells as $cell) {
              echo "<td>" . htmlspecialchars($cell) . "</td>";
          }
          echo "</tr>\n";
  }
  fclose($f);
  echo "\n</table></body></html>";
  ?>

  <!-- JQUERY -->
  <script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
  <!-- FIREBASE -->
  <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
  <!-- GLOBAL SCRIPTS -->
  <script type="text/javascript" src=""></script>
  <!-- INDEX SCRIPTS -->
  <script type="text/javascript" src=""></script>
</body>
</html>

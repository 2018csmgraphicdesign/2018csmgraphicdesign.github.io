<?php
  $n = $_REQUEST["name"];
  //CREATE STUDENT PAGE

  $f = fopen("csv/data-test.csv", "r");
  while (($line = fgetcsv($f)) !== false) {
    if($line[0] == $n){
      echo '<div class="student-img content cycle-slideshow" data-cycle-slides=">img, >iframe">';

      $g=scandir('../7-student/namesTest/' . htmlspecialchars($line[0]) . '/');
      foreach($g as $x) {
        if(is_dir($x))$ar[$x]=scandir($x);
        else {
          echo '<img class="img" src="../7-student/namesTest/' . htmlspecialchars($line[0]) . '/' . $x . '">';
        }
      }
      if($line[8] != ""){
        echo '<iframe class="vimeo" src="' . htmlspecialchars($line[8]) . '?autoplay=1&loop=1&color=ffffff&portrait=0" style="width:100%; height:27vw" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
      }

      echo '</div>';
    }
  }
  fclose($f);
?>

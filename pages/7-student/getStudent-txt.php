<?php
  $n = $_REQUEST["name"];
  //CREATE STUDENT PAGE

  $f = fopen("csv/data-test.csv", "r");
  while (($line = fgetcsv($f)) !== false) {
            if($line[0] == $n){
              // echo '<div class="student-name">' . htmlspecialchars($line[0]) . '</div>';
              echo '<p class="student-descript">' . htmlspecialchars($line[7]) . '</p>';
              echo '<a class="student-link student-insta" href="' . htmlspecialchars($line[1]) . '">Instagram</a>';
              echo '<a class="student-link student-twitter" href="' . htmlspecialchars($line[2]) . '">Twitter</a>';
              echo '<a class="student-link student-web" href="' . htmlspecialchars($line[3]) . '">Portfolio</a>';
              echo '<a class="student-link student-web-other" href="' . htmlspecialchars($line[4]) . '">Other(?)</a>';
              echo '<a class="student-link student-email" href="mailto:' . htmlspecialchars($line[6]) . '">Contact</a>';
              // echo '<div class="student-img content cycle-slideshow" data-cycle-slides=">img, >iframe">';

              $g=scandir('../7-student/namesTest/' . htmlspecialchars($line[0]) . '/');
              foreach($g as $x) {
                if(is_dir($x))$ar[$x]=scandir($x);
              }
              // if($line[8] != ""){
              //   echo '<iframe class="vimeo" src="' . htmlspecialchars($line[8]) . '?autoplay=1&loop=1&color=ffffff&portrait=0" style="width:100%; height:27vw" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
              // }
            }
  }
  fclose($f);
?>

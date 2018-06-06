<?php
  $n = $_REQUEST["name"];
  //CREATE STUDENT PAGE

  $f = fopen("csv/data-test.csv", "r");
  while (($line = fgetcsv($f)) !== false) {
            if($line[0] == $n){
              echo '<p class="student-name">' . htmlspecialchars($line[0]) . '</p>';
              $g=scandir('../7-student/namesTest/' . htmlspecialchars($line[0]) . '/');
              foreach($g as $x) {
                if(is_dir($x))$ar[$x]=scandir($x);
              }
            }
  }
  fclose($f);
?>

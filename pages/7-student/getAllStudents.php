<?php
  //GENERATE LIST OF STUDENTS NAMES WITH TAGS
  $f = fopen("csv/data-02.csv", "r");
  while (($line = fgetcsv($f)) !== false) {
    if($line[0] != 'NAME'){
      $name = strtolower(htmlspecialchars($line[0]));
      $name = str_replace(' ', '-', $name);
      echo '<li class="column ' . $name . ' route-' . htmlspecialchars($line[9]) . ' theme-' . htmlspecialchars($line[10]) . ' category-' . htmlspecialchars($line[11]) . '">' . htmlspecialchars($line[0]) . '</li>';
    }
  }
  fclose($f);
?>

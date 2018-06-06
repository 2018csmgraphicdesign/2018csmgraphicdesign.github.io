<?php
  //GENERATE LIST OF STUDENTS NAMES WITH TAGS
  $f = fopen("csv/data-02.csv", "r");
  while (($line = fgetcsv($f)) !== false) {
    if($line[0] != 'NAME'){
      //NAME
      $name = strtolower(htmlspecialchars($line[0]));
      $name = str_replace(' ', '-', $name);
      //ROUTE
      $route = strtolower(htmlspecialchars($line[7]));
      $route = str_replace(' and ', '-', $route);
      $route = str_replace(' ', '-', $route);
      //THEME
      $theme = strtolower(htmlspecialchars($line[8]));
      $theme = str_replace(' ', '-', $theme);
      //CATEGORIES
      $cat = strtolower(htmlspecialchars($line[9]));
      $catArray = explode(' ', $cat);
      $catString = '';
      foreach ($catArray as $x) {
        $catString = $catString . ' category-' . $x;
      }
      //CREATE STUDENT ENTRY
      echo '<li class="column ' . $name . ' route-' . $route . ' theme-' . $theme . ' ' . $catString . '">' . htmlspecialchars($line[0]) . '</li>';
    }
  }
  fclose($f);
?>

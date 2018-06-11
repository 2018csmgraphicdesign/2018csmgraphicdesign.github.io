<?php
  //GENERATE LIST OF STUDENTS NAMES WITH TAGS
  $f = fopen("csv/data-04.csv", "r");
  while (($line = fgetcsv($f)) !== false) {
    if($line[0] != 'NAME'){
      //NAME
      //names are already in dashes without spaces
      $name = strtolower(htmlspecialchars($line[0]));
      $name = str_replace(' ', '-', $name);

      //NAME
      //formatting for output without dashes
      $nameNice = str_replace('-', ' ', $name);

      //check if people have added data here
      if ($line[10] != ' ') {
        //ROUTE
        $route = strtolower(htmlspecialchars($line[10]));
        $route = str_replace(' and ', '-', $route);
        $route = str_replace(' ', '-', $route);
      }

      if ($line[11] != ' ') {
        //CATEGORIES
        $cat = strtolower(htmlspecialchars($line[11]));
        $catArray = explode(' ', $cat);
        $catString = '';
        foreach ($catArray as $x) {
          $catString = $catString . ' category-' . $x;
        }
      }

      if ($line[12] != ' ') {
          //THEME
          $theme = strtolower(htmlspecialchars($line[12]));
          $theme = str_replace(' and ', '-', $theme);
          $theme = str_replace(' ', '-', $theme);
      }

      //CREATE STUDENT ENTRY
      echo '<li class="' . $name . ' route-' . $route . ' ' . $catString . ' ' . $theme . ' column capitalise">' . $nameNice . '</li>';

      //THEME
      //need to make a column for these in the csv file
      // $theme = strtolower(htmlspecialchars($line[]));
      // $theme = str_replace(' ', '-', $theme);

      //logic not thought out
      // if ((isset($route)) && (isset($cat))) {}
    }
  }
  fclose($f);
?>

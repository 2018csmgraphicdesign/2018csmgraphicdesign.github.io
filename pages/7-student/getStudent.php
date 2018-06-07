<div class="student-info">

<?php
  $n = $_REQUEST["name"];
  //CREATE STUDENT PAGE

  $f = fopen("csv/data-04.csv", "r");
  while (($line = fgetcsv($f)) !== false) {
            if($line[0] == $n){
              $insta = strtolower(htmlspecialchars($line[1]));
              $insta = str_replace('@', '', $insta);

              $name = strtolower(htmlspecialchars($line[0]));
              $name = str_replace('-', ' ', $name);

              echo '<p class="student-name capitalise">' . $name . '</p>';
              echo '<p class="student-descript">' . htmlspecialchars($line[12]) . '</p>';
              echo '<a class="student-link student-insta block" href="https://www.instagram.com/' . $insta . '">Instagram</a>';
              echo '<a class="student-link student-twitter block" href="' . htmlspecialchars($line[2]) . '">Twitter</a>';
              echo '<a class="student-link student-web block" href="' . htmlspecialchars($line[7]) . '">Portfolio</a>';
              echo '<a class="student-link student-web-other block" href="' . htmlspecialchars($line[4]) . '">Other(?)</a>';
              echo '<a class="student-link student-email block" href="mailto:' . htmlspecialchars($line[9]) . '">Contact</a>';
              echo '<div class="student-img content cycle-slideshow cycle-slideshow--overlay" data-cycle-slides=">img, >iframe">';

              $g=scandir('../7-student/names/' . htmlspecialchars($line[0]) . '/');
              foreach($g as $x) {
                if(is_dir($x))$ar[$x]=scandir($x);
                else {
                  echo '<img class="img" src="../7-student/names/' . htmlspecialchars($line[0]) . '/' . $x . '">';
                }
              }
              if($line[4] != ""){
                echo '<iframe class="vimeo" src="' . htmlspecialchars($line[4]) . '?autoplay=1&loop=1&color=ffffff&portrait=0" style="width:100%; height:27vw" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
              }

              echo '</div>';
            }
  }
  fclose($f);
?>

</div>
<div class="close-button"></div>

<!-- temporary place for these guys until we look at css and clean up -->
<style>
/* slideshow for overlays */
.student-img.cycle-slideshow--overlay {
  width: 90%;
}
</style>

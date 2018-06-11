<div class="close-button"><img src="assets/back.png"></div>
<section class="student--hover">
  <section class="search--divider student-top"></section>
  <link rel="stylesheet" href="styles/student.css">
    <section class="load-student load-student--txt">
      <?php
        $n = $_REQUEST["name"];
        $f = fopen("csv/data-07.csv", "r");
        while (($line = fgetcsv($f)) !== false) {
          if($line[0] == $n){

            if($line[13] != ""){
              echo '<p class="student-descript">' . htmlspecialchars($line[13]) . '</p>';
            }
            if($line[1] != ""){
              $insta = strtolower(htmlspecialchars($line[1]));
              $insta = str_replace('@', '', $insta);
              echo '<a class="student-link student-insta" href="https://www.instagram.com/' . $insta . '">Instagram</a>';
            }
            if($line[2] != ""){
              echo '<a class="student-link student-twitter" href="' . htmlspecialchars($line[2]) . '">Twitter</a>';
            }
            if($line[7] != ""){
              echo '<a class="student-link student-web" href="' . htmlspecialchars($line[7]) . '">Portfolio</a>';
            }
            if($line[4] != ""){
              echo '<a class="student-link student-web-other" href="' . htmlspecialchars($line[4]) . '">Other(?)</a>';
            }
            if($line[9] != ""){
              echo '<a class="student-link student-email" href="mailto:' . htmlspecialchars($line[9]) . '">Contact</a>';
            }
          }
        }
        fclose($f);
      ?>
      <section class="load-student load-student--name">
        <?php
          $n = $_REQUEST["name"];
          $f = fopen("csv/data-07.csv", "r");

          while (($line = fgetcsv($f)) !== false) {
            if($line[0] == $n){
              $name = strtolower(htmlspecialchars($line[0]));
              $name = str_replace('-', ' ', $name);

              echo '<p class="student-name capitalise" id="' . strtolower(htmlspecialchars($line[0])) . '">' . $name . '</p>';
              $g=scandir('../2-student/names/' . htmlspecialchars($line[0]) . '/');
              foreach($g as $x) {
                if(is_dir($x))$ar[$x]=scandir($x);
              }
            }
          }
          fclose($f);
        ?>
      </section>
    </section>

    <section class="load-student load-student--files">
      <?php
        $n = $_REQUEST["name"];
        $f = fopen("csv/data-07.csv", "r");
        while (($line = fgetcsv($f)) !== false) {
          if($line[0] == $n){
            echo '<div class="student-img content cycle-slideshow" data-cycle-slides=">img, >iframe">';

            $g=scandir('../2-student/names/' . htmlspecialchars($line[0]) . '/');
            foreach($g as $x) {
              if(is_dir($x))$ar[$x]=scandir($x);
              else {
                echo '<img class="img" src="../2-student/names/' . htmlspecialchars($line[0]) . '/' . $x . '">';
              }
            }

            //col 5,6,7 have vimeo links! (so does 4 but they're mixed w/ other stuff like linkedin)
            if($line[4] != ""){
              $vim1 = str_replace('https://vimeo.com/', '', htmlspecialchars($line[4]));
              echo '<iframe class="vimeo" src="https://player.vimeo.com/video/' . $vim1 . '?autoplay=0&loop=1&color=ffffff&portrait=0" style="width:100%; height:27vw" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
            }
            if($line[5] != ""){
              $vim2 = str_replace('https://vimeo.com/', '', htmlspecialchars($line[5]));
              echo '<iframe class="vimeo" src="https://player.vimeo.com/video/' . $vim2 . '?autoplay=0&loop=1&color=ffffff&portrait=0" style="width:100%; height:27vw" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
            }
            if($line[6] != ""){
              $vim3 = str_replace('https://vimeo.com/', '', htmlspecialchars($line[6]));
              echo '<iframe class="vimeo" src="https://player.vimeo.com/video/' . $vim3 . '?autoplay=0&loop=1&color=ffffff&portrait=0" style="width:100%; height:27vw" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
            }
            echo '</div>';
          }
        }
        fclose($f);
      ?>
    </section>
</section>

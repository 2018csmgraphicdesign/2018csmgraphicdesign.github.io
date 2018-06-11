<?php

    header('Access-Control-Allow-Origin: *');

    //GET IMAGES WITH TAGS

    $tags = $_REQUEST["tags"];
    $tagsSplit = explode(" ", $tags);
    $count=0;
    $ar=array();
    $i=1;
    $g=scandir('../../2-student/names/');


    $f = fopen("../../2-student/csv/data-07.csv", "r");
    while (($line = fgetcsv($f)) !== false) {
        if($line[0] != 'NAME'){
            $tcount = 0;

            if ($line[10] != ' ') {
                //ROUTE
                $route = strtolower(htmlspecialchars($line[10]));
                $route = str_replace(' and ', '-', $route);
                $route = str_replace(' & ', '-', $route);
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

            $csvTags = $route . ' ' . $catString . ' ' . $theme;
            foreach ($tagsSplit as $t) {
                if(strpos($csvTags, $t) === false){
                    $tcount++;
                }
            }
            if($tags == ""){
                $tcount = 0;
            }
            if($tcount == 0){

                $g=scandir('../../2-student/names/' . htmlspecialchars($line[0]) . '/');
                foreach($g as $x) {
                    if(is_dir($x))$ar[$x]=scandir($x);
                    else {
                        if($x != ".DS_Store"){
                            $count++;
                            $ar[]=$x."*";
                        }
                    }
                }
            }
        }

    }
    fclose($f);

    while($i <= $count)
    {
        echo $ar[$i-1];
        $i++;
    }
?>

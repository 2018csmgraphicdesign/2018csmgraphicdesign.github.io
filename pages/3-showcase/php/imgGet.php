<?php

    header('Access-Control-Allow-Origin: *');

    //GET IMAGES WITH TAGS

    $tags = $_REQUEST["tags"];
    $tagsSplit = explode(" ", $tags);
    $count=0;
    $ar=array();
    $i=1;
    $g=scandir('../../2-student/names/');


    $f = fopen("../../2-student/csv/data-04.csv", "r");
    while (($line = fgetcsv($f)) !== false) {
        if($line[0] != 'NAME'){
            $tcount = 0;
            $csvTags = htmlspecialchars($line[9]) . ' ' . htmlspecialchars($line[10]) . ' ' . htmlspecialchars($line[11]);
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

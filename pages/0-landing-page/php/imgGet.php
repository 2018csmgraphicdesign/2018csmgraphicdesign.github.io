<?php

header('Access-Control-Allow-Origin: *');

$count=0;
$ar=array();
$i=1;
$g=scandir('../landingImg/');

foreach($g as $x)
{
    if(is_dir($x))$ar[$x]=scandir($x);
    else
    {
    	if($x !== ".DS_Store"){
	        $count++;
	        $ar[]=$x."*";
	    }
    }
}

while($i <= $count)
{
    echo $ar[$i-1];
    $i++;
}
?>

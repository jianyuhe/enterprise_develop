<?php
$db = mysqli_connect('localhost', 'root', '') or die(mysqli_error());
mysqli_select_db($db ,"ca") or die(mysqli_error());
$totalrow=mysqli_num_rows($sql1);
$rowperpage = 5;
$totalpage = ceil($totalrow / $rowperpage);
if (isset($_GET['currentpage']) && is_numeric($_GET['currentpage'])) {
   $currentpage = (int) $_GET['currentpage'];
} else {
   $currentpage = 1;
} 
if ($currentpage > $totalpage) {
   $currentpage = $totalpage;
} 
if ($currentpage < 1) {
   $currentpage = 1;
} 
$offset = ($currentpage - 1) * $rowperpage;
$range = 3;


if ($currentpage > 1) {
 
   echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=1'>Firstpage</a> ";
 
   $prevpage = $currentpage - 1;
 
   echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=$prevpage'>Prevpage</a> ";
}


for ($x = ($currentpage - $range); $x < (($currentpage + $range) + 1); $x++) {
   
   if (($x > 0) && ($x <= $totalpage)) {
      
      if ($x == $currentpage) {
      
         echo " [<b>$x</b>] ";
      } else {
       
         echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=$x'>$x</a> ";
      }
   } 
}
if ($currentpage != $totalpage) {
  
   $nextpage = $currentpage + 1;
   echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=$nextpage'>Nextpage</a> ";
   echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=$totalpage'>Lastpage</a> ";
} 
?>
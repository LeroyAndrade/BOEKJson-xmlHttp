<?php
function dbConnect(){}
try {
  $hostname='localhost';
  $username='c5405project_p4';
  $password='SH9uG7uZyift#A';
  $database='c5405L1P4Project';
/*
$hostname='127.0.0.1';
$username='root';
$password='';
$database='l1-p4-project';
*/
    /*
    <?php
    $hostname='localhost';
    $username='c5405project_p4';
    $password='SH9uG7uZyift#A';
    $database='c5405L1P4Project';
    ?>

    */
    $connection = new PDO('mysql:host='.$hostname.';dbname='.$database, $username, $password);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $connection;
}

  catch(PDOException $e){
      echo "Volgende foutmelding gegenereerd ".$e->getMessage();
  }



?>

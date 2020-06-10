<?php
require 'includes/connectie.php';




$zoekbalkText = $_POST["zoekbalkText"];


$connection = dbConnect();
$sql = 'SELECT * FROM `boeken` WHERE `titel` LIKE :zoekbalkText';

$statement = $connection->prepare( $sql );

$params=[
    'zoekbalkText' => '%'. $zoekbalkText . '%'
];
$statement->execute($params);




//$ab = json_encode($result, true);
//$bc = json_decode($_POST["titel"]);

//echo var_dump(json_encode($result, true));

?>

<html>
    <body>
        <?php
foreach($statement as $rows)
{
    echo $rows['titel'].'<br/>' ;?>
    <img src="./<?php echo $rows['cover']?>"width='100'>
    <?php



}
        ?>
    </body>
</html>
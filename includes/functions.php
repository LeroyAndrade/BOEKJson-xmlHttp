<?php
session_start();

$connectie = mysqli_connect("localhost","root", "", "l1-p4-project");

/**
 * Verbinding maken met de database
 *
 * @return bool|PDO
 */
// require 'includes/index.php';


/**
 * Geeft het totaal aantal rijen terug
 *
 * @param $connection
 *
 * @return int
 */

function getTotalCountries( $connection ) {
	//TODO: Hier de juiste query zetten om het totaal aantal countries te tellen
	$sql       = 'SELECT COUNT(*) AS `Totaal` FROM `boeken`';
	$statement = $connection->query( $sql );

	return (int) $statement->fetchColumn();
}

/**
 * Haalt alle landen op voor het opgegeven paginanummer
 *
 * @param \PDO $connection The database connection
 * @param int $page Pagenumber
 * @param int $pagesize Number of results per page
 *
 * @return array
 */
function getCountries( $connection, $page = null, $pagesize) {

	// De parameter $page naar een getal omzetten met (int)
	$page  = (int)$page; //echo gettype($page);

	// Beginnen met de SQL query om ALLES op te halen

	//tijdelijk als comment om niet te veel hoeven scrollen tijdens ontwikkeling:
	//$sql = 'SELECT * FROM `boeken`';

	$sql = 'SELECT * FROM `boeken`';
//	$sql = 'SELECT * FROM `boeken` LIMIT 10 OFFSET 158 ';

	// Alle gegevens ophalen van de database.
		$total =getTotalCountries( $connection );

	//TODO: Het totaal aantal landen ophalen (check de functie in dit bestand!)
		$num_pages = (int) round($total / $pagesize);

	//TODO: welke berekening moet hier komen? Gebruik de variabelen );


	// Als pagina nummer te groot is dan naar laatste pagina zetten
	//TODO: Hoe bereken je waar je moet beginnen (welke variabelen kun je hiervoor gebruiken?)
		//je begint bij pagina 1 en begint bij rij 0 = pagina =0 * aantal paginas
		$offset = ($page -1) * $pagesize;

	// Nu plakken we de juiste LIMIT en OFFSET achter de SQl die we al hadden
	//handig! nu kan ik een bestaande variabele aanvulllen met .=
	$sql .= ' LIMIT ' . $pagesize . ' OFFSET ' . $offset;
 //	//$sql  = ' LIMIT . $pagesize .  OFFSET . $offset';
 //	//$limitnOffset  = 'SELECT * FROM `boeken` LIMIT . $pagesize .  OFFSET . $offset';

	$statement = $connection->query($sql);

	// Deze array met informatie geeft de functie terug
	//$pagesize = $_GET['page'];




	//$pages weergeeft aantal pagina numering blokken waar pagina nummers in te recht komen te staan
	$pages=24;
	return [
		'statement' => $statement,
		'total'     => $total,
		'pages'     => $pages,
		'page'      => $page
	];
}//session_destroy();

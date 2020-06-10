<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="utf8">
    <meta name="author" content="Leroy Andrade">
    <meta name="content" content="Project">
    <meta name="description" content="Periode 4 leerjaar 2">
    <meta name="keywords" content="Front-End, front-end. Front-end, front end, Front end, Frontend">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./css/style.css">
    <title>Overzicht</title>
</head>
    <body lang="nl">

<?php
    try{
          require 'includes/connectie.php';
//$conn = mysqli_connect("127.0.0.1","c5405LeroyA", "vhnnpijr", "c5405temp");
//$conn = mysqli_connect("localhost","root", "", "l1-p4-project");

/**/
$connection = dbConnect();
$sql = 'SELECT `titel`,`cover`, `auteur`, `uitgave`,`ean`, `paginas`,`taal`,prijs FROM `boeken` LIMIT 20 OFFSET 2';


$statement = $connection->query($sql);
$json_array = array();

foreach($statement as $rows)
{
    $json_array[] = $rows;
}

//maak bestand aan
$text = json_encode($json_array, JSON_NUMERIC_CHECK);
$abc=json_decode($text, true);//test
$var_str = var_export($text, true);

file_put_contents('boekenSelf.json', $text) . '<br/>';


//echo $text;

$statement = $connection->query($sql);

        } catch(PDOException $e){
            echo 'Fout bij ' . $e->getMessage() . ' op regel '.$e->getLine() . ' in ' . $e->getFile();
        }
        
 ?>
















<?php if(!isset($_GET['submit'])){

?>
    <header>
    <nav>
    <input type="button" value="&#8801;" id="menuClosed1">

        <img src="afb/heart.svg" id="menuClosed2" alt="">

        <label for="">
            <form action="zoeken.php" method="POST">
                <input type="text" name="zoekbalkText">
                <img src="afb/zoek.svg" id="menuClosed3"  alt="">
                <input type="submit" value="Zoeken">
            </form>
        </label>

        <img src="" id="menuClosed4" alt="">

        <a href="bestelOverzicht.php">
        <div class="winkelwagen"> <span class="winkelwagen__aantal"></span></div></a>

    </nav>
<?php 

?>

            <section id="menuOpen">
                <label for="toggleLabel" id="toggleLabel" class="pl-40">Sharing is caring</label>
            <!--  <input type="button" value="&#8801" id="menuButtonOpen"> = -->
              <!-- <input type="button" value="&Chi;" id="menuButtonOpen">X -->
                <ul>
                    <li class="pb-100"><a href="#">Boodschappen</a></li>

                    <li><a href="http://1.1.1.1">Profiel</a></li>

                    <li><a href="#">Ons concept</a></li>

                    <li><a href="#">Wordt bezorger</a></li>

                    <li><a href="#">Contact</a></li>

                    <li><a href="http://30168.hosts2.ma-cloud.nl/bewijzenmap/periode4.4/fro/GoogleMaps//GoogleMaps/index.html" target="_blank"><u>Locatie</u></a></li>
                </ul>
            </section>
        
    </header>



        <br>
        <section id="productenSectie">
        <h1>Beschikbare producten</h1>
            <select id="kenmerk">
                <option value="titelUppercase">titel</option>
                <option value="sortAuteur">auteur</option>
                <option value="jsDatum">Datum uitgave</option>
                <option value="paginas">Aantal Bladzijden&#39;s</option>
                <option value="taal">Taal</option>
                <option value="prijs">Prijs</option>
            </select>

            <radio button voor sorteren>
                <label><input type="radio" name="oplopend" value="1" selected>Oplopend</label>
                <label><input type="radio" name="oplopend" value="-1" selected>Aflopend</label>
            </radio>
        <div id="uitvoer"></div>
        <script src="./js/sorteerBoeken.js" charset="utf-8"></script>
        <script src="./js/menu.js" charset="utf-8"></script>

        </section>

        <?php
           }











           else{
       ?>
    <header>
    <nav>
    <input type="button" value="&#8801;" id="menuClosed1">

        <img src="afb/heart.svg" id="menuClosed2" alt="">

        <label for="">
            <form action="index.php" methd="GET">
                <input type="text">
                <img src="afb/zoek.svg" id="menuClosed3"  alt="">
                <input type="submit" value="Zoeken">
            </form>
        </label>

        <img src="" id="menuClosed4" alt="">

        <a href="bestelOverzicht.php">
        <div class="winkelwagen"> <span class="winkelwagen__aantal"></span></div></a>

    </nav>
<?php 

?>

            <section id="menuOpen">
                <label for="toggleLabel" id="toggleLabel" class="pl-40">Sharing is caring</label>
            <!--  <input type="button" value="&#8801" id="menuButtonOpen"> = -->
              <!-- <input type="button" value="&Chi;" id="menuButtonOpen">X -->
                <ul>
                    <li class="pb-100"><a href="#">Boodschappen</a></li>

                    <li><a href="http://1.1.1.1">Profiel</a></li>

                    <li><a href="#">Ons concept</a></li>

                    <li><a href="#">Wordt bezorger</a></li>

                    <li><a href="#">Contact</a></li>

                    <li><a href="http://30168.hosts2.ma-cloud.nl/bewijzenmap/periode4.4/fro/GoogleMaps//GoogleMaps/index.html" target="_blank"><u>Locatie</u></a></li>
                </ul>
            </section>
        
    </header>



        <br>
        <section id="productenSectie">
        <h1>Beschikbare producten</h1>
            <select id="kenmerk">
                <option value="titelUppercase">titel</option>
                <option value="sortAuteur">auteur</option>
                <option value="jsDatum">Datum uitgave</option>
                <option value="paginas">Aantal Bladzijden&#39;s</option>
                <option value="taal">Taal</option>
                <option value="prijs">Prijs</option>
            </select>

            <radio button voor sorteren>
                <label><input type="radio" name="oplopend" value="1" selected>Oplopend</label>
                <label><input type="radio" name="oplopend" value="-1" selected>Aflopend</label>
            </radio>
        <div id="uitvoer"></div>
        <script src="./js/sorteerBoeken.js" charset="utf-8"></script>
        <script src="./js/menu.js" charset="utf-8"></script>

        </section>

        <?php
           }
           ?>
    </body>
</html>

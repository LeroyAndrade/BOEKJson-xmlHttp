<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="utf8">
    <meta name="author" content="Leroy Andrade">
    <meta name="content" content="Fro JSON/XHTML">
    <meta name="description" content="Periode 4 leerjaar 2">
    <meta name="keywords" content="Front-End, front-end. Front-end, front end, Front end, Frontend">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./css/style.css">
    <title>Overzicht winkelmand</title>
</head> 
    <body lang="nl">
        <a href="bestelOverzicht.php">
            <div class="winkelwagen"><span class="winkelwagen__aantal"></span>
            </div>
        </a><br/>
        <p><a href="index.php">Verder winkelen</a></p>


        <div id="bestelling"></div>
        <input type="button" value="Bestel" onclick="Bestel()">


        <div id="bestellingPlaatsen"></div>

        
            <script>
            function Bestel(){
                let xyz = localStorage.getItem('besteldeItem');

                if (localStorage.getItem('besteldeItem') == null ){
                    document.getElementById("bestellingPlaatsen").innerHTML = "U 8528572852 geen items in het bestelmandje";
                } 
                else if (localStorage.getItem('besteldeItem') !== null){
                     document.getElementById("bestellingPlaatsen").innerHTML = "U heeft data  adres ingevoerd";

                 }
                }
            </script>
            <div></div>
        </div>
        <script src="./js/bestelOVerzicht.js" charset="utf-8"></script>
    </body>
</html>
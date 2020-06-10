let lijst = ["Theo", "Milena", "Miloš", "Rosmerta", "Ed", "Saskia", "Hidde"];
//let lijst = [1,2,3,4,11,12,13,14,21,22,23,24,31,32,33,34,41];

// sorteren van tekst
//let lijst = ["Theo", "Milena", "Miloš", "Rosmerta", "Ed", "Saskia", "Hidde"];
//lijst = lijst.sort();
lijst = lijst.sort((x,y) => x.length - y.length >0 ? 1 : -1);




//Uitlezen en sorteren van nummers:
/*
lijst = [1,2,3,4,11,12,13,14,21,22,23,24,31,32,33,34,41];

lijst = lijst.sort(function(x,y){
   if (x-y >0){
      1
   } else { -1}
});
& of 
//Uitlezen en sorteren van nummers met ternary operator:
   oude code: lijst = lijst.sort(function(x,y) { x-y>0 ? 1 : -1});
   nieuw code: 
   lijst = lijst.sort((x,y) => x-y>0 ? 1 : -1);

   //reverse:
      lijst = lijst.reverse((x,y) => x-y>0 ? 1 : -1);
   of reverse
         lijst = lijst.sort((x,y) => x-y>0 ? -1 : 1);
*/

// uitvoeren
let uitvoer = "";
lijst.forEach((item) => {
   uitvoer += item + '<br>';
});
document.getElementById('uitvoer').innerHTML = uitvoer;

/*
    "titel": "Summerproof met Sonja",
      "cover": "https://s.s-bol.com/imgbase0/imagebase3/large/FC/0/7/3/5/9200000110145370.jpg",
      "auteur": ["Bakker,Sonja"],
      "uitgave": "2019-05",
      "paginas": 104,
      "taal": "Nederlands",
      "ean": "9789078211433",
      "prijs": 15.95

      function JSONOBJData(titel, cover, auteur, uitgave, paginas, taal, ean, prijs){
         let varJSONOBJData = this;
         varJSONOBJData.titel =sorteerBoekObj.data[0].titel;
         varJSONOBJData.cover =cover ;
         varJSONOBJData.auteur = auteur;
         varJSONOBJData.uitgave = uitgave;
         varJSONOBJData.paginas = paginas;
         varJSONOBJData.taal = taal;
         varJSONOBJData.ean = ean;
         varJSONOBJData.prijs = prijs;
     }
     */
// keuze voorsorteren opties
let kenmerk = document.getElementById('kenmerk');
    //wanneer het op index.html staande lijst met naam kenmerk wordt aangepast dan
    kenmerk.addEventListener('change', (e) =>{
        sorteerBoekObj.kenmerk = e.target.value;
        sorteerBoekObj.sorteren();
        console.log("Change event gedetecteerd.");
        console.log(sorteerBoekObj.kenmerk);
    });


//oude code1: const url="boeken.json"; --> koppeling met regel #23
//nieuwe code:  één constante minder door source direct defineren in de request

let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){

    //kijken wat voor onready state change je in bevind:
    if(this.readyState ===4 && this.status === 200){
        console.log("Ready state OK - verbinding OK"); 
        //Responses
       
        //index.HTML toont de inhout van de resonseText welke is gedefinieerd in 
            //oude code1: document.getElementById("uitvoer").innerHTML = this.responseText;        
            //nieuw code: want in het object geef je aan dat 

            //oude code1: sorteerBoekObj.data=this.responseText;//en this.responseText is de inhoud van const url
            //nieuwe code: en zet data om naar een string
            sorteerBoekObj.data=JSON.parse(this.responseText);//en this.responseText is de inhoud van const url
            //oude code2: sorteerBoekObj.uitvoeren();
            //Nieuwe code: 
            sorteerBoekObj.sorteren(); // roep het object.methode->sorteren aan die sorteerBoekObj.uitvoeren  afspeelt

            //volgende regel hoort bij nieuwe code
            //console.log("Alle data is uitgelezen, wanneer niet wordt getoond op het scherm, voer console in: sorteerBoekObj. Data kun je forceren met: oproepen object: sorteerBoekObj.uitvoeren");
    } else {
       // console.log("readyState" + this.readyState);
      //  console.log("readyStatus" + this.status);
    }
}
//wat wordt er geopend? het volgende:
    //oude code1: xmlhttp.open('GET', url, true);
    //nieuwe code:
//    xmlhttp.open('GET', "boekenSelf.json.json", true);
    xmlhttp.open('GET', "boekenSelf.json", true);
//verzenden
xmlhttp.send();

//functie die tabel kop en rij maken in markup uitvoeren
 // Uitleebaar:sorteerBoekObj.data[0].titel

 //CSS: .boekSelectie__rij--accent
 const maakTabelKop = (arr) => {
    let kop = "<table class='boekSelectie'><tr>";
    arr.forEach((item) => {
     kop += "<th>" + item + "</th>";    
    });
    kop +="</tr>";
    return kop;
}

const maakTabelRij = (arr, accent) => {
    let rij="";
    accent===true ? rij = "<tr class='boekSelectie__rij--accent'>" : rij = "<tr class='boekSelectie__rij'>";
    arr.forEach((item) => {
        rij += "<td class='boekSelectie__data-cel'b>" + item + "</td>";    
    });
    rij +="</tr>";
    return rij;
}


//Object dat boeten sorteert en de commando van dropdown menu uitvoert
let sorteerBoekObj ={
    //data is een methode

    //met de ',' worden object regels van elkaar onderschijden;
    data: "",  // afkomstig vanuit xmlhttp.onreadychange
    kenmerk: "titel",

    //data sorteren:
    //sorteren is een methode
    sorteren: function(){
        //omdat je nu binnen in het object zit, hoef je geen  sorteerBoekObj.uitvoeren(); meer te doen 
        // wat nu kan is simpwelweg gebruik maken van de 'this'
        //sorteren van data: ieder object boek wordt gezien als nieuw boek en wordt dus opnieuw gelezen vanaf 0. Je pakt twee boeken en vergelijkt ze met elkaar.
        this.data.sort( (a,b) => this.kenmerk[0] > this.kenmerk[0] ? 1:-1 );
        // of this.data.sort( (a,b) => a.titel[0] > b.titel[0] ? 1:-1 );
        this.uitvoeren(this.data);
    },



    
    //de data binnen tabel van .JSON document uitvoeren
    uitvoeren: function(data){
        //oude code1 let uitlezen = ""; //zorg ervoor dat inhoud vanuit het object in de uitvoer let variabele komt
        //let uitlezen = ""; //zorg ervoor dat inhoud vanuit het object in de uitvoer let variabele komt

        //data van object uitvoerbaar vanaf deze locatie zoals: window.alert(sorteerBoekObj.data[0].titel);


        //nieuwe code 3
   // let uitlezen =""; //zorg ervoor dat inhoud vanuit het object in de uitvoer let variabele komt
    let uitlezen = maakTabelKop(
        ["titel", 
        "cover", 
        "auteur(s)",
        "uitgave", 
        "paginas", 
        "taal",
        "ean", 
        "prijs"]);
    //let uitlezen = maakTabelKop("titel", "cover", "auteur","uitgave", "paginas", "taal", "ean", "prijs"); //zorg ervoor dat inhoud vanuit het object in de uitvoer let variabele komt


    for (let i=0; i< this.data.length; i++){ //wanneer de de count van aantal letters in variabele let uitvoer, niet overeenkomt met dat van al dat wat in object uitvoeren.data.titel zit, dan voeg je het toe.
        let accent=false;
        //Bekijk het nummer, het nummer van i = :nthchild(i)
        //|
        //v pas onderstaande aan om :nthchild te veranderen en de CSS die daaraan verbonden is
        i%2 ===1 ? accent =true : accent = false;

        let imgElement = 
        "<img src='"
        + data[i].cover 
        +"'class='boekSelectie__cover'"
        +"xyz"
        +"'>";

        uitlezen += maakTabelRij(
            [
            imgElement, 
            data[i].auteur[0], 
            data[i].uitgave, 
            data[i].paginas, 
            data[i].taal,
            data[i].ean,
            data[i].prijs],accent);
        //accent = css-> .boekSelectie__rij--accent

        //uitlezen += data[i].auteur + "<br/>";
         //uitlezen += this.data[i].titel + "<br/>";

            //een array uitlezen binnen een obeject:     uitlezen += this.data[i].auteur[0] + "<br/>";
        }
        
        //this.data verrwijst naar de data die straks binnenkomt
        //Binnen JSON is er een kopje genaamd: data en dat wordt dus getoond via de volgende regel:
    
        //oude code1: document.getElementById("uitvoer").innerHTML = this.data;   
        //nieuwe code:
        document.getElementById("uitvoer").innerHTML = uitlezen; //data uitlezen vanuit object, waar data is gestopt in variabele: uitlezen

    }

}
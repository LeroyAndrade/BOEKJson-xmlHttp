//JSON importeren

//oude code: const url="boeken.json"; --> koppeling met regel #23
//nieuwe code:  één constante minder

let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){

    //kijken wat voor onready state change je in bevind:
    if(this.readyState ===4 && this.status === 200){
        console.log("Ready state OK - verbinding OK"); 
        //Responses
        console.log("readyState OK: " + this.readyState);
        console.log("readyStatus OK: " + this.status);
        //index.HTML toont de inhout van de resonseText welke is gedefinieerd in 
            //oude code: document.getElementById("uitvoer").innerHTML = this.responseText;        
            //nieuw code: want in het object geef je aan dat 
            sorteerBoekObj.data=this.responseText;//en this.responseText is de inhoud van const url
    } else {
        console.log("readyState" + this.readyState);
        console.log("readyStatus" + this.status);
    }
}
//wat wordt er geopend? het volgende:
    //oude code: xmlhttp.open('GET', url, true);
    //nieuwe code:
    xmlhttp.open('GET', "boeken.json", true);
//verzenden
xmlhttp.send();

//Object dat boeten sorteert en de commando van dropdown menu uitvoert
let sorteerBoekObj ={
    //met de ',' worden object regels van elkaar onderschijden;
    data: "",

    uitvoeren: function(){
        //this.data verrwijst naar de data die straks binnenkomt
        //Binnen JSON is er een kopje genaamd: data en dat wordt dus getoond via de volgende regel:
        document.getElementById("uitvoer").innerHTML = this.data;   
    }

}
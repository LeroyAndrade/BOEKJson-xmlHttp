
//Switch -> functie die een int maakt van de maand
let geefMaandNummer = (maand) =>{
let nummer;
switch (maand) {
    case "januari":     nummer=1;  break;
    case "februari":    nummer=2;  break;
    case "maart":       nummer=3;  break;
    case "april":       nummer=4;  break;
    case "mei":         nummer=5;  break;
    case "juni":        nummer=6;  break;
    case "juli":        nummer=7;  break;
    case "augustus":    nummer=8;  break;
    case "september":   nummer=9;  break;
    case "oktober":     nummer=10; break;
    case "november":    nummer=11; break;
    case "december":    nummer=12; break;
    default:            nummer=0;
}
return nummer;
}

//deze functie haalt de JSON auteur data op, met een opsomming
let maakOpsommingAuteurs = (array) =>{
let string = "";
for(let i=0; i< array.length; i++)
{
    switch (i) {
        //zolang aantal auteurs < dan het aantal auteurs, dan voeg je er 1 bij toe
        case array.length -1: string += array[i];            break;
        case array.length -2: string += array[i] + " en ";   break;
        default: string += array[i]+ ", ";
    }
}
return string;
}

//functie die de de tekst achter de komma, 'de, het', vooraan plaatst
const keerTekstOm = (string) =>{
if (string.indexOf(',') != -1) // niet -1 = geen komma aanwezig
{
let array = string.split(',');
string = array[1] + ' ' + array[0]; 
}

return string;
}





// winkelwagenObject
// Dit zorgt voor het toevoegen van items in winkelmandje

let winkelwagen = {
items: [],
haalItemsOp: function(){
    let bestelling;
    if (localStorage.getItem('besteldeItem') == null)
    {
         bestelling = [];
    } 
    else {
         bestelling = JSON.parse(localStorage.getItem('besteldeItem'));
//querySelector = gelijk aan de lengte van de bestelling, daar zit een array in welke je terugkrijgt.
         document.querySelector('.winkelwagen__aantal').innerHTML = bestelling.length;
    }
    bestelling.forEach( item =>{
        this.items.push(item);
    })
    return bestelling;
},



//doorloop alle items & wanneer ean van item overeenstemt, dit item doen verwijderen
verwijderItem: function(ean){
    this.items.forEach((item, index) =>{
        if ( item.ean == ean){
            this.items.splice(index,1); //verwijder tweede element van de splice, dus het hele item want dat is de index
        }
    })
    //localStorage ook bijwerken met de verwijderde items
    localStorage.setItem('besteldeItem', JSON.stringify(this.items));
    // document.querySelector('.winkelwagen__aantal').innerHTML = bestelling.length;
     document.querySelector('.winkelwagen__aantal').innerHTML = this.items.length;
    this.uitvoeren();
},



/*
//toevoegen item aan winkelmand
// items: [],
toevoegen: function(el){
    this.items = this.haalItemsOp();
    this.items.push(el);
    ///na pushen, item toevoegen aan localStorage
    localStorage.setItem('besteldeItem', JSON.stringify(this.items));
    document.querySelector('.winkelwagen__aantal').innerHTML = this.items.length;
},*/






    uitvoeren: function(){
        //uitvoer leegmaken zodat het niet dubbel wordt weergeven
    document.getElementById("bestelling").innerHTML = "";
    //creëer element met javascript 
    this.items.forEach( boek =>
    {
    let sectie = document.createElement("section");
        sectie.className = "besteldItem";

        
    //afbleeding cover afbeelding
    let afbeelding = document.createElement("img");
        afbeelding.className = "besteldItem__cover";
        afbeelding.setAttribute("src", boek.cover);
        afbeelding.setAttribute("alt", keerTekstOm(boek.titel));
    
    //titel
    let titel = document.createElement("h3");
        titel.className = "besteldItem__titel";
        titel.textContent = keerTekstOm(boek.titel); //haalt de titel uit de titel

    //prijs toevoegen    
    let prijs = document.createElement("div");
    prijs.className ="besteldItem__prijs";
    prijs.textContent = boek.prijs.toLocaleString('nl-NL', {currency: 'EUR', style: 'currency'});


    //Knop verwijderen
    let verwijder = document.createElement("div");
        verwijder.className = 'besteldItem__verwijderen';
        verwijder.addEventListener('click', () =>{
          this.verwijderItem(boek.ean);
        })
        


    //samenvoegen 
    sectie.appendChild(afbeelding);
    sectie.appendChild(titel);
    /*
    main.appendChild(auteurs);
    main.appendChild(overig);
    sectie.appendChild(main);
    */

    sectie.appendChild(prijs);
    sectie.appendChild(verwijder);
    document.getElementById("bestelling").appendChild(sectie);
    });
    }
//
}
winkelwagen.haalItemsOp();
winkelwagen.uitvoeren();
//Vraagt functie uit aanpassen.js, hier kan je de opmaak van de preloader veranderen.
aanpassen();

function setup(){
  //Verander de content van HTML element 'hold' 
  document.getElementById("hold").innerHTML = "";
  
//For loop voor de animatie
  for(var i=0; i<num; i++){
      
      //Maak een nieuwe DIV aan voor de animatie
    var button = document.createElement('div');
      
      //Haalt de bolletjes uit de CSS file
    button.className = "dot"+i+" dot";
      
      //Zorgt ervoor de de bolletjes in een circel draaien
    button.style.top = rad*Math.cos(ang*i*Math.PI/180)-10+"px";
    button.style.left = rad*Math.sin(ang*i*Math.PI/180)-10+"px";
     
    button.style.backgroundColor = "hsla("+ang*i+", 50%, 50%, 1)";
    
      //Zorgt ervoor dat de bolletjes een vloeiende overgang hebben
    button.style.webkitAnimation = 
      "osc "+run+"s ease-in-out infinite "+i/(num/2)+"s, rainbow 8s infinite linear "+i/(num/2)+"s";
    button.style.animation = 
      "osc "+run+"s ease-in-out infinite "+i/(num/2)+"s, rainbow 8s infinite linear "+i/(num/2)+"s";
    
      //Voegt de animatie toe aan de DIV 'hold'
    document.getElementById("hold").appendChild(button);
  }
}

//Functie om de preloader te laten verdwijnen nadat de pagina is geladen
window.onload = function(){
    
    //De DIV met de preloader animatie
  var el = document.getElementById('hold');
    
    //Laat de DIV verdwijnen met DOM
  el.style.display = 'none';
};

setup();

//Zet hier de website neer waarvoor de preloader moet komen
window.location.assign("http://www.ruudslagers.nl");


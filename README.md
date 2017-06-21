# Framework - Ruud Slagers - Preloader

Features
- Add preloader for your website
- Customize your visual for the preloader

Does your website takes to long to load, add this preloader for your website and people know the website is working.

What can you change?
You can change the visual to your needs. You go to js/aanpassen.js and find these options.


    num = 10,       //Verander dit nummer voor meer bolletjes tijdens het laden

    ang = 360/num,  //Verander dit voor hoeveel graden je de bolletjes wilt laten draaien
    
    rad = num*5,    //Verander dit voor de spacing tussen de bolletjes
    

    
    num - change how many balls you want to show

    ang - change how many degrees the balls have to go

    rad - change the spacing between the balls

In the js/index.js you can change the direction for the balls

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
    
It gets the size and colors from the css file, so you can also change that.
 
If the website is done loading let the div with the preloader disappear.
 
        //Functie om de preloader te laten verdwijnen nadat de pagina is geladen
        window.onload = function(){

          //De DIV met de preloader animatie
          var el = document.getElementById('hold');

          //Laat de DIV verdwijnen met DOM
          el.style.display = 'none';
        };
 
 To add your website just change 
 
        //Zet hier de website neer waarvoor de preloader moet komen
        window.location.assign("http://www.ruudslagers.nl");
        
 https:www.ruudslagers.nl to your domainname.

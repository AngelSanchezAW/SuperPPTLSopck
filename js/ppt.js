var vpiedra = 0
var vpapel = 1
var vtijera = 2
var vlagarto = 3
var vspock = 4
var rhombre = 0
var rmaquina = 0

 function aleatorio(minimo, maximo)
  {
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );  
    return numero;
  }
  
var opcionMaquina = aleatorio(0,4);



  function PiedraFunction() {
       document.getElementById("usuario").innerHTML = "<img src='img/piedra.png'/>";
       document.getElementById("vs").innerHTML = "<img src='img/vs.png'/>";
       function aleatorio(minimo, maximo){
            var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );  
            return numero;
       }
      var opcionMaquina = aleatorio(0,4);

       if (rhombre == 10 && rmaquina < 10 ) {
       document.getElementById("usuario").innerHTML = "";
       document.getElementById("vs").innerHTML = "<img  src='img/ganaste.png'/><br/><i class='icon-thumbsup'></i> Genial, ganaste!!!!<br/><br/><br/><a href='index.html'><i class='icon-paperplane'></i> Jugar de nuevo</a>";
       document.getElementById("maquina").innerHTML = "";
      } else if (rhombre < 10 && rmaquina == 10 ) {
        document.getElementById("usuario").innerHTML = "";
       document.getElementById("vs").innerHTML = "<img  src='img/perdiste.png'/><br/><i class='icon-thumbsdown'></i> Hoo no!! Perdiste!<br/><br/><br/><a href='index.html'><i class='icon-paperplane'></i> Jugar de nuevo</a>";
       document.getElementById("maquina").innerHTML = "";
      } else 

       if (opcionMaquina == 0) {
        document.getElementById("maquina").innerHTML = "<img  src='img/piedra.png'/>";
      
       }else if (opcionMaquina == 1) {
        document.getElementById("maquina").innerHTML = "<img  src='img/papel.png'/>";
        
       }else if (opcionMaquina == 2) {
        document.getElementById("maquina").innerHTML = "<img  src='img/tijera.png'/>";
     
       }else if (opcionMaquina == 3) {
        document.getElementById("maquina").innerHTML = "<img src='img/lagarto.png'/>";
       
       }else if (opcionMaquina == 4) {
        document.getElementById("maquina").innerHTML = "<img src='img/spock.png'/>";
       
        } 

        if (rhombre < 10 && rmaquina < 10 ) {

        if (vpiedra == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/empate.png'/>";
        } else if (vpapel == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>";
           rmaquina++;
           document.getElementById("rmaquina").innerHTML = "<i class='icon-rocket'></i> "+rmaquina;
        } else if (vtijera == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>";
          rhombre++;
          document.getElementById("rhombre").innerHTML = "<i class='icon-rocket'></i> "+rhombre;
        } else if (vlagarto == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>";
          rhombre++;
          document.getElementById("rhombre").innerHTML = "<i class='icon-rocket'></i> "+rhombre;
        } else if (vspock == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>";
          rmaquina++;
           document.getElementById("rmaquina").innerHTML = "<i class='icon-rocket'></i> "+rmaquina; 
        } 

        } else document.getElementById("resultado").innerHTML = "";  
    }

  function PapelFunction() {
       document.getElementById("usuario").innerHTML = "<img src='img/papel.png'/>";
       document.getElementById("vs").innerHTML = "<img src='img/vs.png'/>";
       function aleatorio(minimo, maximo){
            var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );  
            return numero;
       }
       var opcionMaquina = aleatorio(0,4);
       if (rhombre == 10 && rmaquina < 10 ) {
       document.getElementById("usuario").innerHTML = "";
       document.getElementById("vs").innerHTML = "<img  src='img/ganaste.png'/><br/><i class='icon-thumbsup'></i> Genial, ganaste!!!!<br/><br/><br/><a href='index.html'><i class='icon-paperplane'></i> Jugar de nuevo</a>";
       document.getElementById("maquina").innerHTML = "";
      } else if (rhombre < 10 && rmaquina == 10 ) {
        document.getElementById("usuario").innerHTML = "";
       document.getElementById("vs").innerHTML = "<img  src='img/perdiste.png'/><br/><i class='icon-thumbsdown'></i> Noooo!!! Perdiste.<br/><br/><a href='index.html'><i class='icon-paperplane'></i> Jugar de nuevo</a>";
       document.getElementById("maquina").innerHTML = "";
      } else 
       if (opcionMaquina == 0) {
        document.getElementById("maquina").innerHTML = "<img src='img/piedra.png'/>";
       
       }else if (opcionMaquina == 1) {
        document.getElementById("maquina").innerHTML = "<img src='img/papel.png'/>";

        }else if (opcionMaquina == 2) {
        document.getElementById("maquina").innerHTML = "<img src='img/tijera.png'/>";
      
       }else if (opcionMaquina == 3) {
        document.getElementById("maquina").innerHTML = "<img src='img/lagarto.png'/>";
      
       }else if (opcionMaquina == 4) {
        document.getElementById("maquina").innerHTML = "<img src='img/spock.png'/>";
       
        }  if (rhombre < 10 && rmaquina < 10 ) {

        if (vpiedra == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>";
           rhombre++;
          document.getElementById("rhombre").innerHTML = "<i class='icon-rocket'></i> "+rhombre;
        } else if (vpapel == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/empate.png'/>";
        } else if (vtijera == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>";
          rmaquina++;
           document.getElementById("rmaquina").innerHTML = "<i class='icon-rocket'></i> "+rmaquina;
        } else if (vlagarto == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>";
          rmaquina++;
           document.getElementById("rmaquina").innerHTML = "<i class='icon-rocket'></i> "+rmaquina;
        } else if (vspock == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>";
           rhombre++;
          document.getElementById("rhombre").innerHTML = "<i class='icon-rocket'></i> "+rhombre;

        }     
        } else document.getElementById("resultado").innerHTML = "";
  }
    
  function TijeraFunction() {
       document.getElementById("usuario").innerHTML = "<img src='img/tijera.png'/>";
       document.getElementById("vs").innerHTML = "<img src='img/vs.png'/>";
       function aleatorio(minimo, maximo){
            var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );  
            return numero;
       }
       var opcionMaquina = aleatorio(0,4);
       if (rhombre == 10 && rmaquina < 10 ) {
       document.getElementById("usuario").innerHTML = "";
       document.getElementById("vs").innerHTML = "<img  src='img/ganaste.png'/><br/><i class='icon-thumbsup'></i> Genial, ganaste!!!!<br/><br/><br/><a href='index.html'><i class='icon-paperplane'></i> Jugar de nuevo</a>";
       document.getElementById("maquina").innerHTML = "";
      } else if (rhombre < 10 && rmaquina == 10 ) {
        document.getElementById("usuario").innerHTML = "";
       document.getElementById("vs").innerHTML = "<img  src='img/perdiste.png'/><br/><i class='icon-thumbsdown'></i> Noooo!!! Perdiste.<br/><br/><a href='index.html'><i class='icon-paperplane'></i> Jugar de nuevo</a>";
       document.getElementById("maquina").innerHTML = "";
      } else 
       if (opcionMaquina == 0) {
        document.getElementById("maquina").innerHTML = "<img src='img/piedra.png'/>";

       
       }else if (opcionMaquina == 1) {
        document.getElementById("maquina").innerHTML = "<img src='img/papel.png'/>";
       
       }else if (opcionMaquina == 2) {
        document.getElementById("maquina").innerHTML = "<img src='img/tijera.png'/>";
      
       }else if (opcionMaquina == 3) {
        document.getElementById("maquina").innerHTML = "<img src='img/lagarto.png'/>";
       
       }else if (opcionMaquina == 4) {
        document.getElementById("maquina").innerHTML = "<img src='img/spock.png'/>";
        
        }  if (rhombre < 10 && rmaquina < 10 ) {

        if (vpiedra == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>";
          rmaquina++;
           document.getElementById("rmaquina").innerHTML = "<i class='icon-rocket'></i> "+rmaquina;
        } else if (vpapel == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>";
           rhombre++;
          document.getElementById("rhombre").innerHTML = "<i class='icon-rocket'></i> "+rhombre;
        } else if (vtijera == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/empate.png'/>";
        } else if (vlagarto == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>";
           rhombre++;
          document.getElementById("rhombre").innerHTML = "<i class='icon-rocket'></i> "+rhombre;
        } else if (vspock == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>";
          rmaquina++;
           document.getElementById("rmaquina").innerHTML = "<i class='icon-rocket'></i> "+rmaquina; 
        }     
        } else document.getElementById("resultado").innerHTML = "";
  }
  function LagartoFunction() {
       document.getElementById("usuario").innerHTML = "<img src='img/lagarto.png'/>";
       document.getElementById("vs").innerHTML = "<img src='img/vs.png'/>";
       function aleatorio(minimo, maximo){
            var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );  
            return numero;
       }
       var opcionMaquina = aleatorio(0,4);
       if (rhombre == 10 && rmaquina < 10 ) {
       document.getElementById("usuario").innerHTML = "";
       document.getElementById("vs").innerHTML = "<img  src='img/ganaste.png'/><br/><i class='icon-thumbsup'></i> Genial, ganaste!!!!<br/><br/><br/><a href='index.html'><i class='icon-paperplane'></i> Jugar de nuevo</a>";
       document.getElementById("maquina").innerHTML = "";
      } else if (rhombre < 10 && rmaquina == 10 ) {
        document.getElementById("usuario").innerHTML = "";
       document.getElementById("vs").innerHTML = "<img  src='img/perdiste.png'/><br/><i class='icon-thumbsdown'></i> Noooo!!! Perdiste.<br/><br/><a href='index.html'><i class='icon-paperplane'></i> Jugar de nuevo</a>";
       document.getElementById("maquina").innerHTML = "";
      } else 
       if (opcionMaquina == 0) {
        document.getElementById("maquina").innerHTML = "<img src='img/piedra.png'/>";
       
       }else if (opcionMaquina == 1) {
        document.getElementById("maquina").innerHTML = "<img src='img/papel.png'/>";
       
       }else if (opcionMaquina == 2) {
        document.getElementById("maquina").innerHTML = "<img src='img/tijera.png'/>";
   
       }else if (opcionMaquina == 3) {
        document.getElementById("maquina").innerHTML = "<img src='img/lagarto.png'/>";
      
       }else if (opcionMaquina == 4) {
        document.getElementById("maquina").innerHTML = "<img src='img/spock.png'/>";
      
        }  if (rhombre < 10 && rmaquina < 10 ) {

        if (vpiedra == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>";
          rmaquina++;
           document.getElementById("rmaquina").innerHTML = "<i class='icon-rocket'></i> "+rmaquina;
        } else if (vpapel == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>";
           rhombre++;
          document.getElementById("rhombre").innerHTML = "<i class='icon-rocket'></i> "+rhombre;
        } else if (vtijera == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>";
          rmaquina++;
           document.getElementById("rmaquina").innerHTML = "<i class='icon-rocket'></i> "+rmaquina;
        } else if (vlagarto == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/empate.png'/>";
        } else if (vspock == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>";
           rhombre++;
          document.getElementById("rhombre").innerHTML = "<i class='icon-rocket'></i> "+rhombre;
        }  
        } else document.getElementById("resultado").innerHTML = "";   
  }
  function SpockFunction() {
       document.getElementById("usuario").innerHTML = "<img src='img/spock.png'/>";
       document.getElementById("vs").innerHTML = "<img src='img/vs.png'/>";
       function aleatorio(minimo, maximo){
            var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );  
            return numero;
       }
       var opcionMaquina = aleatorio(0,4);
       if (rhombre == 10 && rmaquina < 10 ) {
       document.getElementById("usuario").innerHTML = "";
       document.getElementById("vs").innerHTML = "<img  src='img/ganaste.png'/><br/><i class='icon-thumbsup'></i> Genial, ganaste!!!!<br/><br/><br/><a href='index.html'><i class='icon-paperplane'></i> Jugar de nuevo</a>";
       document.getElementById("maquina").innerHTML = "";
      } else if (rhombre < 10 && rmaquina == 10 ) {
        document.getElementById("usuario").innerHTML = "";
       document.getElementById("vs").innerHTML = "<img  src='img/perdiste.png'/><br/><i class='icon-thumbsdown'></i> Noooo!!! Perdiste.<br/><br/><a href='index.html'><i class='icon-paperplane'></i> Jugar de nuevo</a>";
       document.getElementById("maquina").innerHTML = "";
      } else 
       if (opcionMaquina == 0) {
        document.getElementById("maquina").innerHTML = "<img src='img/piedra.png'/>";
      
       }else if (opcionMaquina == 1) {
        document.getElementById("maquina").innerHTML = "<img src='img/papel.png'/>";
     
       }else if (opcionMaquina == 2) {
        document.getElementById("maquina").innerHTML = "<img src='img/tijera.png'/>";
       
       }else if (opcionMaquina == 3) {
        document.getElementById("maquina").innerHTML = "<img src='img/lagarto.png'/>";
       
       }else if (opcionMaquina == 4) {
        document.getElementById("maquina").innerHTML = "<img src='img/spock.png'/>";
     
        }  if (rhombre < 10 && rmaquina < 10 ) {

        if (vpiedra == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>";
           rhombre++;
          document.getElementById("rhombre").innerHTML = "<i class='icon-rocket'></i> "+rhombre;
        } else if (vpapel == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>";
          rmaquina++;
           document.getElementById("rmaquina").innerHTML = "<i class='icon-rocket'></i> "+rmaquina;
        } else if (vtijera == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>";
           rhombre++;
          document.getElementById("rhombre").innerHTML = "<i class='icon-rocket'></i> "+rhombre;
        } else if (vlagarto == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>";
          rmaquina++;
           document.getElementById("rmaquina").innerHTML = "<i class='icon-rocket'></i> "+rmaquina;
        } else if (vspock == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/empate.png'/>"; 
        }    

        } else document.getElementById("resultado").innerHTML = "";     
  }

 

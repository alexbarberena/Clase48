var sec1,sec2,sec3,sec4,sec5;

var alex;

var ld1,ld2,ld3;

var backgroundImage;

var tienda1,tienda2,tienda3,tienda4;

var p1="¿En que mes se festeja el dia de la bandera?";
   
var p2="¿Cual es el resultado de la multiplicacion: 9x7?";
   
var p3="¿Los valores true y false son valores llamados?";

var r1="";
   
var r2="";
   
var r3="";

var edge;

var comprobación;

var random1,random2,random3,random4;


function preload(){

  backgroundImage=loadImage("images/background.jpg");

}

function setup(){
    createCanvas(displayWidth,displayHeight);


    //Creando los sprites de los personajes

    alex=createSprite(715,815,30,30);
    alex.shapeColor="white";

    ld1=createSprite(displayWidth-100,315,30,30);
    ld1.shapeColor="red";
    ld2=createSprite(300,365,30,30);
    ld2.shapeColor="red";
    ld3=createSprite(835,380,30,30);
    ld3.shapeColor="red";

    tienda1=createSprite(285,675,230,190);
    tienda1.visible=false;

    tienda2=createSprite(500,230,230,190);
    tienda2.visible=false;

    tienda3=createSprite(1180,670,230,190);
    tienda3.visible=false;

    tienda4=createSprite(1095,390,230,190);
    tienda4.visible=false;


    random1=Math.round(random(1,4));
    random2=Math.round(random(1,4));
    random3=Math.round(random(1,4));
    random4=Math.round(random(1,4));


   edge =createEdgeSprites();

}

function draw(){  
    background(backgroundImage);
     console.log("y:" + alex.y);
     console.log("x:" + alex.x);

     
     if(keyDown(UP_ARROW)){

        alex.y=alex.y-5;

     }

     if(keyDown(DOWN_ARROW)){

        alex.y=alex.y+5;

     }

     if(keyDown(RIGHT_ARROW)){

        alex.x=alex.x+5;

     }

     if(keyDown(LEFT_ARROW)){

        alex.x=alex.x-5;

     }
     
     
     
     if(ld1.y<100){

        ld1.changeImage("");
     }
     else{

        ld1.changeImage("")
     }

     if(ld2.y<100){

        ld2.changeImage("");
     }
     else{

        ld2.changeImage("")
     }
     
     
     if(ld3.y<100){

        ld3.changeImage("");
     }
     else{

        ld3.changeImage("")
     }
    
    
     if(alex.y<100){

        alex.changeImage("");
     }  
     else{

        alex.changeImage("")
     }
     
     //alex.collide(edge[4]); 
     //Valida respuestas
     if(r1==="febrero"){

       text("Encontraste el diamante!",285,675);

     }
     if(r2==="63"){

      text("Encontraste el diamante!",285,675);

    }
    if(r3==="booleanos"){

      text("Encontraste el diamante!",285,675);

    }


     
     ld1.velocityX=+2;
     ld1.velocityY=-5;

     ld2.velocityX=-2;
     ld2.velocityY=+4;

     ld3.velocityX=+5;
     ld3.velocityY=-2;


     drawSprites();
}
function questions(){

   switch(random2){

      case 1:p1=""
      break; 
      
      case 2:p2=""
      break;
     
      case 3:p3=""
      break;
  
      case 4:r=""
      break;
  
      default:break
     }



}
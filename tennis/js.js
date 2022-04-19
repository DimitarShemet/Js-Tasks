let racketWidth=10
let racketHeight=70
let ballDiameter=30
let ballRadius=15
let speedRacket1=0
let speedRacket2=0
let positionRacket1=50
let positionRacket2=50
let positionTopBall=180
let positionLeftBall=270
let topSpeedBall=0
let leftSpeedBall=0

let score1=0
let score2=0

 let courtHeight=document.getElementById('court').offsetHeight
 let courtWidth=document.getElementById('court').offsetWidth

document.addEventListener("keydown",getKey,false)
function getKey(key){
   if (key.keyCode==17){
      speedRacket1=10
   }
   if (key.keyCode==16){
      
       speedRacket1=-10
    }

if (key.keyCode==40){
   speedRacket2=10
}
if (key.keyCode==38){
   
    speedRacket2=-10
 }

}
document.body.addEventListener("keyup",keyStop,false)
function keyStop(key){

if (key.keyCode==16){
   speedRacket1=0
  
}
if(key.keyCode=17){
speedRacket1=0
}
if(key.keyCode=38){
    speedRacket2=0
    }
 if(key.keyCode=40){
   speedRacket2=0
        }
}
function start(){
   // Ставим мяч в центр корта//
    positionTopBall=180
    positionLeftBall=270
   let route
   if(Math.random()<0.5){
   route=1
   }
   else
    route=-1
    topSpeedBall=route*(Math.random()*5+1)
    leftSpeedBall=route*(Math.random()*5+1)
}


 setInterval(movement,1000/60)
function movement(){

   positionRacket1+=speedRacket1
    positionRacket2+=speedRacket2
    if(positionRacket1<=1)
    positionRacket1=1
    if(positionRacket2<=1)
    positionRacket2=1
    if(positionRacket1>=courtHeight-racketHeight)
    positionRacket1=courtHeight-racketHeight
    if(positionRacket2>=courtHeight-racketHeight)
    positionRacket2=courtHeight-racketHeight
    

    positionLeftBall+=leftSpeedBall
    positionTopBall+=topSpeedBall
    document.getElementById('racket1').style.top=positionRacket1+"px"
    document.getElementById('racket2').style.top=positionRacket2+"px"
    document.getElementById('ball').style.left=positionLeftBall+"px"
    document.getElementById('ball').style.top=positionTopBall+"px"
    if(positionTopBall<=5)
    topSpeedBall=-topSpeedBall
    if(positionTopBall>=courtHeight-ballDiameter)
    topSpeedBall=-topSpeedBall
  
    // Основная логика игры//

    // Для левой стенки корта 
    if(positionLeftBall<=racketWidth){
       if(positionTopBall>positionRacket1 && positionTopBall<positionRacket1+racketHeight)
       leftSpeedBall=-leftSpeedBall
       
         if(positionLeftBall<0){
            console.log(score1=score1+1)
            leftSpeedBall=0
            topSpeedBall=0
            positionLeftBall=0
         }
            }
         

    // Для правой  стенки корта 
    if(positionLeftBall>=courtWidth-ballDiameter-racketWidth){
      if(positionTopBall>positionRacket2 && positionTopBall<positionRacket2+racketHeight)
      leftSpeedBall=-leftSpeedBall
      if (positionLeftBall>courtWidth){
     console.log(score2=score2+1)
     leftSpeedBall=0
     topSpeedBall=0
     positionLeftBall=courtWidth-ballDiameter
      }
      }
      document.getElementById('score1').innerHTML=score1+":"
      document.getElementById('score2').innerHTML=score2
   }



    
x = 0;
y = 0;
screen_width=0;
screen_height=0;
apple=""
speak_data="";
to_number="";


draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
function preload(){
  apple=loadImage("apple.png")
}
function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
  content = event.results[0][0].transcript;
  console.log(event);
to_number= Number(content);
console.log(to_number)
if(Number.isInteger(to_number))
{
  draw_apple="set";
  console.log("Congrats")
}
else{
  document.getElementById("status").innerHTML = "The speech has been not recognized: " 
};
document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screen_width=window.innerWidth;
 screen_height=window.innerHeight;
 canvas= createCanvas(screen_width, screen_width-150);
 canvas.position(0,150);
}

function draw() {
 
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    for(i=1;i<=to_number;i++){
      x= Math.floor(Math.random()*screen_width)
      y= Math.floor(Math.random()*screen_height)
      image(apple,x,y,50,50)
      console.log(x,y)
    }
  }
  speak();
}
function speak(){
  
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";
}


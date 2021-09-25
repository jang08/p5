let cam;
let cls; 
function preload(){
  cls = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/r90fTlp_uw/"+"model.json")
  print(cls)
}





function setup() {
  createCanvas(400,400);
  cam = createCapture(VIDEO);
  cam.size=(400,400)
  cam.hide()

  cls.classify(cam, result)
}

function result(e,r){
  if(r[0].label=="1(오른쪽)"){
    x=x+2
  }
  if(r[0].label=="2(왼쪽)"){
    x=x-2
  }
  print(r[0].label)
  cls.classify(cam, result)
}
x=200
y=200
w=50
s=5
function draw() {
  background(50)
  image(cam,0,0,400,400)
  rect(x,y,w,w)
  if(keyIsDown(37)){
    x=x-s
  }
  if(keyIsDown(39)){
    x=x+s
  }
  if(keyIsDown(38)){
    y=y-s
  }
  if(keyIsDown(40)){
    y=y+s
  }
}

function keyPressed(){
  
  if(keyCode==37){
    x=x-1
  }
  if(keyCode==39){
    x=x+1
  }
}
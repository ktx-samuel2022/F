var cor = '';
var tamanho = 30;
var narizImg;
function preload(){
    narizImg = loadImage("n.png")
}
function setup(){
    canvas = createCanvas(500, 400)
    canvas.position(windowWidth/2-width/2,300)
    video = createCapture(VIDEO)
    video.hide()
    video.size(500,400)

    sas = ml5.poseNet(video, modelReady)
    sas.on("pose", gotPose)
    imageMode(CENTER);
}
var narizX = 0 ;
var narizY = 0 ; 

function gotPose(result){
    if(result.length > 0){
        narizX = result[0].pose.nose.x;
        narizY = result[0].pose.nose.y;
    }
}
function modelReady(){
    console.log("Sas está pronto! :D")
}
function draw(){
    background("lightgreen")
    tint(cor)
    image(video,width/2,height/2,500,400)
    fill("blue")
    ellipse(10, 10, 20, 20)
    fill("green")
    ellipse(490, 390 ,20, 20)
    fill("lightblue")
    ellipse(490,10, 20,20 )
    fill("lightgreen")
    ellipse(10,390,20,20)
    image(narizImg, narizX , narizY, tamanho,tamanho)
   
}
function filtrar(){
    cor = document.getElementById("cor").value

}
 function apply(){
    tamanho = document.getElementById("size").value;
   
 }
function tirarFoto(){
 save("eu.png")
}
function preload(){

}
function setup(){
canvas=createCanvas(650,500);
canvas.position(250,250);
video=createCapture(VIDEO);
video.hide();
}
function draw(){
image(video,0,0,650,500);

}
function snapshot(){
save('image.png');
}
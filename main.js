function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    rect(30, 20, 20, 500);
describe('green rect with black outline in mid-right of canvas');
rect(40, 20, 20, 500);
    
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}


function take_snapshot() {
    save('JJ.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}
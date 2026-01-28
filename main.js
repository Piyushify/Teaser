console.log('JS Connected');

const player = document.getElementById("player");
const canvas = document.getElementById("canvas");

function up() {
  let y = player.offsetTop;
  if (y>10) {
  player.style.top = (y - 10) + "px";
  }
}

function left() {
  let x = player.offsetLeft;
  if(x>10){
  player.style.left = (x - 10) + "px";
  }
}

function right() {
  let x = player.offsetLeft;
  if(x<canvas.offsetWidth - 50)
  {
  player.style.left = (x + 10) + "px";
  }
}

function down() {
  let y = player.offsetTop;
  if(y<canvas.offsetWidth - 50)
  player.style.top = (y + 10) + "px";
}
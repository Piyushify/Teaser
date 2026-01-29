console.log('JS Connected');

const player = document.getElementById("player");
const canvas = document.getElementById("canvas");

function up() {
  let y = player.offsetTop;
  if (y>10) {
  player.style.top = (y - player.offsetHeight) + "px";
  }
}

function left() {
  let x = player.offsetLeft;
  if(x>10){
  player.style.left = (x - player.offsetHeight) + "px";
  }
}

function right() {
  let x = player.offsetLeft;
  if(x<canvas.offsetWidth)
  {
  player.style.left = (x + player.offsetHeight) + "px";
  }
}

function down() {
  let y = player.offsetTop;
  if(y<canvas.offsetWidth)
  player.style.top = (y + player.offsetHeight) + "px";
}
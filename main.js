console.log('JS Connected');
function moveRight(){
  car = document.getElementById("car");
  current = parseInt(car.style.left) || 0;
  car.style.left = current + 100 + "px";
}
function moveLeft(){
  car = document.getElementById("car");
  current = parseInt(car.style.left) || 0;
  car.style.left = current - 100 + "px";
}
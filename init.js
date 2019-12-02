const dabin = new Hero("dabin", "105px", "70px", "35px");

dabin.createHero();

window.addEventListener("keydown", event => {
  if (event.keyCode === 37) {
    dabin.moveLeft();
  } else if (event.keyCode === 39) {
    dabin.moveRight();
  }
});
window.addEventListener("keyup", event => {
  dabin.moveFront();
});

setInterval(() => {
  new Enemy(0, 0, 45);
}, 2000);

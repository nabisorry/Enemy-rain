const 다빈 = new Hero("다빈", "105px", "70px", "35px");

다빈.createHero();

window.addEventListener("keydown", event => {
  if (event.keyCode === 37) {
    다빈.moveLeft();
  } else if (event.keyCode === 39) {
    다빈.moveRight();
  }
});

window.addEventListener("keyup", event => {
  다빈.moveFront();
});

setInterval(() => {
  new Enemy(0, 0, 45);
}, 2000);

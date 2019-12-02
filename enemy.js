class Enemy {
  constructor(enemyTop, enemyLive, enemyDeath) {
    this.class = "enemy";
    this.enemy = document.createElement("div");
    this.top = enemyTop;
    this.randomLeft = Math.floor(Math.random() * 76) * 10;
    this.live = enemyLive;
    this.death = enemyDeath;
    this.enemyCreate(); //실행
    this.enemyRain(); //실행
  }
  enemyCreate() {
    const bg = document.getElementById("bg");
    this.enemy.className = this.class;
    this.enemy.style.backgroundPosition = this.live + "px";
    this.enemy.style.left = this.randomLeft + "px";
    bg.appendChild(this.enemy);
  }
  //enemy 내리기
  enemyRain() {
    const bg = document.getElementById("bg");
    const life = setInterval(() => {
      this.top += 10;
      this.enemy.style.top = this.top + "px";

      console.log(this.randomLeft);
      if (this.top >= 545 && dabin.left - 17.5 <= this.randomLeft && dabin.left + 17.5 >= this.randomLeft) {
        clearInterval(life);
        this.enemy.style.backgroundPosition = this.death + "px";
        setTimeout(() => {
          bg.removeChild(this.enemy);
        }, 1000);
      } else if (this.top > 546) {
        clearInterval(life);

        bg.removeChild(this.enemy);
      }
    }, 100);
  }
}

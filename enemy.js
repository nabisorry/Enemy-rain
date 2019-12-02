// class Enemy {
//   constructor() {
//     this.class = "enemy";
//     this.bgPosition = 0;
//     this.top = 0;
//     this.left = 0;
//     this.randomPosition = Math.floor(Math.random() * 756);
//     this.createEnemy();
//   }
//   createEnemy() {
//     const enemy = document.createElement("div");
//     enemy.className = this.class;
//     enemy.style.backgroundPosition = this.bgPosition;
//     enemy.style.left = this.randomPosition + "px";
//     document.getElementById("bg").appendChild(enemy);
//   }
// }

// 800 600

class Enemy {
  constructor() {
    this.class = "enemy";
    this.bgPosition = 0;
    this.top = 0;
    this.left = 0;
    this.enemyCount = 0;
  }
  createEnemy() {
    if (this.enemyCount < 10) {
      const bg = document.getElementById("bg");
      const enemy = document.createElement("div");
      const randomPosition = Math.floor(Math.random() * 756);
      enemy.className = this.class;
      enemy.style.backgroundPosition = this.bgPosition + "px";
      enemy.style.left = randomPosition + "px";
      bg.appendChild(enemy);
      this.enemyCount++;
    }
  }
  enemyRain() {
    for (let i = 0; i < this.enemyCount; i++) {
      const enemy = document.getElementsByClassName(this.class)[i];
      let val = enemy.style.top;
      val = Number(val.split("px")[0]) + 20 + "px";

      if (Number(val.split("px")[0]) >= 546) {
        document.getElementById("bg").removeChild(enemy);
        this.enemyCount--;
        console.log(생성.left);
      }
      enemy.style.top = val;
    }
  }
}

class Hero {
  constructor() {
    this.heroWidth = 35;
    this.heroHeight = 54;
    this.heroZ_index = 10;
    this.position = "absolute";
    this.top = 546;
    this.left = 50;
  }
  heroCreate() {
    const bg = document.querySelector("#bg");
    const hero = document.createElement("div");
    hero.id = "hero";
    hero.style.width = this.heroWidth + "px";
    hero.style.height = this.heroHeight + "px";
    hero.style.position = this.position;
    hero.style.top = this.top + "px";
    hero.style.left = this.left + "%";
    bg.appendChild(hero);
  }
  heroFrontMove() {
    const hero = document.getElementById("hero");
    hero.style.backgroundPosition = "105" + "px";
  }
  heroLeftMove() {
    const hero = document.getElementById("hero");
    hero.style.backgroundPosition = "70px";
    if (this.left <= 0) {
      this.left = 98;
      hero.style.left = this.left + "%";
    }
    this.left -= 2;
    hero.style.left = this.left + "%";
  }
  heroRightMove() {
    const hero = document.getElementById("hero");
    hero.style.backgroundPosition = "35px";
    if (this.left >= 96) {
      this.left = -2;
      hero.style.left = this.left + "%";
    }
    this.left += 2;
    hero.style.left = this.left + "%";
  }
}

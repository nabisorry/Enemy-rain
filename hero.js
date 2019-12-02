class Hero {
  constructor(id, frontHero, leftHero, rightHero) {
    this.heroId = id;
    this.top = 546;
    this.left = 400;
    this.positionFront = frontHero;
    this.positionLeft = leftHero;
    this.positionRight = rightHero;
  }

  createHero() {
    const bg = document.getElementById("bg");
    this.hero = document.createElement("div");
    this.hero.id = "hero";
    this.hero.style.top = this.top + "px";
    this.hero.style.left = this.left + "px";
    this.hero.style.backgroundPosition = this.positionFront;
    bg.appendChild(this.hero);
  }

  moveLeft() {
    this.hero.style.backgroundPosition = this.positionLeft;
    this.left -= 10;
    if (this.left < 0) {
      this.left = 770;
    }
    this.hero.style.left = this.left + "px";
  }

  moveRight() {
    this.hero.style.backgroundPosition = this.positionRight;
    this.left += 10;
    if (this.left > 770) {
      this.left = 0;
    }
    this.hero.style.left = this.left + "px";
  }
  moveFront() {
    this.hero.style.backgroundPosition = this.positionFront;
  }
}


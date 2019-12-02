// 왼쪽 37 오른쪽 39
// const bg = document.getElementById("bg");

// const hero = document.getElementById("hero");
// let heroAbscissa = 50;

// window.addEventListener("keydown", event => {
//   const heroDirection = event.keyCode;
//   if (heroDirection === 37) {
//     if (heroAbscissa >= 2) {
//       heroAbscissa = heroAbscissa - 2;
//       console.log(heroAbscissa);
//       hero.style.backgroundPosition = "70px";
//       hero.style.left = `${heroAbscissa}%`;
//     } else if (heroAbscissa < 2) {
//       heroAbscissa = 96;
//       hero.style.left = `${heroAbscissa}%`;
//     }
//   } else if (heroDirection === 39) {
//     if (heroAbscissa <= 94) {
//       heroAbscissa = heroAbscissa + 2;
//       hero.style.backgroundPosition = "35px";
//       hero.style.left = `${heroAbscissa}%`;
//     } else if (heroAbscissa > 94) {
//       heroAbscissa = 0;
//       hero.style.left = `${heroAbscissa}%`;
//     }
//   }
// });
// //적생성
// let 적인덱스 = 0;
// setInterval(() => {
//   const 적 = bg.appendChild(document.createElement("div"));
//   적.className = "enemy";
//   const 랜덤위치 = Math.floor(Math.random() * 101);
//   document.getElementsByClassName("enemy")[적인덱스].style.left = `${랜덤위치}%`;
//   적인덱스++;
// }, 5000);

// //적 내려오기
// let 적내려오기위치 = 0;
// setInterval(() => {
//   //   for (let i = 0; i < 적인덱스; i++) {
//   //     const 적위치 = document.getElementsByClassName("enemy")[i];
//   //     적위치.style.top = `%`;
//   //   }
//   const 적위치 = document.getElementsByClassName("enemy")[0];
//   const 적정보 = window.getComputedStyle(적위치);
//   console.log(적위치.style.top);
// }, 1000);

const 생성 = new Hero();
const 시작 = new Enemy();
생성.heroCreate();

window.addEventListener("keyup", event => {
  생성.heroFrontMove();
});

window.addEventListener("keydown", event => {
  if (event.keyCode === 37) {
    생성.heroLeftMove();
  } else if (event.keyCode === 39) {
    생성.heroRightMove();
  }
});

setInterval(() => {
  시작.createEnemy();
}, 300);

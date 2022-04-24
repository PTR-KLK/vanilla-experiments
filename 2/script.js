const squareElement = document.querySelector(".square");
const headerBar = document.querySelector("#header-bar");

let speed = +getComputedStyle(squareElement).animationDuration.slice(0, -1);

const changeAnimationSpeed = (speed) => {
  squareElement.style.animationDuration = speed;
};

headerBar.addEventListener("click", (event) => {
  const targetId = event.target.id;

  if (targetId === "speed-up") {
    if (speed > 0) {
      changeAnimationSpeed(`${speed--}s`);
    }
  }

  if (targetId === "speed-down") {
    changeAnimationSpeed(`${speed++}s`);
  }

  if (targetId === "speed-reset") {
    changeAnimationSpeed(null);
  }
});

const btn = document.getElementById("btn");
const colors = [
  "green",
  "white",
  "yellow",
  "red",
  "purple",
  "indigo",
  "violet",
];

function getRandomColor() {
  const colorIndex = 0 + Math.round(Math.random() * (colors.length - 1));
  const randomColor = colors[colorIndex];
  btn.style = `background-color: ${randomColor}`;
}

btn.addEventListener("click", () => {
  getRandomColor();
});

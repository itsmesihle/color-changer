const colors = ["green", "white", "yellow", "red", "purple"];

function getRandomColor() {
  const colorIndex = 0 + Math.round(Math.random() * (colors.length - 1));
  console.log(colorIndex);
  const randomColor = colors[colorIndex];
  console.log(randomColor);
  alert(randomColor);
}

getRandomColor();

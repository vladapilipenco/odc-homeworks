let colorContainer = document.getElementById("container");
let colorText = document.getElementById("colorText");
let pickButton = document.getElementById("pick");

const toHex = (color) => {
  const hex = color.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

const rgbToHex = (r, g, b) => {
  return "#" + toHex(r) + toHex(g) + toHex(b);
};

pickButton.addEventListener("click", function () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let colorRGB = `rgb(${r}, ${g}, ${b})`;
  let colorHEX = rgbToHex(r, g, b);
  colorContainer.style.backgroundColor = colorRGB;
  colorText.innerHTML = ` ${colorHEX} | ${colorRGB} `;
});

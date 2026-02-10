const snaarLowE = document.getElementById("snaar-low-e");
const snaarA = document.getElementById("snaar-a");
const snaarD = document.getElementById("snaar-d");
const snaarG = document.getElementById("snaar-g");
const snaarB = document.getElementById("snaar-b");
const snaarHighE = document.getElementById("snaar-high-e");

const snaarLowESound = document.getElementById("snaar-low-e-sound");
const snaarASound = document.getElementById("snaar-a-sound");
const snaarDSound = document.getElementById("snaar-d-sound");
const snaarGSound = document.getElementById("snaar-g-sound");
const snaarBSound = document.getElementById("snaar-b-sound");
const snaarHighESound = document.getElementById("snaar-high-e-sound");

snaarLowE.addEventListener("mouseover", () => {
  snaarLowESound.currentTime = 0;
  snaarLowESound.play();
});

snaarA.addEventListener("mouseover", () => {
  snaarASound.currentTime = 0;
  snaarASound.play();
});

snaarD.addEventListener("mouseover", () => {
  snaarDSound.currentTime = 0;
  snaarDSound.play();
});

snaarG.addEventListener("mouseover", () => {
  snaarGSound.currentTime = 0;
  snaarGSound.play();
});

snaarB.addEventListener("mouseover", () => {
  snaarBSound.currentTime = 0;
  snaarBSound.play();
});

snaarHighE.addEventListener("mouseover", () => {
  snaarHighESound.currentTime = 0;
  snaarHighESound.play();
});

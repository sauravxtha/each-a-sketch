const containerEl = document.querySelector(".container");
const gridSizeEl = document.querySelector("#grid-size");
const gridColorEl = document.querySelector("#sketch-color");
const bgColorEl = document.querySelector("#bg-color");
const resetBtnEl = document.querySelector("#reset-btn");

const createGrid = (width) => {
  containerEl.innerHTML = "";
  for (let i = 0; i < width * width; i++) {
    const divEl = document.createElement("div");
    divEl.style.width = 960 / Math.floor(width) + "px";
    divEl.style.height = 960 / Math.floor(width) + "px";
    containerEl.appendChild(divEl);
    divEl.addEventListener("mouseover", () => {
      divEl.style.backgroundColor = gridColorEl.value;
    });
  }
};

resetBtnEl.addEventListener("click", () => {
  const allGridDivsEl = document.querySelectorAll(".container div");
  allGridDivsEl.forEach((singleDiv) => {
    singleDiv.style.backgroundColor = bgColorEl.value;
  });
});

bgColorEl.addEventListener("change", () => {
  containerEl.style.backgroundColor = bgColorEl.value;
});

gridSizeEl.addEventListener("change", () => {
  createGrid(gridSizeEl.value);
});

createGrid(gridSizeEl.value);

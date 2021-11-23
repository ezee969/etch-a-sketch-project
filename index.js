const container = document.getElementById("gridContainer");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover',(e)=>{
        e.target.style.background="black"
    })
    container.appendChild(cell).className = "grid-item";
  };
};

const clearButton = document.getElementById("buttonClear");
clearButton.addEventListener('click', () => {
  cuadrados = document.querySelectorAll(".grid-item");
  for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.background = "white";}
});
    
makeRows(16, 16);

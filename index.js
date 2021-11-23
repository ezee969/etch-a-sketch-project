const container = document.getElementById("gridContainer");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('click',(e)=>{
        e.target.style.background="black"
    })
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

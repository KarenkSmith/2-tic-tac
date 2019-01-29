
const winCombo = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
 ];
const players = ["X", "O"];
const clicks = document.querySelector("table").addEventListener("click", cellsPlace);
var count = 0;
var end = true;

var cells = document.querySelectorAll("td");
console.log(cells);

function cellsPlace (evt) {
    if (end === true) {
        cells[evt.target.id].textContent = players[count % 2];
        count++;
        winner();
        console.log(evt.target.id)
    }
}
function winner() {
    for (var i =0; i < winCombo.length; i++) {
        if (cells[winCombo[i][0]].textContent !== "" && cells[winCombo[i][0]].textContent === cells[winCombo[i][1]].textContent && cells[winCombo[i][0]].textContent === cells[winCombo[i][2]].textContent) {
            alert ("you win!");
        end = false;
        }
    }
}
function endGame() {
    end = true;
    cells.forEach(function(cell) {
        cell.textContent = "";
    });
}
// Get the table element
const square = document.getElementById("square");

// Function to create the square
function createSquare() {
  for (let i = 1; i <= 9; i++) {
    const row = square.insertRow();
    for (let j = 1; j <= 9; j++) {
      const cell = row.insertCell();
      cell.innerHTML = i * j;
    }
  }
}

// Call the function to create the square
createSquare();

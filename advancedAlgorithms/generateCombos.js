function generateCombinations(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    for (let rowComb = 0; rowComb < Math.pow(2, numRows); rowComb++) {
        for (let colComb = 0; colComb < Math.pow(2, numCols); colComb++) {
            const flippedMatrix = applyFlips(matrix, rowComb, colComb);
            console.log(flippedMatrix, rowComb);
        }
    }
}

function applyFlips(matrix, rowComb, colComb) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    const flippedMatrix = [];``

    for (let i = 0; i < numRows; i++) {
        flippedMatrix[i] = [];
        for (let j = 0; j < numCols; j++) {
            // Apply row flip if the corresponding bit is set in rowComb
            const rowIndex = (rowComb & (1 << i)) ? (numRows - 1 - i) : i;
            // Apply column flip if the corresponding bit is set in colComb
            const colIndex = (colComb & (1 << j)) ? (numCols - 1 - j) : j;
            flippedMatrix[i][j] = matrix[rowIndex][colIndex];
        }
    }

    return flippedMatrix;
}

// Example: Generate combinations for a 2x2 matrix
const originalMatrix = [
    [1, 2],
    [3, 4]
];

generateCombinations(originalMatrix);
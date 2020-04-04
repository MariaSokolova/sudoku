module.exports = function solveSudoku(matrix) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (matrix[i][j] === 0) {
                for (let number = 1; number <= 9; number++) {
                    if(checkNumber(matrix, i, j, number)) {
                        matrix[i][j] = number;
                        const result = solveSudoku(matrix);
                        if(result !== false) {
                            return result;
                        }
                        matrix[i][j] = 0;
                    }
                }
                return false;
            }
        }
    }
    return matrix;
};

const checkNumber = function (matrix, row, column, number) {
    for (let i = 0; i < 9; i++) {
        const matrixRow = matrix[row];
        if(matrixRow[i] === number) {
            return false;
        }
    }

    for (let i = 0; i < 9; i++) {
        if(matrix[i][column] === number) {
            return false;
        }
    }

    const boxRowStart = row - row % 3;
    const boxColStart = column - column % 3;
    for (let i = boxRowStart; i < boxRowStart + 3; i++) {
        for (let j = boxColStart; j < boxColStart + 3; j++) {
            if(matrix[i][j] === number) {
                return false;
            }
        }
    }
    return true;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {

    let minutes = 0;
    let freshOranges = 0;
    let rottenOranges = [];
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {

            if (grid[i][j] === 1) {
                freshOranges++;
            } else if (grid[i][j] === 2) {
                rottenOranges.push([i, j]);
            }
        }
    }

    while (freshOranges > 0 && rottenOranges.length > 0) {

        let newRottenOranges = [];

        for (let rottenOrange of rottenOranges) {

            for (let direction of directions) {

                let x = rottenOrange[0] + direction[0];
                let y = rottenOrange[1] + direction[1];

                if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] === 1) {

                    grid[x][y] = 2;
                    freshOranges--;
                    newRottenOranges.push([x, y]);
                }
            }
        }

        rottenOranges = newRottenOranges;
        minutes++;
    }

    return freshOranges === 0 ? minutes : -1;
};
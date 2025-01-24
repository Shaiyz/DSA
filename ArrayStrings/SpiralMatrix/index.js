function spiralMatrix(matrix){
    let m = matrix.length-1 // right boundary
    let n = matrix[0].length-1  // bottom boundary
    let i= 0 // top boundary
    let j=0 // left boundary
    let result = []
    while(i<=n && j<=m){
        // Traverse from left to right along the top row
        for (let col = j; col <= n; col++) {
            result.push(matrix[i][col]);
        }
        i++; // Move the top boundary down

        // Traverse from top to bottom along the right column
        for (let row = i; row <= m; row++) {
            result.push(matrix[row][n]);
        }
        n--; // Move the right boundary left

        if (i <= m) {
            // Traverse from right to left along the bottom row
            for (let col = n; col >= j; col--) {
                result.push(matrix[m][col]);
            }
            m--; // Move the bottom boundary up
        }

        if (j <= n) {
            // Traverse from bottom to top along the left column
            for (let row = m; row >= i; row--) {
                result.push(matrix[row][j]);
            }
            j++; // Move the left boundary right
        }
    }

    return result
}

console.log(spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[1,2,3,4]]))

// | 1 | 2 | 3 | 4 |
// | 5 | 6 | 7 | 8 |
// | 9 | 10| 11| 12|
// | 1 | 2 | 3 | 4 |

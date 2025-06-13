const countInMatrix = (matrix, midVal) => {
  const n = matrix.length;           
  let count = 0;
  let row = 0;                        
  let col = n - 1;                   
  while (row < n && col >= 0) {
    if (midVal >= matrix[row][col]) { 
      count += col + 1;               
      row++;                          
    } else {                          
      col--;                          
    }
  }
  return count;
};

const kthSmallest = (matrix, k) => {
  const n = matrix.length;
  let low = matrix[0][0];
  let high = matrix[n - 1][n - 1];
  while (low <= high) {
    let midVal = low + ((high - low) >>> 1);   
    let count = countInMatrix(matrix, midVal); 
    if (count < k) {
      low = midVal + 1;
    } else {
      high = midVal - 1;
    }
  }
  return low;
};


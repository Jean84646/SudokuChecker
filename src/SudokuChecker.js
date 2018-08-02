export function sudokuChecker(sudokuArray){
  const numbers = [1,2,3,4,5,6,7,8,9];
  let row;
  let n = 0;

  // // test for row 2d array
  // for(let i = 0; i < sudokuArray.length; i++) {
  //   row = sudokuArray[i].slice();
  //   if(row.sort().join("") != numbers.join("")) {
  //     return false;
  //   }
  // }

  // // test for column 2d array
  // for (let i = 0; i < sudokuArray.length; i++) {
  //   for (let j = 0; j < sudokuArray.length; j++) {
  //     row[j] = sudokuArray[j][i];
  //   }
  //   if(row.sort().join("") != numbers.join("")) {
  //     return false;
  //   }
  // }

  // test for row 1d array
  for (let i = 0; i < sudokuArray.length; i+= 9) {
    row = sudokuArray.slice(i,i+9);
    if(row.sort().join("") != numbers.join("")){
      return false;
    }
  }

  //test for column 1d array
  for (let i = 0; i < 9; i++) {
    row = [];
    for (let j = i; j < sudokuArray.length; j+= 9)
    row.push(sudokuArray[j]);
    if(row.sort().join("") != numbers.join("")){
      return false;
    }
  }

  //test for block
  for (let i = 0; i < 9; i += 3) {
    for (let j = i; j < sudokuArray.length; j += 27) {
      row = [];
      row = row.concat(sudokuArray.slice(j, j+3)).concat(sudokuArray.slice(j+9, j+12)).concat(sudokuArray.slice(j+18, j+21));
      console.log(row);
      if(row.sort().join("") != numbers.join("")){
        return false;
      }
    }
  }
  // // test for block, 3d array
  // for (let i = 0; i < sudokuArray.length; i++) {
  //   n = 0
  //   for (let j = 0; j < 3; j++) {
  //     for (let k = 0; k < 3; k++) {
  //       row[n] = sudokuArray[i][j][k];
  //       n++;
  //     }
  //   }
  //   if(row.sort().join("") != numbers.join("")){
  //     return false;
  //   }
  // }

  return true;
}

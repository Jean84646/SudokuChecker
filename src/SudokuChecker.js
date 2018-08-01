export function sudokuChecker(sudokuArray){
  const numbers = [1,2,3,4,5,6,7,8,9];
  let row = new Array(9);
  let n = 0;

  // // test for row
  // for(let i = 0; i < sudokuArray.length; i++) {
  //   row = sudokuArray[i].slice();
  //   if(row.sort().join("") != numbers.join("")) {
  //     return false;
  //   }
  // }

  // // test for column
  // for (let i = 0; i < sudokuArray.length; i++) {
  //   for (let j = 0; j < sudokuArray.length; j++) {
  //     row[j] = sudokuArray[j][i];
  //   }
  //   if(row.sort().join("") != numbers.join("")) {
  //     return false;
  //   }
  // }

  // test for column
  for (let i = 0; i < 9; i++) {
    n = 0
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        row[n] = sudokuArray[i][j][k];
        n++;
      }
    }
    if(row.sort().join("") != numbers.join("")){
      return false;
    }
  }

  // test for block
  for (let i = 0; i < sudokuArray.length; i++) {
    n = 0
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        row[n] = sudokuArray[i][j][k];
        n++;
      }
    }
    if(row.sort().join("") != numbers.join("")){
      return false;
    }
  }

  return true;
}

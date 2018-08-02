export class SudokuSolver {
  constructor(sudokuBoard){
    this.sudokuArray = sudokuBoard;
  }

  // check to see if there is a conflict, return false if value already exist.
  checkValue(array, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return false;
      } else {
        return true;
      }
    }
  }

  getRow(rowNumber) {
    return this.sudokuArray.slice((rowNumber-1)*9, ((rowNumber-1)*9)+9);
  }

  getColumn(colNumber) {
    let row = [];
    for (let i = (colNumber - 1); i < this.sudokuArray.length; i+=9) {
      row.push(this.sudokuArray[i]);
    }
    return row;
  }

  getBlock(jenny) {
    let row = [];
    let rowIndex = 0;
    jenny--;
    if (jenny < 6 && jenny > 2) {
      rowIndex = 1;
      jenny-=3;
    } else if (jenny < 9 && jenny > 5) {
      rowIndex = 2;
      jenny-=6;
    }
    row = row.concat(this.sudokuArray.slice((jenny*3) + (rowIndex*27), (jenny*3)+ (rowIndex*27)+3)).concat(this.sudokuArray.slice((jenny*3)+ (rowIndex*27)+9, (jenny*3)+ (rowIndex*27)+12)).concat(this.sudokuArray.slice((jenny*3)+ (rowIndex*27)+18, (jenny*3)+ (rowIndex*27)+21));
    return row;
  }

  sudokuChecker() {
    const numbers = [1,2,3,4,5,6,7,8,9];
    let row;

    // test for row 1d array
    for (let i = 1; i <= 9; i++) {
      if(this.getRow(i).sort().join("") != numbers.join("")) {
        return false;
      }
    }

    //test for column 1d array
    for (let i = 1; i < 9; i++) {
      if(this.getColumn(i).sort().join("") != numbers.join("")) {
        return false;
      }
    }

    //test for block
    for (let i = 1; i < 9; i++) {
      if(this.getBlock(i).sort().join("") != numbers.join("")) {
        return false;
      }
    }
    return true;
  }

  saveEmptyLocation() {
    let storedLocations = [];
    for (let i =0; i < this.sudokuArray.length; i++) {
      if(this.sudokuArray[i] === 0){
        storedLocations.push(i);
      }
    }
    return storedLocations;
  }
}

// Other ways to check

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

  // // test for block, 3d array
  // let n = 0;
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

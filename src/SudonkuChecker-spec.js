import { sudokuChecker } from './../src/sudokuChecker.js';
import { arraysEqual } from './../src/sudokuChecker.js';

describe('SudokuChecker', function() {
  it('should check all row and column to be 1-9', function(){
    var board = [[1,2,3,4,5,6,7,8,9],
                 [2,3,4,5,6,7,8,9,1],
                 [3,4,5,6,7,8,9,1,2],
                 [4,5,6,7,8,9,1,2,3],
                 [5,6,7,8,9,1,2,3,4],
                 [6,7,8,9,1,2,3,4,5],
                 [7,8,9,1,2,3,4,5,6],
                 [8,9,1,2,3,4,5,6,7],
                 [9,1,2,3,4,5,6,7,8]];
    expect(sudokuChecker(board)).toEqual(true);
  });

  it('should fail since one row is not 1-9', function(){
    var board = [[1,2,3,4,5,6,7,8,9],
                 [2,3,4,5,6,7,8,7,1],
                 [3,4,5,6,7,8,6,1,2],
                 [4,5,6,7,8,5,1,2,3],
                 [5,6,7,8,4,1,2,3,4],
                 [6,7,8,3,1,2,3,4,5],
                 [7,8,2,1,2,3,4,5,6],
                 [8,1,1,2,3,4,5,6,7],
                 [9,9,9,9,9,9,9,9,8]];
    expect(sudokuChecker(board)).toEqual(true);
  });

  it('should fail since one column is not 1-9', function(){
    var board = [[1,2,3,4,5,6,7,8,9],
                 [2,3,4,5,6,7,8,1,9],
                 [3,4,5,6,7,8,2,1,9],
                 [4,5,6,7,8,3,1,2,9],
                 [5,6,7,8,4,1,2,3,9],
                 [6,7,8,5,1,2,3,4,9],
                 [7,8,6,1,2,3,4,5,9],
                 [8,7,1,2,3,4,5,6,9],
                 [8,1,2,3,4,5,6,7,9]];
    expect(sudokuChecker(board)).toEqual(true);
  });
});

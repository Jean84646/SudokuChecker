import { SudokuSolver } from './../src/sudokuChecker.js';

describe('SudokuChecker', function() {
  let sudokuBoard;

  beforeEach(function(){
    let board = [5,3,4,6,7,8,9,1,2,
                 6,7,2,1,9,5,3,4,8,
                 1,9,8,3,4,2,5,6,7,
                 8,5,9,7,6,1,4,2,3,
                 4,2,6,8,5,3,7,9,1,
                 7,1,3,9,2,4,8,5,6,
                 9,6,1,5,3,7,2,8,4,
                 2,8,7,4,1,9,6,3,5,
                 3,4,5,2,8,6,1,7,9];
    sudokuBoard = new SudokuSolver(board);
  });

  it('should check if a value already exist in the row', function(){
    let row = [0,3,4,6,0,8,0,1,0];
    expect(sudokuBoard.checkValue(row, 7)).toEqual(true);
  });

  it('should check all row, column, and block to be 1-9', function(){
    expect(sudokuBoard.sudokuChecker()).toEqual(true);
  });

  it('should get the row given a row number', function(){
    expect(sudokuBoard.getRow(5)).toEqual([4,2,6,8,5,3,7,9,1]);
  });

  it('should get the column given a column number', function(){
    expect(sudokuBoard.getColumn(5)).toEqual([7,9,4,6,5,2,3,1,8]);
  });

  it('should get the block given a block number', function(){
    expect(sudokuBoard.getBlock(5)).toEqual([7,6,1,8,5,3,9,2,4]);
  });

  it('should fail since block is not 1-9', function(){
    let testBoard = [1,2,3,4,5,6,7,8,9,
                     2,3,4,5,6,7,8,9,1,
                     3,4,5,6,7,8,9,1,2,
                     4,5,6,7,8,9,1,2,3,
                     5,6,7,8,9,1,2,3,4,
                     6,7,8,9,1,2,3,4,5,
                     7,8,9,1,2,3,4,5,6,
                     8,9,1,2,3,4,5,6,7,
                     9,1,2,3,4,5,6,7,8];
    let sudokuTestBoard = new SudokuSolver(testBoard);
    expect(sudokuTestBoard.sudokuChecker()).toEqual(false);
  });

  it('should fail since one row is not 1-9', function(){
    let testBoard = [1,2,3,4,5,6,7,8,9,
                     2,3,4,5,6,7,8,9,1,
                     3,4,5,6,7,8,9,1,2,
                     4,5,6,7,8,9,1,2,3,
                     5,6,7,8,9,1,2,3,4,
                     6,7,8,9,1,2,3,4,5,
                     7,8,9,1,2,3,4,5,6,
                     8,9,1,2,3,4,5,6,7,
                     9,9,9,9,9,9,9,9,8];
    let sudokuTestBoard = new SudokuSolver(testBoard);
    expect(sudokuTestBoard.sudokuChecker()).toEqual(false);
  });

  it('should fail since one column is not 1-9', function(){
    let testBoard = [1,2,3,4,5,6,7,8,9,
                     2,3,4,5,6,7,8,1,9,
                     3,4,5,6,7,8,2,1,9,
                     4,5,6,7,8,3,1,2,9,
                     5,6,7,8,4,1,2,3,9,
                     6,7,8,5,1,2,3,4,9,
                     7,8,6,1,2,3,4,5,9,
                     8,7,1,2,3,4,5,6,9,
                     8,1,2,3,4,5,6,7,9];
    let sudokuTestBoard = new SudokuSolver(testBoard);
    expect(sudokuTestBoard.sudokuChecker()).toEqual(false);
  });

  it('should return array of savedLocations', function(){
    let board = [0,3,4,6,7,8,9,1,2,
                 6,7,2,1,9,5,3,4,8,
                 0,9,8,3,4,2,5,6,7,
                 8,5,9,7,6,1,4,2,3,
                 0,2,6,8,5,3,7,9,1,
                 7,1,3,9,2,4,8,5,6,
                 0,6,1,5,3,7,2,8,4,
                 2,8,7,4,1,9,6,3,5,
                 0,4,5,2,8,6,1,7,9];
    let sudokuBoard = new SudokuSolver(board);
    let locations = [0, 18, 36, 54, 72];
    expect(sudokuBoard.saveEmptyLocation()).toEqual(locations);
  });
});



  // it('should check all row, column, and block to be 1-9', function(){
  //   var board = [[[5,3,4], [6,7,2], [1,9,8]],
  //                [[6,7,8], [1,9,5], [3,4,2]],
  //                [[9,1,2], [3,4,8], [5,6,7]],
  //                [[8,5,9], [4,2,6], [7,1,3]],
  //                [[7,6,1], [8,5,3], [9,2,4]],
  //                [[4,2,3], [7,9,1], [8,5,6]],
  //                [[9,6,1], [2,8,7], [3,4,5]],
  //                [[5,3,7], [4,1,9], [2,8,6]],
  //                [[2,8,4], [6,3,5], [1,7,9]]];
  //   expect(sudokuChecker(board)).toEqual(true);
  // });

  // it('should check all row, column, and block to be 1-9', function(){
  //   var board = [[5,3,4,6,7,8,9,1,2],
  //                [6,7,2,1,9,5,3,4,8],
  //                [1,9,8,3,4,2,5,6,7],
  //                [8,5,9,7,6,1,4,2,3],
  //                [4,2,6,8,5,3,7,9,1],
  //                [7,1,3,9,2,4,8,5,6],
  //                [9,6,1,5,3,7,2,8,4],
  //                [2,8,7,4,1,9,6,3,5],
  //                [3,4,5,2,8,6,1,7,9]];
  //   expect(sudokuChecker(board)).toEqual(true);
  // });

  // it('should check all row and column but fail block', function(){
  //   var board = [[1,2,3,4,5,6,7,8,9],
  //                [2,3,4,5,6,7,8,9,1],
  //                [3,4,5,6,7,8,9,1,2],
  //                [4,5,6,7,8,9,1,2,3],
  //                [5,6,7,8,9,1,2,3,4],
  //                [6,7,8,9,1,2,3,4,5],
  //                [7,8,9,1,2,3,4,5,6],
  //                [8,9,1,2,3,4,5,6,7],
  //                [9,1,2,3,4,5,6,7,8]];
  //   expect(sudokuChecker(board)).toEqual(true);
  // });
  //
  // it('should fail since one row is not 1-9', function(){
  //   var board = [[1,2,3,4,5,6,7,8,9],
  //                [2,3,4,5,6,7,8,9,1],
  //                [3,4,5,6,7,8,9,1,2],
  //                [4,5,6,7,8,9,1,2,3],
  //                [5,6,7,8,9,1,2,3,4],
  //                [6,7,8,9,1,2,3,4,5],
  //                [7,8,9,1,2,3,4,5,6],
  //                [8,9,1,2,3,4,5,6,7],
  //                [9,9,9,9,9,9,9,9,8]];
  //   expect(sudokuChecker(board)).toEqual(true);
  // });
  //
  // it('should fail since one column is not 1-9', function(){
  //   var board = [[1,2,3,4,5,6,7,8,9],
  //                [2,3,4,5,6,7,8,1,9],
  //                [3,4,5,6,7,8,2,1,9],
  //                [4,5,6,7,8,3,1,2,9],
  //                [5,6,7,8,4,1,2,3,9],
  //                [6,7,8,5,1,2,3,4,9],
  //                [7,8,6,1,2,3,4,5,9],
  //                [8,7,1,2,3,4,5,6,9],
  //                [8,1,2,3,4,5,6,7,9]];
  //   expect(sudokuChecker(board)).toEqual(true);
  // });

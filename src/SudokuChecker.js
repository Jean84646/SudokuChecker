// make an empty 9x9 array
var sudokuBoard = [...Array(9)].map(e => Array(9));

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

export function sudokuChecker(sudokuArray){

  var rowCheck = true;
  var colCheck = true;
  var numbers = [1,2,3,4,5,6,7,8,9];
  var row = new Array(9);

  sudokuArray.forEach(function(column) {
    if(!arraysEqual(column.sort(), numbers)) {
      colCheck = false;
    };
  });

  for (var i = 0; i < sudokuArray.length; i++) {
    for (var j = 0; j < sudokuArray.length; j++) {
      row[j] = sudokuArray[j][i];
    }
    if(!arraysEqual(row.sort(), numbers)) {
      rowCheck = false;
    }
  }

}

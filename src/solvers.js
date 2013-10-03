/*           _                    
   ___  ___ | |_   _____ _ __ ___ 
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n){
  var solution = new Board({n:n});
  var newRows = solution.rows();

  for (var row = 0; row < newRows.length; row++) {
    for (var i = 0; i < newRows[row].length; i++) {
      newRows[row][i] = 1;
      if(hasColConflictAt(i)){
        newRows[row][i] = 0;
      } else {
        break;
      }
    }
  }

  function hasColConflictAt(colIndex){
    var onesFound = 0;
    var allRows = newRows;

    for (var i = 0; i < allRows.length; i++) {
      if (allRows[i][colIndex] === 1) {
        onesFound++;
      }
    }
    if (onesFound > 1) {
      return true;
    }
      return false;
  }


  return newRows;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n){
  var results = [];

  function contains (list, value) {
    for (var i = 0; i < list.length; i++) {
      if (list[i] === value) {
        return true;
      }
    }
    return false;
  }

  function subroutine (invalid, row, board) {
    invalid = invalid || [];
    row = row || 0;
    board = board || new Board({n:n}).rows();

    if (row === n-1) {
      results.push(board);
      return;
    }
    for (var column = 0; column < n; column++) {
      if (!contains(invalid, column)){
        var newBoard = board;
        newBoard[row][column] = 1;
        var newInvalid = invalid;
        newInvalid.push(column);
        subroutine(newInvalid, row+1, newBoard);
      }
    }
  }
  return results.length;
};


/*function nrooks (n)

var results = [];

function recursive (invalid_columns, round, board){
  round = round || 0
  board = board || new Board({n : n})
  invalid_columns = invalid_columns || [];
}

if round = 0 {
results.push(board);
return;
}

  loop through all elements in our current row
    if the index isn't in invalid columns array
      make a new copy of the board with a piece added at our current position
      var newboard = board
      new board row whatever column something = 1
      make a new copy of invalid_columns with the current column (our current index) added to it
      return the function with new board copy, new invalid_columns copy, and round - 1 as arguments

}

return results

*/


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

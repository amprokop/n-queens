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
  if (n === 0 || n === 1) return 1;
  subroutine();

  function subroutine (invalid, row, board) {
    invalid = invalid || [];
    row = row || 0;
    board = board || new Board({n:n}).rows();

    if (row === n) return results.push(board);

    for (var column = 0; column < n; column++) {
      if (!_.contains(invalid, column)){
        var newBoard = new Board(board).rows();
        newBoard[row][column] = 1;
        var newInvalid = invalid.concat(column);
        subroutine(newInvalid, row+1, newBoard);
      }
    }
  }
  return results.length;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){
  var solution = new Board({n:n});
  var newRows = solution.rows();

  for (var row = 0; row < newRows.length; row++) {
    for (var i = 0; i < newRows[row].length; i++) {
      newRows[row][i] = 1;
      if(hasColConflictAt(i) || hasMajorDiagonalConflictAt(i) || hasMinorDiagonalConflictAt(i)){
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

  function hasMajorDiagonalConflictAt (majorDiagonalColumnIndexAtFirstRow){
    var piecesFound = 0;
    var theRows = newRows;

    for (var i = 0; i < theRows.length; i++) {
      for (var j = 0; j < theRows[i].length; j++) {
        if ((j - i) === majorDiagonalColumnIndexAtFirstRow && theRows[i][j] === 1) {
          piecesFound++;
        }
      }
    }
    if (piecesFound > 1) {
      return true;
    }
    return false;
  }

  function hasMinorDiagonalConflictAt (minorDiagonalColumnIndexAtFirstRow){
    var piecesFound = 0;
    var theRows = newRows;

    for (var i = 0; i < theRows.length; i++) {
      for (var j = 0; j < theRows[i].length; j++) {
        if ((j + i) === minorDiagonalColumnIndexAtFirstRow && theRows[i][j] === 1) {
          piecesFound++;
        }
      }
    }
    if (piecesFound > 1) {
      return true;
    }
    return false;
  }
  return newRows;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

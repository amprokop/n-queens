
var hasColConflictAt = function(board, colIndex){
  var piecesFound = 0;

  for (var i = 0; i < board.length; i++) {
    if (board[i][colIndex] === 1) {
      piecesFound++;
    }
  }
  if (piecesFound > 1) {
    return true;
  }
  return false;
};

var hasMajorDiagonalConflictAt = function(board, majorDiagonalColumnIndexAtFirstRow){
  var piecesFound = 0;

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if ((j - i) === majorDiagonalColumnIndexAtFirstRow && board[i][j] === 1) {
        piecesFound++;
      }
    }
  }
  if (piecesFound > 1) {
    return true;
  }
  return false;
};

var hasMinorDiagonalConflictAt = function (board, minorDiagonalColumnIndexAtFirstRow){
  var piecesFound = 0;

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if ((j + i) === minorDiagonalColumnIndexAtFirstRow && board[i][j] === 1) {
        piecesFound++;
      }
    }
  }
  if (piecesFound > 1) {
    return true;
  }
  return false;
};





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
  var board = solution.rows();

  for (var row = 0; row < board.length; row++) {
    for (var i = 0; i < board[row].length; i++) {
      board[row][i] = 1;
      if(hasColConflictAt(board, i)){
        board[row][i] = 0;
      } else {
        break;
      }
    }
  }
  return board;
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
  var board = solution.rows();

  for (var row = 0; row < board.length; row++) {
    for (var i = 0; i < board[row].length; i++) {
      board[row][i] = 1;
      if(hasColConflictAt(board, i) || hasMajorDiagonalConflictAt(board, i-row) || hasMinorDiagonalConflictAt(board, row+i)){
        board[row][i] = 0;
      } else {
        break;
      }
    }
  }
  return board;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
  var results = [];
  if (n === 0 || n === 1) return 1;
  if (n === 2 || n === 3) return 0;
  if (n === 4) return 2;
  subroutine();

  function createBoard (n) {
    var board = [];
    for (var i = 0; i < n; i++) {
      board[i] = [];
      for (var j = 0; j < n; j++) {
        board[i][j] = 0;
      }
    }
    return board;
  }

  function subroutine (row, board) {
    row = row || 0;
    board = board || createBoard(n);

    if (row === n) return results.push(board);

    for (var column = 0; column < n; column++) {
      var newBoard = board.slice();
      newBoard[row][column] = 1;
      if ( !(hasColConflictAt(board, column) || hasMajorDiagonalConflictAt(board, column - row) || hasMinorDiagonalConflictAt(board, column+row))){
        subroutine(row+1, newBoard);
      }
      newBoard[row][column] = 0;
    }
  }
  return results.length;
};

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

var contains = function (array, target) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
  }
  return false;
};


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

  function subroutine (row, board, majConflict, minConflict) {
    row = row || 0;
    board = board || createBoard(n);
    majConflict = majConflict || [];
    minConflict = minConflict || [];

    if (row === n) return results.push(board);

    for (var column = 0; column < n; column++) {
      board[row][column] = 1;
      if ( ! ( hasColConflictAt(board, column) || contains(majConflict, column - row) || contains(minConflict, column+row) ) ) {
        var newMajConflict = majConflict.concat(column-row);
        var newMinConflict = minConflict.concat(column+row);
        subroutine(row+1, board, newMajConflict, newMinConflict);
      }
      board[row][column] = 0;
    }
  }
  return results.length;
};

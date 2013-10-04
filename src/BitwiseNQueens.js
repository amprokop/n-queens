var hasColConflictAt = function(board, bit){
  return contains(board, bit);
};


var hasDiagonalConflictAt = function(board, majorDiagonalColumnIndexAtFirstRow){
  if abs(power minus power) === abs(array index - array index)
    return true;
};


var hasMinorDiagonalConflictAt = function (board, minorDiagonalColumnIndexAtFirstRow){

};

var contains = function (array, target) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
  }
  return false;
};


window.countNQueensBitwiseSolutions = function(n){
  var results = [];
  if (n === 0 || n === 1) return 1;
  if (n === 2 || n === 3) return 0;
  if (n === 4) return 2;
  subroutine();


  function subroutine (row, board, majConflict, minConflict) {
    board = board || [];
    row = row || 0;

    if (row === n){
      results.push(board);
    }

    for (var i = 0; i < n; i++) {
      if (i === 0) {
        board.push(1)
      } else {
        var toPush = i<<1
        board.push(toPush)
      }
      if (!(hasColConflictAt(board, toPush) || hasDiagonalConflicts()) {
        subroutine(row+1, board, conflicts)
      }
      board.pop();
    }
    return results.length;
};
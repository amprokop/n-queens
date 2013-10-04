var hasColConflictAt = function(board, bit){
  return contains(board, bit);
};

var logTwo = function(num) {
   return Math.log(num)/Math.log(2);
};

//This function tests for major and minor diagonal conflicts by comparing the difference between the powers of numbers (log of 2).
// If the difference between the exponents of two numbers is equal to the difference between their row indices, then a conflict exists.
var hasDiagonalConflictAt = function(num, index, board){
  for (var test = 0; test < board.length; test++) {
    if (Math.abs( logTwo(board[test]) - logTwo(num) ) === Math.abs( test - index ) ) {
      return true;
    }
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

window.countNQueensBitwiseSolutions = function(n){
  var results = [];
  if (n === 0) return 1;
  subroutine();
  function subroutine (row, board) {
    board = board || [];
    row = row || 0;
    var toPush;
    if (row === n){
      results.push(board);
      return;
    }
    for (var i = 0; i < n; i++) {
    //In this loop, each value of i represents a possible row--not a column index or row index!
      toPush = Math.pow(2,i);
      if ( !(hasColConflictAt(board, toPush) || hasDiagonalConflictAt(toPush, board.length, board) )) {
        var newBoard = board.concat(toPush);
        subroutine(row+1, newBoard);
      }
    }
  }
  return results.length;
};
describe("solvers", function() {
  window.displayBoard = function(){};

  /*
  describe('findNRooksSolution()', function(){

    it('finds a valid solution for n of 0-8', function(){
      _.range(1, 8).map(function(n){
        var solutionBoard = new Board(findNRooksSolution(n));
        expect(solutionBoard.get('n')).to.equal(n);
        expect(solutionBoard.hasAnyRooksConflicts()).to.be.equal(false);
      });
    });

  });

  describe('countNRooksSolutions()', function(){


    it('finds the number of valid solutions for n of 0-8', function(){
      _.range(0, 8).map(function(n){
        var solutionCount = countNRooksSolutions(n);
        var expectedSolutionCount = [1, 1, 2, 6, 24, 120, 720, 5040][n];
        expect(solutionCount).to.be.equal(expectedSolutionCount);
      });
    });

  });

*/

  it ('running NQueens Count n = 12 should be really fast', function() {
  countNQueensBitwiseSolutions(12);
 });

 /*
 describe('findNQueensSolution()', function(){

    it('finds a valid solution for n of 0-8', function(){
      _.range(1, 8).map(function(n){
        var solutionBoard = new Board(findNQueensSolution(n));
        expect(solutionBoard.get('n')).to.equal(n);
        expect(solutionBoard.hasAnyQueensConflicts()).to.be.equal(false);
      });
    });

  }); */
/*
  describe('countNQueensBitwiseSolutions()', function(){

    it('finds the number of valid solutions for n of 0-5', function(){
      _.range(0, 5).map(function(n){
        var solutionCount = countNQueensBitwiseSolutions(n);
        var expectedSolutionCount = [1, 1, 0, 0, 2, 10, 4, 40, 92, 352, 724, 2680, 14200, 73712, 365596, 2279184, 14772512][n];
        expect(solutionCount).to.be.equal(expectedSolutionCount);
      });
    });

  });
*/

});

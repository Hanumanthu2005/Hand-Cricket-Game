

function PlayButton({ run, updateScore, updateMove }) {

  function getComputerMove() {
    const moves = [1, 2, 3, 4, 5, 6];
    return moves[Math.floor(Math.random() * moves.length)];
  }

  function result(playerMove, computerMove) {
    if(playerMove === computerMove) {
      return -1;
    }
    return playerMove;
  }

  function generateResult() {
    const computerMove = getComputerMove();
    const scoredRuns = result(run, computerMove);
    const moves = {playerMove : run, computerMove : computerMove};
    updateScore(scoredRuns);
    updateMove(moves);
  }

  return (
    <>
      <button onClick={generateResult} className="play-btn">{run}</button>
    </>
  )
}

export default PlayButton;
import { useEffect, useState } from "react";
import PlayButton from "./playbuttons";
import '../css/Home.css'

function Home() {
  const [score, setScore] = useState({balls : 0, runs : 0});
  const [moves, setMoves] = useState({playerMove : 0, computerMove : 0})
  const [isOut, setIsOut] = useState(false);

  const updateScore = (scoredRuns) => {
    if(scoredRuns === -1) {
      setIsOut(true);
    }
    else {
      setScore(prev => {
        const newScore = {...prev};
        newScore.balls++;
        newScore.runs += scoredRuns;
        return newScore;
      })
    }
  }

  const updateMove = ({ playerMove, computerMove }) => {
    setMoves({playerMove : playerMove, computerMove : computerMove});
  }

  return (
    <>
      <div className="title">
        Hand Cricket Game
      </div>
      {(isOut) ? (
        <>
          <div className="out-message">
            <h2>🏏 You are OUT!</h2>
            <p>Final Score: {score.runs} ({score.balls} balls)</p>
            <button onClick={() => {
              setScore({ balls: 0, runs: 0 });
              setMoves({ playerMove: 0, computerMove: 0 });
              setIsOut(false);
            }}>
              Play Again
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="play-btns">
            <PlayButton run={1} updateScore={updateScore} updateMove={updateMove} />
            <PlayButton run={2} updateScore={updateScore} updateMove={updateMove} />
            <PlayButton run={3} updateScore={updateScore} updateMove={updateMove} />
          </div>
          <div className="play-btns">
            <PlayButton run={4} updateScore={updateScore} updateMove={updateMove} />
            <PlayButton run={5} updateScore={updateScore} updateMove={updateMove} />
            <PlayButton run={6} updateScore={updateScore} updateMove={updateMove} />
          </div>
          <div className="game-moves">
            <p>Player Move : {moves.playerMove} VS {moves.computerMove} : Computer Move</p>
          </div>
          <div className="score-card">
            <p className="score">Score : {score.runs}({score.balls})</p>
            <p className="strick-rate">SR : {((score.runs / score.balls) * 100).toFixed(2)}</p>
          </div>
        </>
      )}
    </>
  )
}

export default Home;
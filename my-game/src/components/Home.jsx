import { useEffect, useState } from "react";
import PlayButton from "./playbuttons";


function Home() {
  const [score, setScore] = useState({balls : 0, runs : 0});
  const [moves, setMoves] = useState({playerMove : 0, computerMove : 0})

  const updateScore = (scoredRuns) => {
    if(scoredRuns === -1) {
      setScore({balls : 0, runs : 0});
      alert('you are out')
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

  useEffect(() => {
    console.log(score.balls, score.runs);    
    console.log(moves.playerMove, moves.computerMove);    

  }, [score, moves]);


  return (
    <>
      <div className="title">
        Hand Cricket Game
      </div>
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
  )
}

export default Home;
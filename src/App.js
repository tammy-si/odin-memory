import React, { useEffect, useState } from 'react';
import Overview from './components/overview';
import "./style.css"

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    document.title = 'Memory Card';
  }, []);

  const incrementScore = () => {
    setScore(score + 1);
  }

  const clearScore = () => {
    setScore(0);
  }

  const setNewHighScore = () => {
    setHighScore(score);
  }

  return (
    <div className="App">
      <header>
        <p>My Little Pony Memory Game</p>
        <div className='scoreboard'>
          <p>Score: { score }</p>
          <p>High Score: { highScore }</p>
        </div>
      </header>
      <Overview score={ score } highScore = { highScore } incrementScore={incrementScore} clearScore={clearScore} setNewHighScore={setNewHighScore}/>
    </div>
  );
}

export default App;

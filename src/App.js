import React, { useEffect, useState } from 'react';
import Overview from './components/overview';
import "./style.css"

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    document.title = 'Memory Card';
  }, []);

  return (
    <div className="App">
      <header>
        <p>My Little Pony Memory Game</p>
        <div className='scoreboard'>
          <p>Score: { score }</p>
          <p>High Score: { highScore }</p>
        </div>
      </header>
      <Overview />
    </div>
  );
}

export default App;

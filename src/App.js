import React, { useEffect, useState } from 'react';
import Cards from './components/Cards';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const increaseScore = () => {
    setScore(score + 1);
  };

  const lostGame = () => {
    setScore(0);
  };

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score]);

  return (
    <div>
      <h1>Memory Card</h1>
      <div>
        <h2>
          High Score:
          {' '}
          {highScore}
        </h2>
        <h2>
          Score:
          {' '}
          {score}
        </h2>
      </div>
      <Cards onCardClick={increaseScore} onFail={lostGame} />
    </div>
  );
}

export default App;

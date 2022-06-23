import React, { useEffect, useState } from 'react';
import Cards from './components/Cards';
import Aqua from './cardImages/Aqua.webp';
import Chomusuke from './cardImages/Chomusuke.webp';
import Chris from './cardImages/Chris.webp';
import Darkness from './cardImages/Darkness.webp';
import Eris from './cardImages/Eris.webp';
import Kazuma from './cardImages/Kazuma.webp';
import Megumin from './cardImages/Megumin.webp';
import Wiz from './cardImages/Wiz.webp';

function App() {
  const images = [Aqua, Chomusuke, Chris, Darkness, Eris, Kazuma, Megumin, Wiz];
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState([]);

  const shuffleCards = () => {
    const newOrder = images;
    for (let i = 0; i < images.length; i += 1) {
      const newPlace = Math.floor(Math.random() * 8);
      const newPlaceUrl = newOrder[newPlace];
      newOrder[newPlace] = images[i];
      newOrder[i] = newPlaceUrl;
    }
    setCards(images);
  };

  const increaseScore = () => {
    setScore(score + 1);
  };

  const lostGame = () => {
    setScore(0);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
    shuffleCards();
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
      <Cards onSucesss={increaseScore} onFail={lostGame} cards={cards} />
    </div>
  );
}

export default App;

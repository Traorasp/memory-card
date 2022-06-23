import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Cards(props) {
  const { onSucesss, onFail, cards } = props;
  const [usedCards, setUsedCards] = useState([]);

  const checkCard = (e) => {
    let isDuplicate = false;
    usedCards.forEach((card) => {
      if (card === e.target.alt) {
        isDuplicate = true;
      }
    });
    if (!isDuplicate) {
      onSucesss();
      setUsedCards(usedCards.concat(e.target.alt));
    } else {
      onFail();
      setUsedCards([]);
    }
  };

  return (
    <div>
      {cards.map((url) => (
        <button type="button" className="card" onClick={checkCard} onKeyDown={checkCard}>
          <img src={url} alt={url.substring(url.lastIndexOf('/') + 1, url.indexOf('.'))} />
          {url.substring(url.lastIndexOf('/') + 1, url.indexOf('.'))}
        </button>
      ))}
    </div>
  );
}

Cards.propTypes = {
  onSucesss: PropTypes.func,
  onFail: PropTypes.func,
  cards: PropTypes.arrayOf(PropTypes.string),
};

Cards.defaultProps = {
  onSucesss: () => {},
  onFail: () => {},
  cards: [],
};

export default Cards;

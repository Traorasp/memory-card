import React from 'react';
import PropTypes from 'prop-types';

function Cards(props) {
  const { onSucesss, onFail, cards } = props;
  const usedCards = [];

  const checkCard = (e) => {
    let isDuplicate = false;
    usedCards.forEach((card) => {
      if (card === e.target.textContext) {
        isDuplicate = true;
      }
    });
    if (!isDuplicate) {
      onSucesss();
    } else {
      onFail();
    }
  };

  return (
    <div>
      <div>{cards}</div>
      {cards.map((url) => (
        <button type="button" className="card" onClick={checkCard} onKeyDown={checkCard}>
          <img src={url} alt={url.substring(url.lastIndexOf('/') + 1)} />
          {url.substring(url.lastIndexOf('/') + 1)}
        </button>
      ))}
    </div>
  );
}

Cards.propTypes = {
  onSucesss: PropTypes.func,
  onFail: PropTypes.func,
  cards: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
};

Cards.defaultProps = {
  onSucesss: () => {},
  onFail: () => {},
  cards: [],
};

export default Cards;

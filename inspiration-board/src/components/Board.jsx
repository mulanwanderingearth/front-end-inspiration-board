import PropTypes from 'prop-types';
import './Board.css';
import Card from './Card.jsx';

const Board = ({ cards, onToggleLikes, onDeleteCard }) => {

  const renderedCards = cards.map((card) => (
    <Card
      key={card.cardId}
      id={card.cardId}
      cardMessage={card.cardMessage}
      likes={card.cardLikes}
      onToggleLikes={onToggleLikes}
      onDeleteCard={onDeleteCard}
    />
  ));

  return (
    <section className="story-panel board-panel">
      <header className="board-header">
      </header>

      {cards.length === 0 ? (
        <div className="board-empty">
          L’idée arrive… patience 🙂
        </div>
      ) : (
        <ul className="board-card-list">
          {renderedCards}
        </ul>
      )}
    </section>
  );
};

Board.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      cardId: PropTypes.number.isRequired,
      cardMessage: PropTypes.string.isRequired,
      cardLikes: PropTypes.number.isRequired,
    })
  ).isRequired,
  onToggleLikes: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
};

export default Board;

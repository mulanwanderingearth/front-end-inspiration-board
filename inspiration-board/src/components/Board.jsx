import PropTypes from 'prop-types';
import './Board.css';
import Card from './Card.jsx';

const Board = ({cards,onToggleLikes,onDeleteCard}) => {

    const getAllCardsforABoard = (cards) =>{
        return cards.map((card) =>{
            return (
                <Card
                key = {card.cardId}
                id = {card.cardId}
                cardMessage= {card.cardMessage}
                likes = {card.cardLikes}
                onToggleLikes={onToggleLikes}
                onDeleteCard={onDeleteCard}/>
            );
        });
    };

    if (! cards.length){
        return<div> L’idée arrive… patience 🙂</div>
    }

    return <ul className = 'display_cards_for_a_board'>{getAllCardsforABoard(cards)}</ul>
};

Board.propTypes = {
    cards:PropTypes.arrayOf(
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
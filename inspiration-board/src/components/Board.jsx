import PropTypes from 'prop-types';
import './Board.css';
import Card from './Card.jsx';

const Board = () => {

    const getAllCardsforABoard = (cards) =>{
        return cards.map((card) =>{
            return (
                <Card
                id = {card.id}
                cardMessage= {card.card_message}
                likes = {card.likes}
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
    cards:PropTypes.arrayof(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            cardMessage: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
        })
    ).isRequired,
    onToggleLikes: PropTypes.func.isRequired,
    onDeleteCard: PropTypes.func.isRequired,
};

export default Board;
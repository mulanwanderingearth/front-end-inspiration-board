import PropTypes from 'prop-types';
import './Card.css';

const Card = ({id,cardMessage,likes,onToggleLikes,onDeleteCard}) => {
    const heart = likes ? '❤️' : '🤍';
    const deleteButton = '❌';

    const toggleLike = () =>{ 
        onToggleLikes(id);
    };

    const deleteCard = () =>{
        onDeleteCard(id);
    };

    return (
    <div className='card_content'>
        <h2 className='card_message'>{cardMessage}</h2>
        <div className="card_actions"> 
            <p>{likes} 💞</p>
        <button className='like' onClick={() => toggleLike(id)}>Like: {heart}</button>
        <button className='delete_card' onClick={() => deleteCard(id)}>Delete Card: {deleteButton}  </button>

        </div>

        
    </div>
    );
};


Card.propTypes = {
    id: PropTypes.number.isRequired,
    cardMessage: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    onToggleLikes: PropTypes.func.isRequired,
    onDeleteCard: PropTypes.func.isRequired,
};


export default Card;
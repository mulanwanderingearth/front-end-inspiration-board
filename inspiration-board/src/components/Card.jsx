import PropTypes from 'prop-types';
import './Card.css';

const Card = ({id,cardMessage,likes,onToggleLikes,onDeleteCard}) => {
    const heart = likes ? '❤️' : '🤍';
    const deleteButton = '❌';

    const toggleLike = () =>{ 
        onDeleteCard(id);
    };

    const deleteCard = () =>{
        onDeleteCard(id);
    };

    return (
    <div className={Card_content}>
        <section className='card_content'>
        <h2 className='card_message'>{cardMessage}</h2>
        <p>{likes} 💞</p>
        <button className='like' onClick={() => toggleLike(id)}>{heart}</button>
        <button className='delete_card' onClick={() => deleteCard(id)}>{deleteButton}</button>
        </section>
    </div>
    );
};


Card.propTypes = {
    id: PropTypes.number.isRequired,
    cardMessage: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    onToggleLikes: PropTypes.func.isRequired,
    onDeleteCard: PropTypes.func.isRequired,
}


export default Card;
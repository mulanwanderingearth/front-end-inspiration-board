import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css'

const NewCardForm = ({ onNewCard }) => {
  const [cardData, setCardData] = useState({
    cardMessage: '',
    cardLikes:0
  });

  const handleChange = (event) => {
    setCardData({...cardData, [event.target.name]: event.target.value})
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    onNewCard(cardData);
    setCardData({
        cardMessage: '',
        cardLikes:0
    });
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <h1>CREAT A NEW CARD</h1>

      <label htmlFor="cardMessage">Message</label>
      <input id="cardMessage" name="cardMessage" value={cardData.cardMessage} onChange={handleChange} />
      
      <p>Preview:{cardData.cardMessage}</p>
      <input type="submit" value="Add Card" />
      

    </form>

  )
};

NewCardForm.propTypes = {
  onNewCard: PropTypes.func.isRequired,
};

export default NewCardForm;


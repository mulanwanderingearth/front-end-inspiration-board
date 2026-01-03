import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css'

const NewCardForm = ({ onNewCard }) => {
  const [cardData, setCardData] = useState({
    message: ''
  });

  const handleChange = (event) => {
    setCardData({...cardData, [event.target.name]: event.target.value})
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    onNewCard(cardData);
    setCardData({
        message: ''
    });
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <h1>CREAT A NEW CARD</h1>

      <label htmlFor="message">Message</label>
      <input id="message" name="message" value={cardData.message} onChange={handleChange} />
      
      <p>Preview:{cardData.message}</p>
      <input type="submit" value="Add Card" />
      

    </form>

  )
};

NewCardForm.propTypes = {
  onNewCard: PropTypes.func.isRequired,
};

export default NewCardForm;


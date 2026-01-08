import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css'

const NewCardForm = ({ onNewCard }) => {
  const [cardData, setCardData] = useState({
    cardMessage: '',
    cardLikes: 0
  });

  const handleChange = (event) => {
    setCardData({ ...cardData, [event.target.name]: event.target.value })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNewCard(cardData);
    setCardData({
      cardMessage: '',
      cardLikes: 0
    });
  };

  const isValidInput = (input) => {
    return input.length > 0 && input.length <= 40
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>CREATE NEW CARD</h1>
      <label htmlFor="cardMessage">Message</label>
      <input
        type="text"
        id="cardMessage"
        name="cardMessage"
        value={cardData.cardMessage}
        onChange={handleChange}
        className={isValidInput(cardData.cardMessage) ? 'valid' : 'invalid'}
        placeholder="Share your inspiration, dreams, or a magical moment..."
      />
      <p>Preview: {cardData.cardMessage}</p>
      <input
        type="submit"
        value="Add Card"
        disabled={!isValidInput(cardData.cardMessage)}
      />
    </form>
  )
};

NewCardForm.propTypes = {
  onNewCard: PropTypes.func.isRequired,
};

export default NewCardForm;


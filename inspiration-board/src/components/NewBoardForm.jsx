import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewBoardForm.css'

const NewBoardForm = ({ onNewBoard }) => {
  const [boardData, setBoardData] = useState({
    boardTitle: '',
    ownerName: ''
  });

  const [showForm, setShowForm] = useState(true);
  const handleChange = (event) => {
    setBoardData({ ...boardData, [event.target.name]: event.target.value })
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onNewBoard(boardData);
    setBoardData({
      boardTitle: '',
      ownerName: ''
    });
  };
  const handleHideForm = () => {
    setShowForm(!showForm);
  };

  const isValidInput = (input) => {
    return input.length > 0 && input.length <= 40
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>CREAT A NEW BOARD</h1>
      <div className={showForm ? 'form-visible' : 'form-hidden'}>
        <label htmlFor="boardTitle"> Title </label>
        <input
          type="text"
          id="boardTitle"
          name="boardTitle"
          value={boardData.boardTitle}
          onChange={handleChange}
          className={isValidInput(boardData.boardTitle) ? 'Valid' : 'invalid'}
          placeholder="Once Upon A Time"

        />
        <label htmlFor="ownerName">Owner's Name</label>
        <input
          type="text"
          id="ownerName"
          name="ownerName"
          value={boardData.ownerName}
          onChange={handleChange}
          className={isValidInput(boardData.ownerName) ? 'Valid' : 'invalid'}
          placeholder="Enter your Name"
        />
        <p>Preview: {boardData.boardTitle}-{boardData.ownerName}</p>
        <input
          type="submit"
          value="Add Board"
          disabled={!(isValidInput(boardData.ownerName) && isValidInput(boardData.boardTitle))}
        />
      </div>
      
      <button id="toggle-board-form" type="button" onClick={handleHideForm}>{showForm ? 'Hide New Board Form' : 'Show New Board'}</button>
    </form>
  )
};

NewBoardForm.propTypes = {
  onNewBoard: PropTypes.func.isRequired,
};

export default NewBoardForm;


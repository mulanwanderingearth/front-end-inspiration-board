import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewBoardForm.css'

const NewBoardForm = ({ onNewBoard }) => {
  const [boardData, setBoardData] = useState({
    title: '',
    ownerName: ''
  });

  const handleChange = (event) => {
    setBoardData({ ...boardData, [event.target.name]: event.target.value })
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onNewBoard(boardData);
    setBoardData({
      title: '',
      ownerName: ''
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>CREAT A NEW BOARD</h1>

      <label htmlFor="title">Title</label>
      <input id="title" name="title" value={boardData.title} onChange={handleChange} />
      <label htmlFor="ownerNmae">Owner's Name</label>
      <input id="ownerName" name="ownerName" value={boardData.ownerName} onChange={handleChange} />
      <p>Preview:{boardData.title}-{boardData.ownerName}</p>
      <input type="submit" value="Add Board" />
      <button>Hide New Board Form</button>

    </form>

  )
};

NewBoardForm.propTypes = {
  onNewBoard: PropTypes.func.isRequired,
};

export default NewBoardForm;


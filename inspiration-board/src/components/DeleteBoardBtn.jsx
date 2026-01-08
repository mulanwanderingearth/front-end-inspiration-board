import PropTypes from 'prop-types';
import './DeleteBoardBtn.css';

const DeleteBoardBtn= ({onDeleteOneBoard, onDeleteAllBoards}) => {

    return <section className="delete-board-actions"> 
        <button 
        className="delete-btn delete-btn-single" 
        onClick={onDeleteOneBoard}> 

        Delete Current Board
        </button>

        <button 
        className="delete-btn delete-btn-all"
        onClick={onDeleteAllBoards}> 

        Delete All Boards
        </button>
    </section>;
};

DeleteBoardBtn.propTypes = {
    onDeleteOneBoard: PropTypes.func.isRequired,
    onDeleteAllBoards: PropTypes.func.isRequired,
};

export default DeleteBoardBtn;
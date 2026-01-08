import PropTypes from 'prop-types';
import './DeleteBoardBtn.css';

const DeleteBoardBtn= ({onDeleteOneBoard, onDeleteAllBoards}) => {

    return <section> 
        <button onClick={onDeleteOneBoard}>delet current board</button>
        <button onClick={onDeleteAllBoards}>delete all Boards</button>
    </section>;
};

DeleteBoardBtn.propTypes = {
    onDeleteOneBoard: PropTypes.func.isRequired,
    onDeleteAllBoards: PropTypes.func.isRequired,
};

export default DeleteBoardBtn;
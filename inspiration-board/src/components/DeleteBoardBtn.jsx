import PropTypes from 'prop-types';
import './DeleteBoardBtn.css';

const DeleteBoardBtn= ({func_1, func_2}) => {
    return <section> 
        <button onClick={func_1}>delet all boards</button>
        <button onClick={func_2}>delete current board</button>
    </section>;
};

SelectedBoard.propTypes = {
    boardTitle: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

export default SelectedBoard;
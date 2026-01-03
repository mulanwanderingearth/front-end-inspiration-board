import PropTypes from 'prop-types';
import './SelectedBoard.css';

const SelectedBoard = ({boardTitle}) => {
    return <div> 
        <h2>Selected Board</h2>
        <p>{boardTitle ? boardTitle : "No title"}</p>
    </div>;
};

SelectedBoard.propTypes = {
    boardTitle: PropTypes.string.isRequired,
};

export default SelectedBoard;

import PropTypes from 'prop-types';
import './SelectedBoard.css';

const SelectedBoard = ({boardTitle,author}) => {
    return <section> 
        <h2>Selected Board</h2>
        <p>{boardTitle}  by {author}</p>
    </section>;
};

SelectedBoard.propTypes = {
    boardTitle: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

export default SelectedBoard;

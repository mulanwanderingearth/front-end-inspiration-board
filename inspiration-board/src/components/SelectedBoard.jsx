import PropTypes from 'prop-types';
import './SelectedBoard.css';

const SelectedBoard = ({boardTitle,author}) => {
    return <section> 
        <h2> {boardTitle}   by  {author}</h2>
    </section>;
};

SelectedBoard.propTypes = {
    boardTitle: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

export default SelectedBoard;

import PropTypes from 'prop-types';
import './BoardList.css';

const BoardList = ({boards,onSelectBoard}) =>{

    const handleBoardSelection = (e) => {
        const selectedBoardId = Number(e.target.value);

        const selectedBoard = boards.find(
        board => board.boardId === selectedBoardId
        );

        onSelectBoard(selectedBoard);
    };

    return(
        <div>
        <select onChange={handleBoardSelection} defaultValue="">
            <option value="" disabled>
            Select a board…
            </option>
            {boards.map(board => (
            <option value={board.boardId} key={board.boardId}>{board.boardTitle}</option>
            ))}
        </select>
        </div>
        );
};

BoardList.propTypes={
    boards: PropTypes.arrayOf(
    PropTypes.shape({
        boardId: PropTypes.number.isRequired,
        boardTitle: PropTypes.string.isRequired,
        ownerName: PropTypes.string.isRequired,
    })
    ).isRequired,
    onSelectBoard: PropTypes.func.isRequired,
};

export default BoardList;
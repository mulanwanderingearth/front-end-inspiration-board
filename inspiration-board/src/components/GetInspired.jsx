import PropTypes from 'prop-types';
import './GetInspired.css';
import starIcon from '../assets/star.png';

const GetInspired = ({onGetInspiredButton,inspirationStory,loading}) =>{
    const handleClick = () => {
    onGetInspiredButton();
    };
    return <div className="GetInspired">
        <button onClick={handleClick} className="star-button">
            <img
                src={starIcon}
                alt="Star Button"
                className="star-button-icon"/>
        </button>
        {loading && <p className="inspiration-loading">Thinking very hard… ✨</p>}

        {!loading && inspirationStory && (
        <div className="inspiration-story">{inspirationStory}</div>
        )}

        {!loading && !inspirationStory && (
        <p className="inspiration-loading">Click the star to get inspired ✨</p>
)}
    </div>
};
GetInspired.propTypes ={
    onGetInspiredButton: PropTypes.func.isRequired,
    inspirationStory:PropTypes.string.isRequired,
    loading:PropTypes.bool.isRequired,
}

export default GetInspired;
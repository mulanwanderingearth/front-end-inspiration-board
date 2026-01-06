import PropTypes from 'prop-types';
import './GetInspired.css';
import starIcon from '../assets/Gemini_Generated_Image_7v7lo27v7lo27v7l.png';

const GetInspired = ({onGetInspiredButton,inspirationStory,loading}) =>{
    const handleClick = () => {
    onGetInspiredButton();
    };
    return <div>
        <button onClick={handleClick}>
            <img
                src={starIcon}
                alt="Star Button"
                className="star-button-icon"/>
        </button>
        {loading && <p className="placeholder">Thinking very hard… ✨</p>}

        {!loading && inspirationStory && (
        <p className="inspiration-text">{inspirationStory}</p>
        )}

        {!loading && !inspirationStory && (
        <p className="placeholder">Click the star to get inspired ✨</p>
)}
    </div>
};
GetInspired.propTypes ={
    onGetInspiredButton: PropTypes.func.isRequired,
    inspirationStory:PropTypes.string.isRequired,
    loading:PropTypes.bool.isRequired,
}

export default GetInspired;
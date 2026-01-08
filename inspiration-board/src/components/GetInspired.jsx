import PropTypes from 'prop-types';
import './GetInspired.css';
import penButton from '../assets/quill.png';

const GetInspired = ({onGetInspiredButton,inspirationStory,loading}) =>{
    const handleClick = () => {
    onGetInspiredButton();
    };
    return <div>
        <div className='StoryBook'>
        {loading && <p className="placeholder">Thinking very hard… ✨</p>}

        {!loading && inspirationStory && (
        <p className="inspiration-text">{inspirationStory}</p>
        )}

        {!loading && !inspirationStory && (
        <p className="placeholder">Click the star to get inspired ✨</p>
        )}
        </div>
        <button onClick={handleClick}>
            <img
                src={penButton}
                alt="Pen Button"
                className="pen-button-icon"/>
        </button>
    </div>
};
GetInspired.propTypes ={
    onGetInspiredButton: PropTypes.func.isRequired,
    inspirationStory:PropTypes.string.isRequired,
    loading:PropTypes.bool.isRequired,
}

export default GetInspired;
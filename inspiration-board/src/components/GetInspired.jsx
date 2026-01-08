import PropTypes from 'prop-types';
import './GetInspired.css';


const GetInspired = ({onGetInspiredButton,inspirationStory,loading}) =>{
    const handleClick = () => {
    onGetInspiredButton();
    };
    return <div className="get-inspired">
        {!loading && !inspirationStory && (
    <>
      <p className="no-story-text">No Story Yet</p>
      <p className="placeholder-text">
        Click on a card from the board to select it, then generate an AI-woven tale from your inspiration ✨
      </p>
    </>
  )}
        
        <button className="get-inspired-button" onClick={handleClick}>
            <img
                src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
                alt="Book Icon"
                className="star-button-icon"/>
            <span style={{ marginLeft: '0.5rem', color: '#fff', fontWeight: 500 }}>
                Generate Story
            </span>

        </button>
    {loading && <p className="placeholder-text">Thinking very hard… ✨</p>}
    {!loading && inspirationStory && (
    <p className="inspiration-text">{inspirationStory}</p>
    
    )}

    </div>
};
GetInspired.propTypes ={
    onGetInspiredButton: PropTypes.func.isRequired,
    inspirationStory:PropTypes.string.isRequired,
    loading:PropTypes.bool.isRequired,
}

export default GetInspired;
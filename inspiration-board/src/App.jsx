import { useState, useEffect } from 'react'
import './App.css'
import SelectedBoard from './components/SelectedBoard'
import Board from './components/Board';
import BoardList from './components/BoardList';
import GetInspired from './components/GetInspired';
import axios from 'axios';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';


//const endpoint 
const VITE_APP_BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;


// data transformation functions here
const convertBoardFromApi = (board) => {
  return {
    boardId: board.id,
    boardTitle: board.title,
    ownerName: board.name
  };
};
const convertCardFromApi = (card) => {
  return {
    cardId: card.id,
    cardMessage: card.card_message,
    cardLikes: card.likes
  };
};

// all end points methods starting here 
//get all boards api
const getAllBoardsApi = () => {
  return axios.get(`${VITE_APP_BACKEND_URL}/boards`)
    .then(response => response.data
    )
      
    .catch(error => console.log(error));
};
//get all cards of selected board from api
const getAllCardsApi = (boardId) => {
  return axios.get(`${VITE_APP_BACKEND_URL}/boards/${boardId}/cards`)
    .then(response => response.data)
    .catch(error => console.log(error));
};

// New board to back end
const addNewBoardApi = (boardData) => {
  const { boardTitle, ownerName } = boardData;
  return axios.post(`${VITE_APP_BACKEND_URL}/boards`, {
    title: boardTitle,
    name: ownerName
  })
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
};

// New card to back end 
const addNewCardApi = (cardData, boardId) => {
  const { cardMessage } = cardData;
  return axios.post(`${VITE_APP_BACKEND_URL}/boards/${boardId}/cards`, {
    card_message: cardMessage
  })
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
};

// AI function to back end
const postPromptToAPI = (prompt) => {
  return axios
    .post(`${VITE_APP_BACKEND_URL}/cards/get_inspired`, {
      messages: prompt
    })
    .then(response => {
      return response.data.text;
    })
    .catch(error => {
      console.error(error);
      throw new Error(
        error.response?.data?.message || 'Failed to get inspiration'
      );
    });
};

// card deletion function to back end
const deleteCardtoAPI = (deleteCardId) => {

  return axios.delete(`${VITE_APP_BACKEND_URL}/cards/${deleteCardId}`)
    .catch(err => {
      console.log(err);
      throw new Error(`Error deleting card ${deleteCardId}`);
    })
};

//card likes function to back end
const changLiketoAPI = (changeLikeCardID, newLikes) => {
  return axios.patch(`${VITE_APP_BACKEND_URL}/cards/${changeLikeCardID}`,
    { likes: newLikes })
    .catch(err => {
      console.log(err);
      throw new Error(`Error for changing card likes ${changeLikeCardID}`);
    })
};

//beginning of App

function App() {
  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inspirationStory, setInspirationStory] = useState('');

  const getAllBoards = () => {
    return getAllBoardsApi()
      .then(boards => {
        console.log("TRYTRY",boards);
        const newBoards = boards.map(convertBoardFromApi);
        setBoards(newBoards);
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  };
  useEffect(() => {
    getAllBoards();
  }, []);

  //new Board submission
  const addNewBoard = (boardData) => {
    addNewBoardApi(boardData)
      .then(response => {
        const convertedNewBoard = convertBoardFromApi(response);
        setBoards([...boards, convertedNewBoard]);
      })
      .catch(error => console.log(error));
  };

  // new card submission
  const addNewCard = (cardData) => {
    if (!selectedBoard) {
      alert('Please select a Board');
      console.log('No board selected');
      return;
    }
    addNewCardApi(cardData, selectedBoard.boardId)
      .then(response => {
        const convertedNewCard = convertCardFromApi(response);
        setCards([...cards, convertedNewCard]);
      })
      .catch(error => console.log(error));
  };


  //BoardList function
  const handleSelectBoard = (board) => {
    setSelectedBoard(board);
    getAllCardsApi(board.boardId)
      .then(cardsData => {
        const newCards = cardsData.map(convertCardFromApi);
        setCards(newCards);
      })
      .catch(error => console.log('Error loading cards:', error));
  };


  //card press like function front end
  const pressLikes = (LikedCardId) => {
    const card = cards.find(c => c.cardId === LikedCardId);
    if (!card) return;
    const newLikes = card.cardLikes + 1;
    setCards(cards =>
      cards.map(c =>
        c.cardId === LikedCardId
          ? { ...c, cardLikes: newLikes }
          : c
      )
    );

    changLiketoAPI(LikedCardId, newLikes);
  };

  //card deletion fuction front end
  const deleteCard = (deleteCardId) => {
    if (!window.confirm('Do you want to delete this card？')) {
      return;
    }
    return deleteCardtoAPI(deleteCardId)
      .then(() => {
        setCards(oldCards => {
          return oldCards.filter(card => card.cardId !== deleteCardId);
        });
      })
      .catch(err => {
        console.log(err.message);
      })
  };

  // AI getInspired functions
  const handleGetInspired = () => {
    if (!selectedBoard) {
      alert('Please select a Board first');
      return;
    }

    if (cards.length === 0) {
      alert('Please add some Cards first');
      return;
    }
    setLoading(true);

    const allCardMessages = cards
      .map(card => card.cardMessage)
      .join(', ');
    console.log(allCardMessages);
    postPromptToAPI(allCardMessages)
      .then(story => {
        setInspirationStory(story);
      })
      .finally(() => {
        setLoading(false);
      });
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>✨ Inspiration Board ✨</h1>
      </header>

      <section className="selected-board-section">
        {selectedBoard && (
          <SelectedBoard
            boardTitle={selectedBoard.boardTitle}
            author={selectedBoard.ownerName}
          />
        )}
      </section>

      <main className="main-layout">
        {/* 左列：Cards */}
        <div className="column left-column">
          <div className="board-selector">
            <h3>My Boards</h3>
            <BoardList
              boards={boards}
              onSelectBoard={handleSelectBoard}
            />
          </div>
          <div className="cards-section">
            <h2>Inspiration Cards</h2>
            <Board
              cards={cards}
              onToggleLikes={pressLikes}
              onDeleteCard={deleteCard}
            />
          </div>
        </div>

        {/* 中列：Forms（竖着排列）*/}
        <div className="column middle-column">
          <div className="form-container">
            <NewBoardForm onNewBoard={addNewBoard} />
          </div>
          <div className="form-container">
            <NewCardForm onNewCard={addNewCard} />
          </div>
        </div>

        {/* 右列：Get Inspired */}
        <div className="column right-column">
          <GetInspired
            onGetInspiredButton={handleGetInspired}
            inspirationStory={inspirationStory}
            loading={loading}
          />
        </div>
      </main>
    </div>
  );
}

export default App

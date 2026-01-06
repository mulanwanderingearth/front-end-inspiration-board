import { useState } from 'react'
import './App.css'
import SelectedBoard from './components/SelectedBoard'
import Board from './components/Board';
import BoardList from './components/BoardList';
import GetInspired from './components/GetInspired';
import axios from 'axios';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import { useSyncExternalStore } from 'react';




//example board and card
const exampleBoardList = [{
  boardId: 2048,
  boardTitle: 'Guards! Guards!',
  ownerName: 'Terry Pratchett',
},
{
  boardId: 2049,
  boardTitle: 'The Colour of Magic',
  ownerName: 'Terry Pratchett',
}];

const exampleCardList = [
  {
    cardId: 1024,
    cardMessage: 'a good bookshop is just a genteel Black Hole that knows how to read',
    cardLikes: 512,
  },
  {
    cardId: 1025,
    cardMessage: 'Knowledge = power = energy = matter = mass',
    cardLikes: 513,
  }];



//const endpoint 
const endpoint = "http://something";


// data transformation functions here








// all end points methods starting here 

// New board to back end
const addNewBoardApi = (boardData)=> {
  const {boardTitle,ownerName} = boardData;
  return axios.post(`${endpoint}/boards`,{
    boardTitle,
    ownerName
  })
  .then(response => response.data)
  .catch(error =>{
    console.log(error);
    throw error;
  });
};

// New card to back end 
const addNewCardApi = (cardData) => {
const {cardMessage} = cardData;
  return axios.post(`${endpoint}/boards/id/cards`,{
    cardMessage
  })
  .then(response => response.data)
  .catch(error =>{
    console.log(error);
    throw error;
  });
};

// AI function to back end
const postPromptToAPI = (prompt) => {
  return axios
    .post(`${endpoint}/get_inspired`, {
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

  return axios.delete(`${endpoint}/cards/${deleteCardId}`)
    .catch(err => {
      console.log(err);
      throw new Error(`Error deleting card ${deleteCardId}`);
    })
};

//card likes function to back end
const changLiketoAPI = (changeLikeCardID,newLikes) =>{
  return axios.patch(`${endpoint}/cards/${changeLikeCardID}`,
    {likes:newLikes})
    .catch(err => {
      console.log(err);
      throw new Error(`Error for changing card likes ${changeLikeCardID}`);
    })
};



//beginning of App

function App() {
  // const[boards,setBoards]=useState([]);
  // const[cards, setCards] =useState([]);

  // for testing purpose the examples are used here. 
  const [boards, setBoards] = useState(exampleBoardList);
  const [cards, setCards] = useState(exampleCardList);
  const [selectedboard, setSelectedBoard] = useState(exampleBoardList[0]);
  const[loading,setLoading] = useState(false); 
  const[inspirationStory, setInspirationStory] = useState('');

  // select a board -- change to function


  //new Board submission
  const addNewBoard = (boardData) => {
    addNewBoardApi(boardData)
      .then(response => {
        const convertedNewBoard = convertFromApi(response);
        setBoards([...boards, convertedNewBoard]);
      })
      .catch(error => console.log(error));
  };

  // new card submission
  const addNewCard = (cardData) => {
    addNewCardApi(cardData)
      .then(response => {
        const convertedNewCard = convertFromApi(response);
        setBoards([...cards, convertedNewCard]);
      })
      .catch(error => console.log(error));
  };


  //BoardList function
  const handleSelectBoard = (board) => {
    setSelectedBoard(board);
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
    setLoading(true);

    const allCardMessages = cards
      .map(card => card.cardMessage)
      .join(', ');

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
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <div>
          <BoardList 
          boards={boards}
          onSelectBoard={handleSelectBoard}
          />  
        </div>
        <div>
          <SelectedBoard
            boardTitle={selectedboard.boardTitle}
            author={selectedboard.ownerName}
          />
        </div>
        <div>

          <NewBoardForm onNewBoard={addNewBoard} />

        </div>
        <div>
          <Board
            cards={cards}
            onToggleLikes={pressLikes}
            onDeleteCard={deleteCard}
          />
          <h2 className='cardList'> Inspiration Cards</h2>
        </div>
        <div>
          
          <NewCardForm onNewCard={addNewCard} />
        </div>
        <div>
          <GetInspired
          onGetInspiredButton={handleGetInspired}
          inspirationStory={inspirationStory}
          loading={loading}
          />
        </div>
      </main>
    </div>
  )
}
export default App

import { useState } from 'react'
import './App.css'
import SelectedBoard from './components/SelectedBoard'
import Board from './components/Board';
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

//needs two functions converFromApi and convertToApi



// all end points methods starting here 
const addNewBoardApi = (boardData) => {
  const { boardTitle, ownerName } = boardData;
  return axios.post(`${endpoint}/boards`, {
    boardTitle,
    ownerName
  })
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
};

const addNewCardApi = (cardData) => {
  const { cardMessage } = cardData;
  return axios.post(`${endpoint}/boards/id/cards`, {
    cardMessage
  })
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
};

// card deletion function back end
const deleteCardAsync = (deleteCardId) => {

  return axios.delete(`${endpoint}/cards/${deleteCardId}`)
    .catch(err => {
      console.log(err);
      throw new Error(`Error deleting card ${deleteCardId}`);
    })
};

function App() {
  // const[boards,setBoards]=useState([]);
  // const[cards, setCards] =useState([]);


  // for testing purpose the examples are used here. 
  const [boards, setBoards] = useState(exampleBoardList);
  const [cards, setCards] = useState(exampleCardList);
  const [selectedboard, setSelectedBoard] = useState(exampleBoardList[0]);

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


  //card press like function front end
  const pressLikes = (LikedCardId) => {
    setCards(cards =>
      cards.map(card => {
        if (card.cardId == LikedCardId) {
          return { ...card, cardLikes: card.cardLikes + 1 };
        } else {
          return card;
        }
      })
    )
  };

  //card deletion fuction front end
  const deleteCard = (deleteCardId) => {
    return deleteCardAsync(deleteCardId)
      .then(() => {
        setCards(oldCards => {
          return oldCards.filter(card => card.cardId !== deleteCardId);
        });
      })
      .catch(err => {
        console.log(err.message);
      })
  };



  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <main>
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
          <h2 className='ai'> Get Inspired </h2>
        </div>
      </main>
    </div>
  )
}
export default App

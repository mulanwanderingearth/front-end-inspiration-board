import { useState } from 'react'
import './App.css'
import SelectedBoard from './components/SelectedBoard'
import Board from './components/Board';

import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
//example board and card
const exampleBoard = { 
	boardId: 2048,
	boardTitle: 'Guards! Guards!',
  ownerName: 'Terry Pratchett',
};

const exampleCardList = [
{
  cardMessageid: 1024,
  cardMessage:'a good bookshop is just a genteel Black Hole that knows how to read',
  cardLikes: 512,
},
{
  cardMessageid: 1025,
  cardMessage:'Knowledge = power = energy = matter = mass',
  cardLikes: 513,
}

];


function App() {
  const [board, setBoard] = useState(exampleBoard);
  const [cardsList, setCardsList] = useState(exampleCardList);

  console.log(board.boardTitle);


  const[boards,setBoards]=useState([]);
  const[cards, setCards] =useState([]);
  const addNewBoard=(boardData) =>{
    setBoards([...boards,boardData]);
  };
  const addNewCard=(cardData)=>{
    setCards([...cards,cardData]);

  };
  


  //board display cards functions
  const pressLikes =()=>{};

  const deleteCard =()=>{};

  return (
        <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <div>
          <SelectedBoard 
            boardTitle={board.boardTitle} 
            author={board.ownerName} 
          />
        </div>
        <div>
          
          <NewBoardForm onNewBoard={addNewBoard}/>

        </div>
        <div>
          <Board 
          cards={cardsList}
          onToggleLikes={pressLikes}
          onDeleteCard={deleteCard}
          />
          <h2 className='cardList'> Inspiration Cards</h2>
        </div>
          <div>
          {/* <h2 className='createCard'> Create A New Card</h2> */}
          <NewCardForm onNewCard = {addNewCard} />
        </div>
        <div>
          <h2 className='ai'> Get Inspired </h2>
        </div>
      </main>
    </div>
  )
}
export default App

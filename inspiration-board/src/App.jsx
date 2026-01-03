import { useState } from 'react'
import './App.css'
import SelectedBoard from './components/SelectedBoard'
import Board from './components/Board';

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
  const[cardsList,setCardsList] = useState(exampleCardList);




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
          <h2 className='Create_board'> Create A New Board</h2>
        </div>
        <div>
          <Board 
          cards={cardsList}
          onToggleLikes={pressLikes}
          onDeleteCard={deleteCard}
          />
        </div>
          <div>
          <h2 className='Create_card'> Create A New Card</h2>
        </div>
        <div>
          <h2 className='AI'> Get Inspired </h2>
        </div>
      </main>
    </div>
  )
}
export default App

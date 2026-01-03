import { useState } from 'react'
import './App.css'
import SelectedBoard from './components/SelectedBoard'
import NewBoardForm from './components/NewBoardForm';
//example board and card
const exampleBoard = { 
	boardId: 2048,
	boardTitle: 'Guards! Guards!',
  ownerNname: 'Terry Pratchett',
};

const exampleCard = {
  cardMessageid: 1024,
  cardMessage:'a good bookshop is just a genteel Black Hole that knows how to read',
  cardLikes: 512,
};



function App() {
  const [board, setBoard] = useState(exampleBoard);

  console.log(board.boardTitle);
  
  const addNewBoard=(boardData) =>{
  setBoard([...board,boardData]);
}
  return (
        <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <div>
          <SelectedBoard 
          boardTitle = {board.boardTitle}/>
        </div>
        <div>
          <h2 className='createBoard'> Create A New Board</h2>
          <NewBoardForm onNewBoard={addNewBoard}/>

        </div>
        <div>
          <h2 className='cardList'> Inspiration Cards</h2>
        </div>
          <div>
          <h2 className='createCard'> Create A New Card</h2>
        </div>
        <div>
          <h2 className='ai'> Get Inspired </h2>
        </div>
      </main>
    </div>
  )
}
export default App

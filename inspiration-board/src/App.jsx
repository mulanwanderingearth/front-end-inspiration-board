import { useState } from 'react'
import './App.css'
import SelectedBoard from './components/SelectedBoard'

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
          <h2 className='Create_board'> Create A New Board</h2>
        </div>
        <div>
          <h2 className='Card_list'> Inspiration Cards</h2>
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

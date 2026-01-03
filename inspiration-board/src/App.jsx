import { useState } from 'react'
import './App.css'
import NewBoardForm from './components/NewBoardForm'


function App() {
  const [boards, setBoards]=useState([])
  const addNewBoard=(boardData)=>{
  setBoards([...boards,boardData]);

}
  return (
        <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <div>
          <h2 className='selectedBoard'>Selected Boards</h2>
        </div>
        <div>
          <h2 className='boardSelection'>Boards</h2>
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

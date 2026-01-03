import { useState } from 'react'
import './App.css'

function App() {
 

  return (
        <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <div>
          <h2 className='Selected_board'>Selected Boards</h2>
        </div>
        <div>
          <h2 className='Board_selection'>Boards</h2>
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

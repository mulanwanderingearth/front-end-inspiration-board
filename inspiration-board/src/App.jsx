import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

  // return (
  //       <div className="App">
  //     <header className="App-header">
  //       <h1>Inspiration Board</h1>
  //     </header>
  //     <main>
  //       <div>
  //         <h2 className='Selected_board'>Selected Boards</h2>
  //       </div>
  //       <div>
  //         <h2 className='Board_selection'>Boards</h2>
  //       </div>
  //       <div>
  //         <h2 className='Create_board'> Create A New Board</h2>
  //       </div>
  //       <div>
  //         <h2 className='Card_list'> Inspiration Cards</h2>
  //       </div>
  //         <div>
  //         <h2 className='Create_card'> Create A New Card</h2>
  //       </div>
  //       <div>
  //         <h2 className='AI'> Get Inspired </h2>
  //       </div>
  //     </main>
  //   </div>
  // )
export default App

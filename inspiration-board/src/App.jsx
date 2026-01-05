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
  cardMessage:'a good bookshop is just a genteel Black Hole that knows how to read',
  cardLikes: 512,
},
{
  cardId: 1025,
  cardMessage:'Knowledge = power = energy = matter = mass',
  cardLikes: 513,
}];



//const endpoint 
const endpoint = "http://something";




// all end points methods starting here 


// card deletion function back end
const deleteCardAsync = (deleteCardId) =>{

  return axios.delete(`${endpoint}/cards/${deleteCardId}`)
    .catch (err =>{
      console.log(err);
      throw new Error(`Error deleting card ${deleteCardId}`);
    })
};

function App() {
  // const[boards,setBoards]=useState([]);
  // const[cards, setCards] =useState([]);


  // for testing purpose the examples are used here. 
  const[boards,setBoards]=useState(exampleBoardList);
  const[cards, setCards] =useState(exampleCardList);
  const[selectedboard, setSelectedBoard] = useState(exampleBoardList[0]); 

  // select a board -- change to function
  

  //new Board submission
  const addNewBoard=(boardData) =>{
    setBoards([...boards,boardData]); 
  };
  // new card submission
  const addNewCard=(cardData)=>{
    setCards([...cards,cardData]);

  };
  

  //card press like function front end
  const pressLikes =(LikedCardId)=>{
    setCards(cards =>
      cards.map(card =>{
        if(card.cardId == LikedCardId){
          return{...card,cardLikes : card.cardLikes +1}; 
        }else{
          return card;
        }
      })
    )
  };

  //card deletion fuction front end
  const deleteCard =(deleteCardId)=>{
    return deleteCardAsync(deleteCardId)
      .then(()=>{
        setCards( oldCards =>{
          return oldCards.filter(card => card.cardId !== deleteCardId);
        });
      })
      .catch(err =>{
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
          
          <NewBoardForm onNewBoard={addNewBoard}/>

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

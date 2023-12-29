
import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';

function App() {
  const [board,setBoard]=useState(Array(9).fill(null)); 
  const [xplaying,setXisPlaying]=useState(true);
  const [xScore,setXscore]=useState(0)
  const [oScore,setOscore]=useState(0)
  const [tie,setTie]=useState(0) ;
  const [gameOver,setGameover]=useState(false);
  const WIN_CONDITION=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ];

  const handleClickBox=(Id)=>{
    const updatedBoard=board.map((value,id)=>{
      if(Id===id)
          return xplaying===true? "X":"O"; 
      else
        return value;
    })
    // console.log(updatedBoard);
   const checkWinner=(updatedBoard)=>{
    for(let i=0;i<WIN_CONDITION.length;i++)
    {
      const [x,y,z]=WIN_CONDITION[i];
      if(updatedBoard[x] && updatedBoard[x]===updatedBoard[y] && updatedBoard[y]===updatedBoard[z])
      {
        console.log("Winner");
        return updatedBoard[x];
      }
    }

   }

    setBoard(updatedBoard);
    setXisPlaying(!xplaying);
    const Winner=checkWinner(updatedBoard);
    if(Winner)
    {
      if(Winner==="X")
      {
        setXscore(xScore+1);
        setGameover(true);
      }else{
        setOscore(oScore+1);
        setGameover(true);

      }
    }
    let filled=true;
    updatedBoard.map((item)=>{
      if(item===null){
        filled=false;
      }
    })
    if(filled&& Winner!=="X" &&Winner!=="O")
    {
      setTie(tie+1);
      // alert("tie");
    }




  }
  const reset=()=>{
     setGameover(false);
     setBoard(Array(9).fill(null))
  }
  const restartGame=()=>{
    setGameover(false);
    setBoard(Array(9).fill(null));
    setOscore(0);
    setXscore(0);
    setTie(0);
  }


  return (
    <div className="App">
        <ScoreBoard xScore= {xScore} oScore={oScore} tie={tie} playing={xplaying}/>
        <Board board={board} onClick={gameOver===true ? reset : handleClickBox}/>
        <button className='btn' onClick={reset}>Play Again</button>
        <button className='btn' onClick={restartGame}>Restart Game</button>
    </div>
  );
}

export default App;

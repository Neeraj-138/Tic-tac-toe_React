import React from 'react';
import Box from '../Box/Box';
import './Board.css'
function Board({board,onClick}) {

  return (
    <div className='board'>
        {board.map((item,id)=>(
            <Box id={id} value={item} onClick={ ()=> item === null && onClick(id)}/>            
        ))}


    </div>
  )
}

export default Board
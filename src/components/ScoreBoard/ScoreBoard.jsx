import React from 'react'
import './Scoreboard.css'
function ScoreBoard({xScore,oScore,tie,playing}) {
  return (
    <div className='scoreboard'>
        <span className={`x-score ${playing=== true? "xplay":""}`}>X-{xScore}</span>    
        <span className={`o-score ${playing=== false? "oplay":""}`}>O-{oScore}</span>    
        <span className='o-score'>Tie-{tie}</span>    
    </div>
  )
}

export default ScoreBoard
import React from 'react';
import { range } from '../../utils';

function Guess({guess}) {
  return <p className='guess'>
    {range(5).map(i => {
      if (guess === undefined) {
        return  <span className='cell' key={i}></span>
      }
      const letter = guess[i]
      const className = `cell ${letter.status}`
      return <span className={className} key={i}>{letter.letter}</span>
})}
  </p>;
}

export default Guess;

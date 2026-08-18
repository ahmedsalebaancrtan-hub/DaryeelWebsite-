import React from 'react'
import WinterCard from './WinterCard';

const WinterList = (props) => {
  return (
   <div className="board-grid">
            {props.list.map((item) => (
               <WinterCard need={item} />
            ))}
        </div>
  )
};

export default WinterList
import React from 'react';
import {nanoid} from 'nanoid';

/**
 * Вывод списка телепередач
 */
function TvProgram({tvItems}) {
const items = tvItems.map((item) => (<li key={nanoid()} className="list-group-item">
  <span className="tv-time">{item.time}</span>
    {item.title}
  <span className="item-channel">{item.channel}</span></li>))
  
  return (
    <ul className="list-group">
      {items}
    </ul>
  )
}

export default TvProgram

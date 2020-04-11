import React from 'react';
import {nanoid} from 'nanoid';

/**
 * Вывод списка стримов
 */

function Broadcast({broadcastItems}) {
const items = broadcastItems.map((item) => (<li key={nanoid()} className="list-group-item">
  <span className="play-icon">
    <img src="https://img.icons8.com/flat_round/64/000000/play--v1.png" alt="play"/>
  </span>
    {item.text}
  <span className="item-channel">{item.channel}</span></li>))
  
  return (
    <ul className="list-group">
      {items}
    </ul>
  )
}

export default Broadcast

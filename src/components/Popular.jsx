import React from 'react';
import {nanoid} from 'nanoid';

/**
 * Вывод списка популярных тем
 */
function Popular({popularItems}) {
const items = popularItems.map((item) => (<li key={nanoid()} className="list-group-item">
  <span className="section bold">{item.section}</span> — {item.text}
  </li>))
  
  return (
    <ul className="list-group">
      {items}
    </ul>
  )
}

export default Popular

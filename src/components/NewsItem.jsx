import React from 'react'

/**
 * Дочерний элемент `News`
 */
function NewsItem({icon, text, url}) {
  return (
    <li className="list-group-item">
      <span className="news-icon">{icon}</span><a href={url}>{text}</a>
    </li>
  )
}

export default NewsItem

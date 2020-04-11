import React from 'react';
import NewsItem from './NewsItem';

/**
 * Вывод списка новостей
 */

function News({news}) {
  const newsList = news.map((item) => <NewsItem key={item.id} {...item} />)

  return (
    <div className="news">
      <h5>Сейчас в СМИ</h5>
      <ul className="list-group">
        {newsList}
      </ul>
    </div>
  )
}

export default News


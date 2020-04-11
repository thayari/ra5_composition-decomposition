import React from 'react'

/**
 * Главное меню сайта
 */

function Navigation({navList}) {
   navList = ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Эфир'];
  const navItems = navList.map((item) => <li key={item} className="nav-item"><a className="nav-link" href="ya.ru">{item}</a></li>)
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        {navItems}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation

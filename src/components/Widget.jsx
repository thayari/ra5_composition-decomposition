import React from 'react'

/**
 * Контейнер для виджета
 */

function Widget({title, children}) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {children}
      </div>
    </div>
  )
}

export default Widget

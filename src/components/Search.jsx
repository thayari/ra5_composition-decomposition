import React from 'react';
import Logo from './Logo';

/**
 * Поисковый ввод
 */
function Search() {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <Logo />
      </div>
      <input type="text" className="form-control" />
      <div className="input-group-append">
        <button className="btn btn-primary" id="search">Найти</button>
      </div>
    </div>
  )
}

export default Search

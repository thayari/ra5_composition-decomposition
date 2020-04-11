import React from 'react'

const style = {
  textAlign: 'center',
  fontSize: '200%',
  fontWeight: '700',
}

/**
 * Вывод прогноза погоды
 */

function Weather({image, tempNow, tempDay, tempNight}) {
  return (
    <div className="row">
      <div className="col">
        <img className="img-fluid" src={image} alt=""/>
      </div>
      <div className="col" style={style}>
        {tempNow}
      </div>
      <div className="col-5">
        Днем {tempDay},<br />
        ночью {tempNight}
      </div>
    </div>
  )
}

export default Weather

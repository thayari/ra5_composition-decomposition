import React from 'react'
import Widget from './Widget'
import Weather from './Weather'
import Broadcast from './Broadcast'
import Popular from './Popular'
import TvProgram from './TvProgram'

const broadcastItems = [
  {
    text: 'Управление как искусство',
    channel: 'Успех',
  },
  {
    text: 'Ночь. Мир в это время',
    channel: 'earthTV',
  },
];

const popularItems = [
  {
    section: 'Недвижимость',
    text: 'о сталинках',
  },
  {
    section: 'Маркет',
    text: 'люстры и светильники',
  },
  {
    section: 'Авто.ру',
    text: 'привод 4х4',
  },
];

const tvItems = [
  {
    time: '2:00',
    title: 'ТНТ.Best',
    channel: 'THT International',
  },
  {
    time: '2:15',
    title: 'Джинглики',
    channel: 'Карусель INT',
  },
  {
    time: '2:25',
    title: 'Наедине со всеми',
    channel: 'Первый',
  }
]

/**
 * Блок с виджетами
 */

function WidgetsRow() {
  return (
    <div className="row">
      <div className="col">
        <Widget title="Погода">
          <Weather image = {process.env.PUBLIC_URL + "iconfinder_weather-few-clouds_118961.png"} tempNow='+17' tempDay='+20' tempNight='+12'/>
        </Widget>
        <Widget title="Посещаемое">
          <Popular popularItems={popularItems} />
        </Widget>
      </div>
      <div className="col">
        <Widget title="Карта">
          <img className="img-fluid" src={process.env.PUBLIC_URL + "map.png"} alt="map" />
        </Widget>
        <Widget title="Телепрограмма">
          <TvProgram tvItems={tvItems} />
        </Widget>
      </div>
      <div className="col">
        <Widget title="Эфир">
          <Broadcast broadcastItems={broadcastItems} />
        </Widget>
      </div>
    </div>
  )
}

export default WidgetsRow

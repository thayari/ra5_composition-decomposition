import React from 'react';
import {nanoid} from 'nanoid';
import './App.css';
import Search from './components/Search';
import News from './components/News';
import Navigation from './components/Navigation';
import WidgetsRow from './components/WidgetsRow';

const newsArray = [
  {
    icon: '🤣',
    text: 'Минфин отказался от вечеринки в Рязанской области',
    url: '#',
    id: nanoid(),
  },
  {
    icon: '😘',
    text: 'Australian отвергла возможность iPhone8 на Android',
    url: '#',
    id: nanoid(),
  },
  {
    icon: '😎',
    text: 'Иркутск оставили без воздуха',
    url: '#',
    id: nanoid(),
  },
  {
    icon: '🎉',
    text: 'В Китае начались продажи должников',
    url: '#',
    id: nanoid(),
  },
]

const navList = ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Эфир'];

function App() {
  return (
    <div className="container">
      <News news={newsArray} />
      <Navigation {...navList} />
      <Search />
      <WidgetsRow />
    </div>
  );
}

export default App;

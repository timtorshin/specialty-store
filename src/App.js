import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import CoffeeBlock from './components/CoffeeBlock';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Кофе в зёрнах</h2>
          <div className="content__items">
            <CoffeeBlock title="Эфиопия Сидамо" price="529" />
            <CoffeeBlock title="Руанда Мутетели" price="549" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

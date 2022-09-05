import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import CoffeeBlock from './components/CoffeeBlock';
import coffeeItems from './assets/coffee.json';

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
            {
              coffeeItems.map((obj) => (
                <CoffeeBlock {...obj} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

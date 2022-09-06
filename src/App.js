import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import CoffeeBlock from './components/CoffeeBlock';
import CoffeeLoader from './components/CoffeeBlock/CoffeeLoader'

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://631701e0cb0d40bc41490e8d.mockapi.io/items')
      .then(res => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

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
              isLoading
                ? [...new Array(6)].map((_, index) => <CoffeeLoader key={index} />)
                : items.map((obj) => <CoffeeBlock {...obj} key={obj.id} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

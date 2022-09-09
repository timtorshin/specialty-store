import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import CoffeeBlock from '../components/CoffeeBlock';
import CoffeeLoader from '../components/CoffeeBlock/CoffeeLoader';

export default function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://631701e0cb0d40bc41490e8d.mockapi.io/items')
      .then(res => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
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
  );
}

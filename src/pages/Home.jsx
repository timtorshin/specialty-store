import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import CoffeeBlock from '../components/CoffeeBlock';
import CoffeeLoader from '../components/CoffeeBlock/CoffeeLoader';
import PaginationBlock from '../components/PaginationBlock';
import { SearchContext } from '../App';
import { setCategoryId } from '../redux/slices/filterSlice';

export default function Home() {
  const { categoryId, sortType } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  const skeletons = [...new Array(6)].map((_, index) => <CoffeeLoader key={index} />);
  const coffee = items.map((obj) => <CoffeeBlock {...obj} key={obj.id} />);

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(`https://631701e0cb0d40bc41490e8d.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
      .then(res => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Кофе в зёрнах</h2>
      <div className="content__items">
        {isLoading ? skeletons : coffee}
      </div>
      <PaginationBlock onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
}

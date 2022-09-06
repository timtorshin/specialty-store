import React from 'react';

export default function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Все', 'Центральная Америка', 'Южная Америка', 'Африка', 'Азия'];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li 
            className={activeIndex === i ? 'active' : ''}
            onClick={() => onClickCategory(i)}
            key={i}
          >{value}</li>
        ))}
      </ul>
    </div>
  );
}

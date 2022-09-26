import React from 'react';

export default function Categories({ value, onChangeCategory }) {
  const categories = ['Все', 'Центральная Америка', 'Южная Америка', 'Африка', 'Азия'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li 
            className={value === i ? 'active' : ''}
            onClick={() => onChangeCategory(i)}
            key={i}
          >{categoryName}</li>
        ))}
      </ul>
    </div>
  );
}

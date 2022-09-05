import React from 'react';

export default function CoffeeBlock({ title, price, imageUrl, sizes, types }) {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  const typeNames = ['фильтр', 'эспрессо'];

  return (
    <div className="coffee-block">
      <img
        className="coffee-block__image"
        src={imageUrl}
        alt="Coffee"
      />
      <h4 className="coffee-block__title">{title}</h4>
      <div className="coffee-block__selector">
        <ul>
          {
            types.map((typeId) => (
              <li
                className={activeType === typeId ? 'active' : ''}
                onClick={() => setActiveType(typeId)}
              >{typeNames[typeId]}</li>
            ))
          }
        </ul>
        <ul>
          {
            sizes.map((size, i) => (
              <li
                className={activeSize === i ? 'active' : ''}
                onClick={() => setActiveSize(i)}
              >{size} г</li>
            ))
          }
        </ul>
      </div>
      <div className="coffee-block__bottom">
        <div className="coffee-block__price">от {price} ₽</div>
        <button className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>0</i>
        </button>
      </div>
    </div>
  );
}

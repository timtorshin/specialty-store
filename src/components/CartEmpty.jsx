import React from 'react';
import { Link } from 'react-router-dom';
import cartEmptyImg from '../assets/img/empty-cart-image.png';

export default function CartEmpty() {
  return (
    <>
      <div className="cart cart--empty">
        <h2>Корзина пустая &#128542;</h2>
        <p>Для того, чтобы заказать кофе, перейди на главную страницу</p>
        <img src={cartEmptyImg} alt="Empty Cart" />
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
}

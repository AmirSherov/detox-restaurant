'use client'
import { useState } from "react";
import React from "react";
import "./item.scss";

const Item = ({ imagePath }) => {
    const [counter , setCounter] = useState(1);
  return (
    <div className="item">
      <img className="item__image" src={imagePath} alt="Бизнес-ланч Рыбный" />
      <div className="item__info">
        <h3 className="item__title">Бизнес-ланч "Рыбный"</h3>
        <div className="item__details">
          <span>250 г</span>
          <span>346 ккал</span>
        </div>
        <ol className="item__description">
          <li>Бульон куриный с лапшой и яйцом</li>
          <li>Рис жареный с курицей</li>
          <li>Салат овощной с базиликово-медовой заправкой</li>
        </ol>
        <div className="item__footer">
          <div className="item__quantity">
            <button onClick={() => {if(counter > 1) setCounter(counter - 1)}} className="item__button">-</button>
            <span>{counter}</span>
            <button onClick={() => setCounter(counter + 1)} className="item__button">+</button>
          </div>
          <div className="item__price">1 порция / 189 грн</div>
        </div>
      </div>
    </div>
  );
};

export default Item;

'use client';
import React, { useState } from "react";
import "./modal.scss";

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="overlay-modal">
      <div className="modal-modal">
        <button className="close-button-modal" onClick={onClose}>
          &times;
        </button>
        <h2 className="title-modal">Заполните все поля правильно</h2>
        <form className="form-modal">
          <div className="left-side-modal">
            <label>
              <input type="text" placeholder="Иван" />
            </label>
            <label>
              <input type="text" placeholder="09752 666" />
            </label>
            <label>
              <input type="email" placeholder="Электронная почта" />
            </label>
            <label>
              <input type="text" placeholder="Программы питания" />
            </label>
            <label>
              <input type="text" placeholder="Специальные программы" />
            </label>
            <div className="grid-container-modal">
              <div><input type="text" placeholder="Улица" /></div>
              <div><input type="text" placeholder="Дом:199" /></div>
              <div><input type="text" placeholder="Этаж:99" /></div>
            </div>
            <div className="grid-container-2-modal">
              <div><input type="text" placeholder="Квартира:199" /></div>
              <div><input type="text" placeholder="Парадняя:199" /></div>
              <div><input type="text" placeholder="Домофон:199" /></div>
            </div>
            <div className="grid-container-3-modal">
              <label>
                <input className="radios-modal" type="radio" />
                Тест-день! Получить скидку -30%?
              </label>
              <label>
                <input className="radios-modal" type="radio" />
                Согласен с условиями сотрудничества
              </label>
            </div>
          </div>
          <div className="right-side-modal">
            <div className="dropdown-modal">
              <button className="dropbtn-modal">Время доставки</button>
              <div className="dropdown-content-modal">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="dropdown-modal">
              <button className="dropbtn-modal">Количество дней заказа</button>
              <div className="dropdown-content-modal">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="dropdown-modal">
              <button className="dropbtn-modal">Способ оплаты </button>
              <div className="dropdown-content-modal">
                <a href="#">Мне нужны приборы</a>
                <a href="#">Да, нужны</a>
                <a href="#">Нет, не нужно</a>
              </div>
            </div>
            <div className="dropdown-modal">
              <button className="dropbtn-modal">Пожелания</button>
              <div className="dropdown-content-modal">
                <a href="#">Мне нужны приборы</a>
                <a href="#">Да, нужны</a>
                <a href="#">Нет, не нужно</a>
              </div>
            </div>
            <div className="dropdown-modal">
              <button className="dropbtn-modal">Как с Вами связаться?</button>
              <div className="dropdown-content-modal">
                <a href="#">Мне нужны приборы</a>
                <a href="#">Да, нужны</a>
                <a href="#">Нет, не нужно</a>
              </div>
            </div>

          </div>
          <button type="submit" className="submit-button-modal">
            Заказать
          </button>
        </form>
      </div>
    </div>
  );
}
export default Modal;
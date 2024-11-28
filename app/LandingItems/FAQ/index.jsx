'use client'
import React from "react";
import "./faq.scss";
import { useState } from "react";
const FormWithFAQ = () => {
  const faqItems = [
    "Как осуществляется доставка правильного питания?",
    "Можно ли менять время доставки/место?",
    "Как и в чем приезжает еда?",
    "Когда Вы готовите?",
    "Какие продукты Вы используете?",
    "Я буду есть одно и то же?",
    "У меня аллергия и непереносимость определенных продуктов",
    "В какой очередности все есть?",
    "Можно ли замораживать программу?",
  ];

  return (
    <div className="faq-container">
      <div className="form">
        <h2>Оформить заказ</h2>
        <div className="inputGroup">
          <label htmlFor="name">Имя</label>
          <input id="name" type="text" placeholder="Иван" />
        </div>
        <div className="inputGroup error">
          <label htmlFor="phone">Номер телефона</label>
          <input id="phone" type="text" placeholder="0972140632" />
        </div>
        <div className="checkboxGroup">
          <label>
            <input className="oportunity" type="checkbox" />
            Тест-день! Получить скидку -30%?
          </label>
          <label>
            <input className="oportunity" type="checkbox" />
            Согласен с <a href="#">условиями сотрудничества</a>
          </label>
        </div>
        <div className="buttonGroup">
          <button className="primary">Заказ по телефону</button>
          <span>ИЛИ</span>
          <button onClick={() => setIsModalOpen(true)} className="secondary">Онлайн заказ</button>
        </div>
      </div>
      <div className="faq">
        <h2>Часто задаваемые вопросы</h2>
        <ul>
          {faqItems.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <span className="arrow">➔</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FormWithFAQ;

'use client'
import React from "react";
import "./faq.scss";
import Modal from "../Modal/index.jsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SmallModal from "../smallModal/index.jsx";
const FormWithFAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const [isSmallModalOpen, setIsSmallModalOpen] = useState(false);
  const faqItems = [
    t("FAQ.text-1"),
    t("FAQ.text-2"),
    t("FAQ.text-3"),
    t("FAQ.text-4"),
    t("FAQ.text-5"),
    t("FAQ.text-6"),
    t("FAQ.text-7"),
    t("FAQ.text-8"),
    t("FAQ.text-9")
  ];

  return (
    <div className="faq-container">
      <div className="form">
        <h2>{t("FAQ.text-10")}</h2>
        <div className="inputGroup">
          <label htmlFor="name">{t("FAQ.text-11")}</label>
          <input id="name" type="text" placeholder="Иван" />
        </div>
        <div className="inputGroup error">
          <label htmlFor="phone">{t("FAQ.text-12")}</label>
          <input id="phone" type="text" placeholder="0972140632" />
        </div>
        <div className="checkboxGroup">
          <label>
            <input className="oportunity" type="checkbox" />
            {t("FAQ.text-13")}
          </label>
          <label>
            <input className="oportunity" type="checkbox" />
            {t("FAQ.text-14")} <a href="#">{t("FAQ.text-15")}</a>
          </label>
        </div>
        <div className="buttonGroup">
          <button onClick={() => setIsSmallModalOpen(!isSmallModalOpen)} className="primary">{t("FAQ.text-18")}</button>
          <span>{t("FAQ.text-16")}</span>
          <button onClick={() => setIsOpen(!isOpen)} className="secondary">{t("FAQ.text-17")}</button>
        </div>
      </div>
      <div className="faq">
        <h2>{t("FAQ.text-19")}</h2>
        <ul>
          {faqItems.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <span className="arrow">➔</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="modals-combo">
        {isOpen && <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
        {isSmallModalOpen &&
          <SmallModal status={isSmallModalOpen} close={() => setIsSmallModalOpen(!isSmallModalOpen)} />
        }
      </div>
    </div>
  );
};

export default FormWithFAQ;

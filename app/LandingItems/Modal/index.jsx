'use client';
import React, { useState } from "react";
import "./modal.scss";
import { useTranslation } from "react-i18next";
function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const { t } = useTranslation();
  return (
    <div className="overlay-modal">
      <div className="modal-modal">
        <button className="close-button-modal" onClick={onClose}>
          &times;
        </button>
        <h2 className="title-modal">{t("LandingPageModal.text-1")}</h2>
        <div className="form-modal">
          <div className="left-side-modal">
            <label>
              <input type="text" placeholder={t("LandingPageModal.text-2")} />
            </label>
            <label>
              <input type="text" placeholder="09752 666" />
            </label>
            <label>
              <input type="email" placeholder={t("LandingPageModal.text-3")} />
            </label>
            <label>
              <input type="text" placeholder={t("LandingPageModal.text-4")} />
            </label>
            <label>
              <input type="text" placeholder={t("LandingPageModal.text-5")} />
            </label>
            <div className="grid-container-modal">
              <div><input type="text" placeholder={t("LandingPageModal.text-6")} /></div>
              <div><input type="text" placeholder={t("LandingPageModal.text-7")} /></div>
              <div><input type="text" placeholder={t("LandingPageModal.text-8")} /></div>
            </div>
            <div className="grid-container-2-modal">
              <div><input type="text" placeholder={t("LandingPageModal.text-9")} /></div>
              <div><input type="text" placeholder={t("LandingPageModal.text-10")} /></div>
              <div><input type="text" placeholder={t("LandingPageModal.text-11")} /></div>
            </div>
            <div className="grid-container-3-modal">
              <label>
                <input name="radio" className="radios-modal" type="radio" />
                <p>{t("LandingPageModal.text-12")}</p>
              </label>
              <label>
                <input name="radio" className="radios-modal" type="radio" />
                <p>{t("LandingPageModal.text-13")}</p>
              </label>
            </div>
          </div>
          <div className="right-side-modal">
            <div className="dropdown-modal">
              <button className="dropbtn-modal">{t("LandingPageModal.text-14")}</button>
              <div className="dropdown-content-modal">
                <a>Link 1</a>
                <a>Link 2</a>
                <a>Link 3</a>
              </div>
            </div>
            <div className="dropdown-modal">
              <button className="dropbtn-modal">{t("LandingPageModal.text-15")}</button>
              <div className="dropdown-content-modal">
                <a>Link 1</a>
                <a>Link 2</a>
                <a>Link 3</a>
              </div>
            </div>
            <div className="dropdown-modal">
              <button className="dropbtn-modal">{t("LandingPageModal.text-16")} </button>
              <div className="dropdown-content-modal">
                <a>text 1</a>
                <a>text 2</a>
                <a>text 3</a>
              </div>
            </div>
            <div className="dropdown-modal">
              <button className="dropbtn-modal">{t("LandingPageModal.text-17")}</button>
              <div className="dropdown-content-modal">
                <a>text 1</a>
                <a>text 2</a>
                <a>text 3</a>
              </div>
            </div>
            <div className="dropdown-modal">
              <button className="dropbtn-modal">{t("LandingPageModal.text-18")}</button>
              <div className="dropdown-content-modal">
                <a>text 1</a>
                <a>text 2</a>
                <a>text 3</a>
              </div>
            </div>

          </div>
          <button type="submit" className="submit-button-modal">
          {t("LandingPageModal.text-19")}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
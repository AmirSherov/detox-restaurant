'use client'
import React, { useState } from "react";
import LandingSlider from "./LandingItems/landing-slider";
import "./landing.scss";
import LandingPageInfo from "./LandingItems/landing-page-info-section";
import LandingIconItems from "./LandingItems/landing-icon-items/index.jsx";
import FoodPhotos from "./LandingItems/FoodPhoto";
import FAQ from "./LandingItems/FAQ";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const [imgPath, setImgPath] = useState("/images/mask1.png");
  const [mainText, setMainText] = useState("Detox программа – вкусное очищение организма");
  const [secondText, setSecondText] = useState("8 бутылочек натуральных смузи и фрешей.");
  const [sales, setSales] = useState("от 500 грн");
  const { t } = useTranslation();
  const slides = [
    {
      imgPath: "/images/mask1.png",
      mainText: "Detox программа – вкусное очищение организма",
      secondText: "8 бутылочек натуральных смузи и фрешей.",
      sales: "от 500 грн"
    },
    {
      imgPath: "/images/mask2.png",
      mainText: "Сервис правильного питания",
      secondText: "Худей быстро!",
      sales: "-30%"
    },
    {
      imgPath: "/images/mask3.png",
      mainText: "Доверьтесь профессионалам. Я Кобылинский Кирилл - основатель.",
      secondText: "Мастер спорта Украины по тяжелой атлетике. Высшее образование института физкультуры(НуфвсУ).",
      sales: "Всегда открыт для клиентов"
    },
    {
      imgPath: "/images/mask4.png",
      mainText: "Кето питание - вкусное и экстремальное быстрое похудение",
      secondText: "4 приема пищи",
      sales: "от 490грн"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const next = (currentSlide + 1) % slides.length;
    setCurrentSlide(next);
    setImgPath(slides[next].imgPath);
    setMainText(slides[next].mainText);
    setSecondText(slides[next].secondText);
    setSales(slides[next].sales);
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(prev);
    setImgPath(slides[prev].imgPath);
    setMainText(slides[prev].mainText);
    setSecondText(slides[prev].secondText);
    setSales(slides[prev].sales);
  };

  function goToSlide(index) {
    setCurrentSlide(index);
    setImgPath(slides[index].imgPath);
    setMainText(slides[index].mainText);
    setSecondText(slides[index].secondText);
    setSales(slides[index].sales);
  }
  return (
    <div className="landing-page-container">
      <div className="slider default">
        <div className="slider-content">
          <LandingSlider
            key={imgPath}
            imgPath={imgPath}
            mainText={mainText}
            secondText={secondText}
            sales={sales}
          />
        </div>
      </div>
      <div className="indicators-container">
        <button className="prev-arrow" onClick={prevSlide}>
          &lt;
        </button>
        <div className="indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            >
            </button>
          ))}
        </div>
        <button className="next-arrow" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      <LandingIconItems />
      <section className="landing-buttons-section">
        <button>
          {t("LandingPage.button-program")}
        </button>
        <button>
          {t("LandingPage.button-special")}
        </button>
      </section>
      <LandingPageInfo />
      <FoodPhotos />
      <FAQ />
    </div>
  );
}

'use client'
import React, { useState } from "react";
import LandingSlider from "./landing-slider";
import "./landing.scss";
import LandingPageInfo from "./landing-page-info-section"
import LandingIconItems from "./landing-icon-items/index.jsx"
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const nextSlide = () => {
    const next = (currentSlide + 1) % slides.length;
    setCurrentSlide(next);
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(prev);
  };

  function goToSlide(index) {
    setCurrentSlide(index);
  }

  return (
    <div className="landing-page-container">
      <div className="slider">
        <div className="slider-content">
          <LandingSlider
            imgPath={`${slides[currentSlide].imgPath}`}
            mainText={`${slides[currentSlide].mainText}`}
            secondText={`${slides[currentSlide].secondText}`}
            sales={`${slides[currentSlide].sales}`}
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
          Программа питания
        </button>
        <button>
          Специальные программы
        </button>
      </section>
      <LandingPageInfo />
    </div>
  );
}

import React from "react";
import "./landingIconItems.scss";

const FeaturesComponent = () => {
  const features = [
    {
      image: "/images/eco.png",
      text: "Бережём природу. Эко-тара и проборы.",
    },
    {
      image: "/images/serving.png",
      text: "28 дней без повторения, более 300 блюд!",
    },
    {
      image: "/images/time.png",
      text: "Бесплатно заменяем блюда и ингредиенты.",
    },
    {
      image: "/images/night.png",
      text: "Готовим ночью, упаковываем и отправляем Вам!",
    },
    {
      image: "/images/deliver.png",
      text: "Ежедневная удобная и бесплатная доставка с 6:00 до 10:00.",
    },
    {
      image: "/images/time2.png",
      text: "Сохраняем Вашу энергию и до 14 часов в неделю, освобождая от готовки!",
    },
  ];

  return (
    <div className="features-container">
      {features.map((feature, index) => (
        <div className="feature" key={index}>
          <img src={feature.image} alt="Feature" className="feature-image" />
          <p className="feature-text">{feature.text}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesComponent;

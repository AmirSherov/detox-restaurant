import React from "react";
import "./landingIconItems.scss";
import { useTranslation } from "react-i18next";
const FeaturesComponent = () => {
  const { t } = useTranslation();
  const features = [
    {
      image: "/images/eco.png",
      text: t("LandingPageIcons.text-1"),
    },
    {
      image: "/images/serving.png",
      text: t("LandingPageIcons.text-2"),
    },
    {
      image: "/images/time.png",
      text: t("LandingPageIcons.text-3"),
    },
    {
      image: "/images/night.png",
      text: t("LandingPageIcons.text-4"),
    },
    {
      image: "/images/deliver.png",
      text: t("LandingPageIcons.text-5"),
    },
    {
      image: "/images/time2.png",
      text: t("LandingPageIcons.text-6"),
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

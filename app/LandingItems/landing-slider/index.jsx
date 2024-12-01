import "./landing-slider.scss";
import { useTranslation } from "react-i18next";
export default function LandingSlider({
    imgPath,
    mainText,
    secondText,
    sales,
})
{
    const { t } = useTranslation();
    return (
        <div className="landing-slider-main-container">
            <div className="landing-slider-icons">
                <div>Ккал</div>
                <div><img src="/images/fish.png" alt="" /></div>
                <div><img src="/images/carrot.png" alt="" /></div>
                <div><img src="/images/bottle.png" alt="" /></div>
                <div><img src="/images/meat.png" alt="" /></div>
                <div><img src="/images/table.png" alt="" /></div>
            </div>
            <div className="landing-slider-text">
                <div className="text-main">
                    {mainText}
                </div>
                <div className="second-text">
                    {secondText}
                </div>
                <section className="button-price">
                    <button>{t("LandingSlider.text-1")}</button>
                    <div className="price">
                        <h3>{t("LandingSlider.text-2")} </h3>
                        <h1>{sales}</h1>
                    </div>
                </section>
            </div>
            <div className="landing-slider-images">
                <img className="ball" src="/images/left-side-ball.png" alt="" />
                <img className="getting-img" src={`${imgPath}`} alt="" />
            </div>
        </div>
    );
}

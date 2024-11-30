import "./aboutBegin.scss";
import { useTranslation } from "react-i18next";
export default function AboutBegin() {
    const { t } = useTranslation();
    return (
        <>
            <div className="aboutBegin-container">
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
                        {t("AboutBegin.text-1")}
                    </div>
                    <div className="second-text">
                        {t("AboutBegin.text-2")}
                    </div>
                    <div className="third-text">
                        {t("AboutBegin.text-3")}
                    </div>
                    <div className="fourht-text">
                        {t("AboutBegin.text-4")}
                    </div>
                </div>
                <div className="landing-slider-images">
                    <img className="ball" src="/images/left-side-ball.png" alt="" />
                    <img className="getting-img" src="/images/mask5.png" alt="" />
                </div>
            </div>
        </>
    )
}
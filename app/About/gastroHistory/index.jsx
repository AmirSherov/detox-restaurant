import "./gastroHistory.scss";
import { useTranslation } from "react-i18next";
export default function GastroHistory() {
    const { t } = useTranslation(); 
    return (
        <div className="gastroHistory-container">
            <div className="gastroHistory-content">
                <div className="gastroHistory-img-side">
                    <img src="/images/pocket.png" alt="GastroChef image" />
                </div>
                <div className="gastroHistory-text-side">
                    <div>{t("AboutHistory.text-1")}</div>
                    <div>{t("AboutHistory.text-2")}</div>
                    <div>{t("AboutHistory.text-3")}</div>
                    <div>{t("AboutHistory.text-4")}</div>
                    <div>
                        {t("AboutHistory.text-5")}
                    </div>
                    <div className="team-name">{t("AboutHistory.text-6")}</div>
                </div>
            </div>
            <div className="main-img">
                <img src="/images/gastroChefs.png" alt="GastroChef Team" />
            </div>
        </div>
    );
}

import "./gastroEasy.scss";
import { useTranslation } from "react-i18next";
export default function gastroEasy() {
  const { t } = useTranslation();
  return (
    <div className="gastroEasy-container">
      <div className="gastroEasy-content">
        <div className="gastroEasy-text-side">
          <h2>{t("AboutEasy.text-1")}</h2>
          <p>
            {t("AboutEasy.text-2")}
          </p>
          <p>
          {t("AboutEasy.text-3")}
          </p>
          <p>
          {t("AboutEasy.text-4")}
          </p>
          <p>
          {t("AboutEasy.text-5")}
          </p>
          <div className="social-links">
            <a href="#">Instagram</a> | <a href="#">Facebook</a>
          </div>
        </div>
        <div className="gastroEasy-img-side">
          <img src="/images/gastroEasy.png" alt="GastroChef food" />
        </div>
      </div>
    </div>
  );
}

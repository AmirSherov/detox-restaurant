import "./businesItem.scss"
import { useTranslation } from "react-i18next"
export default function BusinesMainItem() {
    const { t } = useTranslation();
    return (
        <>
            <div className="busines-main-item-container">
                <img className="busines-lunch-img" src="/images/sweet_balls1.png" alt="" />
                <div className="text-container">
                    <div>{t("BusinessMainItem.text-1")}</div>
                    <div>{t("BusinessMainItem.text-2")}
                    </div>
                    <div>{t("BusinessMainItem.text-3")}
                    </div>
                    <div>{t("BusinessMainItem.text-4")}
                    </div>
                    <div>{t("BusinessMainItem.text-5")}</div>
                    <div>
                        <button>{t("BusinessMainItem.text-6")}</button>
                    </div>
                </div>
            </div>
        </>
    )
}
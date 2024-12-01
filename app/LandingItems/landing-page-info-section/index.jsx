import "./landingPageInfoSection.scss"
import { useTranslation } from "react-i18next"
export default function LandingPageInfoSection() {
    const { t } = useTranslation();
    return (
        <>
            <div className="nutrition-program">
                <div className="header-info">
                    <div className="programs">
                        <div>{t("LandingPageInfoSection.programs.text-1")}<br /><span>{t("LandingPageInfoSection.programs.text-2")}</span></div>
                        <div>{t("LandingPageInfoSection.programs.text-3")}<br />{t("LandingPageInfoSection.programs.text-4")}</div>
                        <div className="active">{t("LandingPageInfoSection.programs.text-5")}<br /><span>{t("LandingPageInfoSection.programs.text-6")}</span></div>
                        <div>{t("LandingPageInfoSection.programs.text-7")}<br /><span>{t("LandingPageInfoSection.programs.text-8")}</span></div>
                        <div>{t("LandingPageInfoSection.programs.text-9")}<br /><span>{t("LandingPageInfoSection.programs.text-10")}</span></div>
                        <div>{t("LandingPageInfoSection.programs.text-11")}<br /><span>{t("LandingPageInfoSection.programs.text-12")}</span></div>
                        <div>{t("LandingPageInfoSection.programs.text-13")}<br /><span>{t("LandingPageInfoSection.programs.text-14")}</span></div>
                    </div>
                </div>
                <div className="schedule-section">
                    <div className="schedule-left-side">
                        <div className="fitnes-info">
                            <div className="title">
                                <h1>{t("LandingPageInfoSection.schedule-left.text-1")}</h1>
                                <h3>{t("LandingPageInfoSection.schedule-left.text-2")}</h3>
                            </div>
                            <div className="main-text">
                            {t("LandingPageInfoSection.schedule-left.text-3")}
                            </div>
                        </div>
                        <div className="prices-section">
                            <div className="item-left-side">
                                <div>{t("LandingPageInfoSection.schedule-left.text-4")}</div>
                                <div>{t("LandingPageInfoSection.schedule-left.text-5")}</div>
                                <div>{t("LandingPageInfoSection.schedule-left.text-6")}</div>
                            </div>
                            <div className="item-left-side">
                                <div>{t("LandingPageInfoSection.schedule-left.text-7")}</div>
                                <div></div>
                                <div>{t("LandingPageInfoSection.schedule-left.text-8")}</div>
                            </div>
                            <div className="item-left-side">
                                <div>{t("LandingPageInfoSection.schedule-left.text-9")}</div>
                                <div>{t("LandingPageInfoSection.schedule-left.text-10")}</div>
                                <div>{t("LandingPageInfoSection.schedule-left.text-11")}</div>
                            </div>
                            <div className="item-left-side">
                                <div>{t("LandingPageInfoSection.schedule-left.text-12")}</div>
                                <div>{t("LandingPageInfoSection.schedule-left.text-13")}</div>
                                <div>{t("LandingPageInfoSection.schedule-left.text-14")}</div>
                            </div>
                            <div className="item-left-side">
                                <div>{t("LandingPageInfoSection.schedule-left.text-15")}</div>
                                <div>{t("LandingPageInfoSection.schedule-left.text-16")}</div>
                                <div>{t("LandingPageInfoSection.schedule-left.text-17")}</div>
                            </div>
                            <div className="item-left-side">
                                <div>{t("LandingPageInfoSection.schedule-left.text-18")}</div>
                                <div>{t("LandingPageInfoSection.schedule-left.text-19")}</div>
                                <div>{t("LandingPageInfoSection.schedule-left.text-20")}</div>
                            </div>
                        </div>
                        <button className="schedule-button">{t("LandingPageInfoSection.schedule-left.text-21")}</button>
                    </div>
                    <div className="schedule-right-side">
                        <div className="days">
                            <div className="active">{t("LandingPageInfoSection.schedule-right.days.text-1")}</div>
                            <div>{t("LandingPageInfoSection.schedule-right.days.text-2")}</div>
                            <div>{t("LandingPageInfoSection.schedule-right.days.text-3")}</div>
                            <div>{t("LandingPageInfoSection.schedule-right.days.text-4")}</div>
                            <div>{t("LandingPageInfoSection.schedule-right.days.text-5")}</div>
                            <div>{t("LandingPageInfoSection.schedule-right.days.text-6")}</div>
                            <div>{t("LandingPageInfoSection.schedule-right.days.text-7")}</div>
                        </div>
                        <div className="schedule">
                            <div className="items">
                                <div>{t("LandingPageInfoSection.schedule-right.items.text-1")}<br /> <span>{t("LandingPageInfoSection.schedule-right.items.text-2")}</span></div>
                                <div>
                                {t("LandingPageInfoSection.schedule-right.items.text-3")}
                                </div>
                                <div>
                                {t("LandingPageInfoSection.schedule-right.items.text-4")}
                                </div>
                            </div>
                            <div className="items">
                                <div> {t("LandingPageInfoSection.schedule-right.items.text-5")} <br /> <span>{t("LandingPageInfoSection.schedule-right.items.text-6")}</span></div>
                                <div>
                                {t("LandingPageInfoSection.schedule-right.items.text-7")}
                                </div>
                                <div>
                                {t("LandingPageInfoSection.schedule-right.items.text-8")}
                                </div>
                            </div>
                            <div className="items">
                                <div>{t("LandingPageInfoSection.schedule-right.items.text-9")}<br /> <span>{t("LandingPageInfoSection.schedule-right.items.text-10")}</span></div>
                                <div>
                                {t("LandingPageInfoSection.schedule-right.items.text-11")}
                                </div>
                                <div>
                                {t("LandingPageInfoSection.schedule-right.items.text-12")}
                                </div>
                            </div>
                            <div className="items">
                                <div>{t("LandingPageInfoSection.schedule-right.items.text-13")} <br /> <span>{t("LandingPageInfoSection.schedule-right.items.text-14")}</span></div>
                                <div>
                                {t("LandingPageInfoSection.schedule-right.items.text-15")}
                                </div>
                                <div>
                                {t("LandingPageInfoSection.schedule-right.items.text-16")}
                                </div>
                            </div>
                            <div className="items">
                                <div>{t("LandingPageInfoSection.schedule-right.items.text-17")} <br /> <span>{t("LandingPageInfoSection.schedule-right.items.text-18")}</span></div>
                                <div>
                                {t("LandingPageInfoSection.schedule-right.items.text-19")}
                                </div>
                                <div>
                                {t("LandingPageInfoSection.schedule-right.items.text-20")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

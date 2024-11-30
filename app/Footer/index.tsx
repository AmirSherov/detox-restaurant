'use client'
import "./footer.scss"
import { useTranslation } from "react-i18next";
import { FaTelegram, FaFacebook, FaYoutube, FaViber } from "react-icons/fa";
export default function Footer() {
    const { t } = useTranslation();
    return (
        <>
            <div className="footer-container">
                <div className="links">
                    <div>{t("Footer.text-1")}</div>
                    <div>{t("Footer.text-2")}</div>
                    <div>{t("Footer.text-3")}</div>
                    <div>{t("Footer.text-4")}</div>
                    <div>{t("Footer.text-5")}</div>
                </div>
                <div className="logo">
                    <img src="/images/logo.png" alt="" />
                    <h1>Healty ration</h1>
                </div>
                <div className="social">
                    <div>{t("Footer.text-7")}</div>
                    <div>{t("Footer.text-8")}</div>
                    <div>FAQ</div>
                    <div>
                        <span><FaTelegram /></span>
                        <span><FaFacebook /></span>
                        <span><FaYoutube /></span>
                        <span><FaViber /></span>
                    </div>
                    <div>+38 (068) 949 - 49 - 19</div>
                </div>
            </div>
        </>
    )
}
'use client'
import "./nav.scss"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import SmallModal from "../LandingItems/smallModal/index.jsx"
import { useTranslation } from "react-i18next"
function Nav() {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [isSmallModalOpen, setIsSmallModalOpen] = useState(false)
    const { t, i18n } = useTranslation();
    const [ru, setRu] = useState(true)
    const [en, setEn] = useState(false)
    const openMenu = () => {
        setIsOpen(!isOpen)
    }
    const switchToRu = () => {
        i18n.changeLanguage('ru');
        setRu(true);
        setEn(false);
    };

    const switchToEn = () => {
        i18n.changeLanguage('en');
        setRu(false);
        setEn(true);
    };
    return (
        <>
            <div className="nav-container">
                <div className="up-side">
                    <div className="logo-container">
                        <img width={200} height={100} src="/images/logo.png" alt="" />
                        <h1>healthy ration</h1>
                    </div>
                    <div className="nav-url-container">
                        <div onClick={() => { router.push('/') }}>{t("Header.nav-url-container-program")}</div>
                        <div onClick={() => { router.push('/BusinesLunchs') }}>{t("Header.nav-url-container-business")}</div>
                        <div onClick={() => { router.push('/GastroShop') }}>{t("Header.nav-url-container-gastro")}</div>
                        <div onClick={() => { router.push('/About') }}>{t("Header.nav-url-container-about")}</div>
                        <div onClick={() => { router.push('/Blog') }}>{t("Header.nav-url-container-blog")}</div>
                    </div>
                    <div className="number-container">
                        <h3>+38 (068)949 - 49 -19</h3>
                    </div>
                </div>
                <div className="down-side">
                    <div className={ru ? "lang-active" : ''} onClick={switchToRu}>RU</div>
                    <div className={en ? "lang-active" : ''} onClick={switchToEn}>EN</div>
                </div>
                <div className="mobile-media">
                    <div className="logo-container">
                        <img height={100} width={150} src="/images/logo.png" alt="" />
                        <h4>healthy ration</h4>
                    </div>
                    <div onClick={() => { setIsSmallModalOpen(true) }} className="phone-number">
                        <img src="/images/phone-icon.png" alt="" />
                    </div>
                    <div onClick={() => { openMenu() }} className="burger-menu">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="line"></div>
                </div>
                <div className={`mobile-menu ${isOpen ? 'open' : 'сlosing'}`}>
                    <div className="menu-items">
                        <div className="menu-item" onClick={() => { router.push('/'), openMenu() }}>{t("Header.nav-url-container-program")}</div>
                        <div className="menu-item" onClick={() => { router.push('/BusinesLunchs'), openMenu() }}>{t("Header.nav-url-container-business")}</div>
                        <div className="menu-item" onClick={() => { router.push('/GastroShop'), openMenu() }}>{t("Header.nav-url-container-gastro")}</div>
                        <div className="menu-item" onClick={() => { router.push('/About'), openMenu() }}>{t("Header.nav-url-container-about")}</div>
                        <div className="menu-item" onClick={() => { router.push('/Blog'), openMenu() }}>{t("Header.nav-url-container-blog")}</div>
                    </div>
                    <div className="language-switcher">
                  <div className={ru ? "lang-active-mobile" : 'lang-btn-mobile'} onClick={switchToRu}>RU</div>
                    <div className={en ? "lang-active-mobile" : 'lang-btn-mobile'} onClick={switchToEn}>EN</div>
                    </div>

                    <div className="phone-number-mobile">
                        +38 (068) 949 - 49 -19
                    </div>

                    <div onClick={() => { openMenu() }} className="close-btn">
                        <span>&times;</span>
                    </div>
                </div>
                <SmallModal status={isSmallModalOpen} close={() => setIsSmallModalOpen(false)} />
            </div>
        </>
    )
}
export default Nav
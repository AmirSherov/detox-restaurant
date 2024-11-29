'use client'
import "./nav.scss"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import SmallModal from "../LandingItems/smallModal/index.jsx"
function Nav() {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [isSmallModalOpen, setIsSmallModalOpen] = useState(false)

    const openMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="nav-container">
                <div className="up-side">
                    <div className="logo-container">
                        <img width={200} height={100} src="/images/logo.png" alt="" />
                        <h1>healthy ration</h1>
                    </div>
                    <div className="nav-url-container">
                        <div onClick={() => { router.push('/') }}>Программы питания</div>
                        <div onClick={() => { router.push('/BusinesLunchs') }}>Бизнес-ланчи</div>
                        <div onClick={() => { router.push('/GastroShop') }}>Gastro Shop</div>
                        <div onClick={() => { router.push('/About') }}>О нас</div>
                        <div onClick={() => { router.push('/Blog') }}>Блог</div>
                    </div>
                    <div className="number-container">
                        <h3>+38 (068)949 - 49 -19</h3>
                    </div>
                </div>
                <div className="down-side">
                    <div>RU</div>
                    <div>UA</div>
                    <div>EN</div>
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
                        <div className="menu-item" onClick={() => { router.push('/') , openMenu() }}>Программы питания</div>
                        <div className="menu-item" onClick={() => { router.push('/BusinesLunchs') , openMenu() }}>Бизнес-ланчи</div>
                        <div className="menu-item" onClick={() => { router.push('/GastroShop') , openMenu() }}>Gastro Shop</div>
                        <div className="menu-item" onClick={() => { router.push('/About'), openMenu() }}>О нас</div>
                        <div className="menu-item" onClick={() => { router.push('/Blog'), openMenu() }}>Блог</div>
                    </div>
                    <div className="language-switcher">
                        <button className="lang-btn active">RU</button>
                        <button className="lang-btn">UA</button>
                        <button className="lang-btn">EN</button>
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
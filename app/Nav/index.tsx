'use client'
import "./nav.scss"
import { useState } from "react"

function Nav() {
    const [isOpen, setIsOpen] = useState(false)

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
                        <div>Программы питания</div>
                        <div>Бизнес-ланчи</div>
                        <div>Gastro Shop</div>
                        <div>О нас</div>
                        <div>Блог</div>
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
                    <div className="phone-number">
                        <img src="/images/phone-icon.png" alt="" />
                    </div>
                    <div onClick={()=>{openMenu() }} className="burger-menu">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="line"></div>
                </div>
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <div className="menu-items">
                        <div className="menu-item">Программы питания</div>
                        <div className="menu-item">Бизнес-ланчи</div>
                        <div className="menu-item">Gastro Shop</div>
                        <div className="menu-item">О нас</div>
                        <div className="menu-item">Блог</div>
                    </div>

                    <div className="language-switcher">
                        <button className="lang-btn active">RU</button>
                        <button className="lang-btn">UA</button>
                        <button className="lang-btn">EN</button>
                    </div>

                    <div className="phone-number-mobile">
                        +38 (068) 949 - 49 -19
                    </div>

                    <div onClick={()=>{openMenu() }} className="close-btn">
                        <span>&times;</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Nav
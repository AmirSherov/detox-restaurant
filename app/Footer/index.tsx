import "./footer.scss"
import { FaTelegram, FaFacebook, FaYoutube, FaViber } from "react-icons/fa";
export default function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="links">
                    <div>Программы питания</div>
                    <div>О нас</div>
                    <div>Бизнес-ланчи</div>
                    <div>Блог</div>
                </div>
                <div className="logo">
                    <img src="/images/logo.png" alt="" />
                    <h1>Сервис здорового питания</h1>
                </div>
                <div className="social">
                    <div>Условия
                        сотрудничества</div>
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
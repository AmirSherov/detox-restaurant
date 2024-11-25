import "./landingPageInfoSection.scss"
export default function LandingPageInfoSection() {
    return (
        <>
            <div className="nutrition-program">
                <div className="header">
                    <div className="programs">
                        <div>EXPRESS FIT<br /><span>800 ккал</span></div>
                        <div>SLIM<br />1000 ккал</div>
                        <div className="active">FITNESS<br /><span>1300 ккал</span></div>
                        <div>BALANCE<br /><span>1600 ккал</span></div>
                        <div>BALANCE +<br /><span>1800 ккал</span></div>
                        <div>STRONG<br /><span>2000 ккал</span></div>
                        <div>MAXI FIT<br /><span>2400 ккал</span></div>
                    </div>
                </div>
                <div className="schedule-section">
                    <div className="schedule-left-side">
                        <div className="fitnes-info">
                            <div className="title">
                                <h1>FITNESS</h1>
                                <h3>1300 ккал</h3>
                            </div>
                            <div className="main-text">
                                Программа здорового питания Express Fit. Идеально для: похудения в кратчайшие сроки, повышения энергии и сил, снижения веса при сидячем образе жизни.
                            </div>
                        </div>
                        <div className="prices-section">
                            <div className="item">
                                <div>Тестовый день</div>
                                <div>510 грн</div>
                                <div>347 грн</div>
                            </div>
                            <div className="item">
                                <div>1 день</div>
                                <div></div>
                                <div>510 грн</div>
                            </div>
                            <div className="item">
                                <div>От 7 дней</div>
                                <div>510грн</div>
                                <div>490грн</div>
                            </div>
                            <div className="item">
                                <div>От 14 дней</div>
                                <div>510грн</div>
                                <div>445грн</div>
                            </div>
                            <div className="item">
                                <div>От 30 дней</div>
                                <div>510грн</div>
                                <div>445грн</div>
                            </div>
                            <div className="item">
                                <div>Завтрак и ужин</div>
                                <div>-15%</div>
                                <div>443грн</div>
                            </div>
                        </div>
                        <button>Заказать</button>
                    </div>
                    <div className="schedule-right-side">
                        <div className="days">
                            <div className="active">ПН</div>
                            <div>ВТ</div>
                            <div>СР</div>
                            <div>ЧТ</div>
                            <div>ПТ</div>
                            <div>СБ</div>
                            <div>ВС</div>
                        </div>
                        <div className="schedule">
                            <div className="items">
                                <div>Завтрак <br /> <span>7.00 - 9.00</span></div>
                                <div>
                                    - Фриттата с сыром и кабачками
                                </div>
                                <div>
                                    170гр
                                </div>
                            </div>
                            <div className="items">
                                <div> 2-й Завтрак <br /> <span>10.00 - 12.00</span></div>
                                <div>
                                - Фермерский йогурт
                                - Полезное печенье из сухофруктов и орехов
                                </div>
                                <div>
                                200гр
                                2 шт
                                </div>
                            </div>
                            <div className="items">
                                <div>Обед <br /> <span>13.00 - 15.00</span></div>
                                <div>
                                - Люля-кебаб из индейки
                                - Летний салат с маслинами и сыром
                                </div>
                                <div>
                                100гр
                                100гр
                                </div>
                            </div>
                            <div className="items">
                                <div>Полдник <br /> <span>16.00 - 17.30</span></div>
                                <div>
                                - Творожное суфле с какао и вишей
                                </div>
                                <div>
                                100гр
                                </div>
                            </div>
                            <div className="items">
                                <div>Ужин <br /> <span>19.00 - 20.00</span></div>
                                <div>
                                - Рыбный терен
                                - Овощи гриль
                                </div>
                                <div>
                                100гр
                                150гр
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
'use client'
import { useEffect } from "react";
import "./busines.scss"
import Item from "./Item"
import FoodPhoto from "../LandingItems/FoodPhoto"
export default function BusinesLunchs() {
    useEffect(() => {

        const handleScroll = () => {
            const elements = document.querySelectorAll(".fade-in");

            elements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (rect.top >= 0 && rect.top + 250 <= windowHeight) {
                    if (!element.classList.contains("active")) {
                        element.classList.add("active");
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <div className="busines-lunch-container">
                <header>
                    <img className="busines-lunch-img" src="./images/sweet_balls1.png" alt="" />
                        <div className="text-container">
                            <div>Бизнес-ланчи</div>
                            <div>Представляем сладкую коллекцию полезных конфет. Созданы с любовью и изготовлены
                                из натуральных продуктов без добавления сахара - с заботой о вас и ваших близких!
                            </div>
                            <div>Стоимость доставки 60 грн по предварительному заказу (за 1 сутки).
                                Предварительный заказ предполагает доставку на следующий день с 6:00-10:00.
                                Минимальный заказ - от 6 конфет. Вес 1 кофетки 25 г.
                            </div>
                            <div>Заказы "на завтра" принимаются до 11-00 текущего дня.
                            </div>
                            <div>Конфеты доставляются в прозрачных пакетах со стикером. Вы можете заказать
                                подарочный бокс с лентой стоимостью 20 грн</div>
                            <div>
                                <button>Оформить заказ</button>
                            </div>
                    </div>
                </header>
                <div className="items-container">
                    <div className="fade-in">
                        <Item imagePath="./images/busines1.png" />
                        <Item imagePath="./images/busines2.png" />
                        <Item imagePath="./images/busines1.png" />
                    </div>
                    <div className="fade-in">
                        <Item imagePath="./images/busines2.png" />
                        <Item imagePath="./images/busines1.png" />
                        <Item imagePath="./images/busines2.png" />
                    </div>
                </div>
                <FoodPhoto />
            </div>
        </>
    )
}
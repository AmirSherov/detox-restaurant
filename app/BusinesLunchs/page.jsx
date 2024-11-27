import "./busines.scss"
import Item from "./Item"
import FoodPhoto from "../LandingItems/FoodPhoto"
export default function BusinesLunchs() {
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
                    <Item imagePath="./images/busines1.png" />
                    <Item imagePath="./images/busines2.png" />
                    <Item imagePath="./images/busines1.png" />
                    <Item imagePath="./images/busines2.png" />
                    <Item imagePath="./images/busines1.png" />
                    <Item imagePath="./images/busines2.png" />
                </div>
                <FoodPhoto />
            </div>
        </>
    )
}
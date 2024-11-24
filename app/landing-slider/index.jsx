import "./landing-slider.scss";
export default function LandingSlider({
    imgPath,
    mainText,
    secondText,
    sales,
}) {
    return (
        <div className="landing-slider-main-container">
            <div className="landing-slider-icons">
                <div>Ккал</div>
                <div><img src="/images/fish.png" alt="" /></div>
                <div><img src="/images/carrot.png" alt="" /></div>
                <div><img src="/images/bottle.png" alt="" /></div>
                <div><img src="/images/meat.png" alt="" /></div>
                <div><img src="/images/table.png" alt="" /></div>
            </div>
            <div className="landing-slider-text">
                <div className="text-main">
                    {mainText}
                </div>
                <div className="second-text">
                    {secondText}
                </div>
                <section className="button-price">
                        <button>Заказать</button>
                    <div className="price">
                        <h3>Пробный день всего: </h3>
                        <h1>{sales}</h1>
                    </div>
                </section>
            </div>
            <div className="landing-slider-images">
                <img className="ball" src="/images/left-side-ball.png" alt="" />
                <img className="getting-img" src={imgPath} alt="" />
            </div>
        </div>
    );
}

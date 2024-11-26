import "./aboutBegin.scss";

export default function AboutBegin() {
    return (
        <>
            <div className="aboutBegin-container">
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
                        Здравствуйте! Меня зовут Кобылинский Кирилл, и я являюсь основателем GastroChef.
                    </div>
                    <div className="second-text">
                        Я Мастер Спорта Украины по тяжёлой атлетике, а так же состоял в составе сборной Украины.
                    </div>
                    <div className="third-text">
                        У меня высшее образование национального университета физического воспитания
                        и спорта Украины (НФВСУ), а так же в
                        прошлом я профессиональный фитнес тренер!
                    </div>
                    <div className="fourht-text">
                        И я хочу Вам рассказать побольше о GastroChef.
                    </div>
                </div>
                <div className="landing-slider-images">
                    <img className="ball" src="/images/left-side-ball.png" alt="" />
                    <img className="getting-img" src="/images/mask5.png" alt="" />
                </div>
            </div>
        </>
    )
}
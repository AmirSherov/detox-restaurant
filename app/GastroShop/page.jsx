import "./gastro.scss";
export default function GastroShop() {
    const Items = [
        { id: 1, title: "Полезные конфеты", img: "/images/gastro1.png" },
        { id: 2, title: "Гранола", img: "/images/gastro2.png" }
    ]
    return (
        <>
            <div className="gastro-shop-container">
                <div className="gastro-items">
                    {Items.map((item) => (
                        <div key={item.id} className="card">
                            <img width={400} height={250} src={item.img} alt={item.title} />
                            <div className="gastro-down-side">
                                <h3>{item.title}</h3>
                                <button>Ассортимент</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}
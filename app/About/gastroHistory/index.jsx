import "./gastroHistory.scss";

export default function GastroHistory() {
    return (
        <div className="gastroHistory-container">
            <div className="gastroHistory-content">
                <div className="gastroHistory-img-side">
                    <img src="/images/pocket.png" alt="GastroChef image" />
                </div>
                <div className="gastroHistory-text-side">
                    <div>История GastroChef началась более 6-ти лет назад...</div>
                    <div>Долгое время я наблюдал как людям не хватает времени для правильного и здорового питания, какое правильного, просто питания регулярного.</div>
                    <div>Они могли позавтракать, в обед съесть что-то типа шаурмы или снэка, а вечером в силу голода наесться, что плохо сказывалось на их обмене веществ и естественно здоровье.</div>
                    <div>Желание хоть как-то изменить ситуацию и помочь людям не давало мне покоя и я решил открыть доставку еды правильного питания.</div>
                    <div>
                        Я со своим 17-и летним опытом в спорте и проф. образованием, вместе с диетологом разработали рационы правильного питания с подсчетом калорий (КБЖУ).
                    </div>
                    <div className="team-name">Знакомтесь! Команда GastroChef!</div>
                </div>
            </div>
            <div className="main-img">
                <img src="/images/gastroChefs.png" alt="GastroChef Team" />
            </div>
        </div>
    );
}

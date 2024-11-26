import "./gastroEasy.scss";

export default function gastroEasy() {
  return (
    <div className="gastroEasy-container">
      <div className="gastroEasy-content">
        <div className="gastroEasy-text-side">
          <h2>«GastroChef - легко для занятых»</h2>
          <p>
            GastroChef - правильное питание с доставкой на дом, создано что
            бы облегчить жизнь, освободить время от заморочек, от ненужных
            перекусов, фастфудов и дать возможность чувствовать себя легко и
            полной энергии, сил, для новых свершений и побед.
          </p>
          <p>
            Все продукты для приготовления правильного питания закупаются
            только с сертификатами, а рационы готовятся на современном и
            безопасном кухонном оборудовании с доставкой к Вам!
          </p>
          <p>
            Друзья, если у Вас остались вопросы Вы с легкостью можете позвонить
            нам или написать мне лично в Инстаграм или Фейсбук.
          </p>
          <p>
            С уважением, Кобыллинский Кирилл.
          </p>
          <div className="social-links">
            <a href="#">Instagram</a> | <a href="#">Facebook</a>
          </div>
        </div>
        <div className="gastroEasy-img-side">
          <img src="/images/gastroEasy.png" alt="GastroChef food" />
        </div>
      </div>
    </div>
  );
}

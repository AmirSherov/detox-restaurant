import './modals2.scss';

const Modal = ({ status, close }) => {
    return (
        <>
            {status &&
                <div className="modal-small">
                    <div className="modalContent-small">
                        <span onClick={close} className="close-small">&times;</span>
                        <h2>Форма заказа</h2>
                        <label>
                            Имя <br />
                            <input className='small-modal-input' type="text" placeholder="Введите ваше имя" />
                        </label>
                        <label>
                            Номер телефона <br />
                            <input className='small-modal-input' type="text" placeholder="Введите ваш номер телефона" />
                        </label>
                        <div>
                            <input className='small-modal-radio' type="radio" />
                            <span><span style={{ color: 'black' }}>Согласен с</span> условиями сотрудничества</span>
                        </div>
                        <button className='small-modal-order-button'>Заказать</button>
                    </div>
                </div>
            }
        </>
    );
};

export default Modal;

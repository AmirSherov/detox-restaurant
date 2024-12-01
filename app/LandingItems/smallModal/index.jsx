import './modals2.scss';
import { useTranslation } from 'react-i18next';
const Modal = ({ status, close }) => {
    const { t } = useTranslation();
    return (
        <>
            {status &&
                <div className="modal-small">
                    <div className="modalContent-small">
                        <span onClick={close} className="close-small">&times;</span>
                        <h2>{t("LandingPageSmallModal.text-1")}</h2>
                        <label>
                        {t("LandingPageSmallModal.text-2")} <br />
                            <input className='small-modal-input' type="text" placeholder={t("LandingPageSmallModal.text-3")} />
                        </label>
                        <label>
                        {t("LandingPageSmallModal.text-4")} <br />
                            <input className='small-modal-input' type="text" placeholder= {t("LandingPageSmallModal.text-5")} />
                        </label>
                        <div>
                            <input className='small-modal-radio' type="radio" />
                            <span><span style={{ color: 'black' }}>{t("LandingPageSmallModal.text-6")}</span>{t("LandingPageSmallModal.text-7")}</span>
                        </div>
                        <button className='small-modal-order-button'>{t("LandingPageSmallModal.text-8")}</button>
                    </div>
                </div>
            }
        </>
    );
};

export default Modal;

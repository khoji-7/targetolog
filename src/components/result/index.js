import cls from "./style.module.css";
import iff from "../../../public/assets/ahadqayum.jpg";

export default function result() {
    return (
        <div className={cls.resultParent}>
            <div className={cls.container}>
                <div className={cls.result}>
                    <p className={cls.resultTitle}>Результаты моих клиентов</p>
                    <p className={cls.resultText}>
                        Ознакомьтесь с моими кейсами, где с помощью инструментов таргетированной рекламы я сгенерировал
                        более 1 000 000$ прибыли клиентам
                    </p>
                    <div className={cls.resultCardParent}>
                        <div className={cls.resultCard}>
                                <img src="assets/ahadqayum.jpg" className={cls.resultCardImg} />
                            <div className={cls.resultCardInfo}>
                                <div className={cls.resultCardName}>
                                    <h2>Ahad Qayum </h2>
                                </div>
                                <p className={cls.resultCardText}>
                                Ahad Qayum Producer Actor
                                </p>
                                <ul className={cls.resultCardSts}>
                                    <li>
                                        <h3>2.5000</h3>
                                        <h4>oxvatlar soni</h4>
                                    </li>
                                    <li>
                                        <h3>0,006$</h3>
                                        <h4>Oxvatlar Narxi</h4>
                                    </li>
                                    <li>
                                        <h3>3000$</h3>
                                        <h4>Reklama Budjeti </h4>
                                    </li>
                                </ul>
                                <div className={cls.resultCardLinks}>
                                    <button className={cls.resultCardBtnFolow}>Follow</button>
                                    <button className={cls.resultCardBtnView}>View profile</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className={cls.resultCarddParent}>
                    <div className={cls.resultCardd}>
                    <img src="assets/ahadqayum.jpg" className={cls.resultCarddImg} />

                            <div className={cls.resultCarddInfo}>
                                
                                <div className={cls.resultCarddName}>
                                    <h2>Ahad Qayum </h2>
                                </div>
                                <p className={cls.resultCarddText}>
                                Ahad Qayum Producer Actor
                                </p>
                                <ul className={cls.resultCarddSts}>
                                    <li>
                                        <h3>2.5000</h3>
                                        <h4>oxvatlar soni</h4>
                                    </li>
                                    <li>
                                        <h3>0,006$</h3>
                                        <h4>Oxvatlar Narxi</h4>
                                    </li>
                                    <li>
                                        <h3>3000$</h3>
                                        <h4>Reklama Budjeti </h4>
                                    </li>
                                </ul>
                                <div className={cls.resultCarddLinks}>
                                    <button className={cls.resultCarddBtnFolow}>Follow</button>
                                    <button className={cls.resultCarddBtnView}>View profile</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

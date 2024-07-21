import cls from "./style.module.css"
import { useEffect, useRef } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";


export default function header (){
    const inputRef = useRef(null);

    useEffect(() => {
      if (inputRef.current) {
        intlTelInput(inputRef.current, {
          separateDialCode: true,
          initialCountry: "ua",
        });
      }
    }, []);

    return (
        <div className={cls.headerParent}>
            <div className={cls.container}>
                <div className={cls.navbar}>
                    <img src="https://vakulenko.online/images/tild3830-6536-4238-a262-393965353063__modern-letter-n-a-v-.png" alt="" className={cls.navbarLogo}/>
                    <ul className={cls.ul}>
                        <li className={cls.li}>
                            <a href="" className={cls.li}>КЕЙСИ</a>
                        </li>
                        <li className={cls.li}>
                            <a href="" className={cls.li}>ВІДГУКИ</a>     
                        </li>
                        <li className={cls.li}>
                        <a href="" className={cls.li}>КОНТАКТИ</a>
                        </li>
                    </ul>
                    <div>
                        <button>
                            ua
                        </button>
                        <button>
                            ru
                        </button>
                    </div>
                </div>
                <div className={cls.header}>
                    <div className={cls.headerMenu}>
                        <p className={cls.headerMenuTitle}>
                        Таргетолог Антон Вакуленко
                        </p>
                        <p className={cls.headerMenuText}> 
                        Збільшу продажі за допомогою реклами в інтернеті та надам 
                        <strong>перші звернення клієнтів вже через 48 годин</strong>
                        </p>
                    </div>
                    <form action="" className={cls.headerForm}>
                        <p className={cls.formTitle}>
                        СТРАТЕГИЯ БЕСПЛАТНО
                        </p>
                        <p className={cls.formText}>
                        Безкоштовно розроблю і презентую маркетингову стратегію для Вашого бізнесу
                        </p>
                        <input type="text" name="" id="" placeholder="name" className={cls.formInput}/>
                        
                        <div className={cls.formInputPhone}>
                        <input name="phone" type="text" id="phone" ref={inputRef} className={cls.formInput}/>

                        </div>
                       
                        <button className={cls.formBtn}>
                        ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
                        </button>
                    </form>
                </div>
                
            </div>
        </div>
    )
}
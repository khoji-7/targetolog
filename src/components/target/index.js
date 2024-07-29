import cls from "./style.module.css"
import { useEffect, useRef } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";

export default function target (){
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
          intlTelInput(inputRef.current, {
            separateDialCode: true,
            initialCountry: "uz",
          });
        }
      }, []);

    return(
        <div className={cls.targetologParent}>
            <div className={cls.targetologMain}>   
                <p className={cls.targetologTittle}>
                Есть конкретная цель? 
                </p>
                <p className={cls.targetologText}>
                    Есть конкретная цель? Заполняйте форму и укажите желаемое количество клиентов, а я предложу путь к достижению Ваших целей 
                </p>
                <form action="" className={cls.forma}>
                    <input type="text" placeholder="ismingiz" className={cls.targetologMainInput}/>
                
                    <input name="phone" type="text" id="phone" ref={inputRef} className={cls.targetologMainInput} style={{width:"460px"}}/>

                    
                    <input type="text" placeholder="manzilingiz" className={cls.targetologMainInput}/>
                    <input type="text" placeholder="chek"  className={cls.targetologMainInput}/>
                    <input type="range"  min={30} max={500} className={cls.targetologMainInput}/>
                    <button className={cls.targetologBtn}>
                        natijani olish
                    </button>

                </form>
            </div>
            <div>
                <img src="assets/tagetolog.png" alt="" className={cls.targetologImg}/>
            </div>
        </div>

    )

}
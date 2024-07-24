import { useEffect, useRef } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import cls from "./style.module.css";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
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
      <nav className={`${cls.navbar} navbar navbar-expand-lg`}>
      <a className="navbar-brand" href="#">
        <img
          src="https://vakulenko.online/images/tild3830-6536-4238-a262-393965353063__modern-letter-n-a-v-.png"
          alt="Logo"
          className={cls.navbarLogo}
        />
      </a>
      

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              КЕЙСЫ <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              ОТЗЫВЫ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              КОНТАКТЫ
            </a>
          </li>
        </ul>
      </div>
      <div>
        <button>
          ua
        </button>
          
        <button>
            ru
        </button>
      </div>
      <button
        className={`${cls.navbarToggler} navbar-toggler`}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <MenuIcon className={cls.navbarTogglerIcon} />
      </button>
    </nav>


                <div className={cls.header}>
                    <div className={cls.headerMenu}>
                        <p className={cls.headerMenuTitle}>Таргетолог Антон Вакуленко</p>
                        <p className={cls.headerMenuText}>
                            Збільшу продажі за допомогою реклами в інтернеті та надам
                            <strong>перші звернення клієнтів вже через 48 годин</strong>
                        </p>
                    </div>
                    <form action="" className={cls.headerForm}>
                        <p className={cls.formTitle}>СТРАТЕГИЯ БЕСПЛАТНО</p>
                        <p className={cls.formText}>
                            Безкоштовно розроблю і презентую маркетингову стратегію для Вашого бізнесу
                        </p>
                        <input type="text" name="" id="" placeholder="name" className={cls.formInput} />

                        <div className={cls.formInputPhone}>
                            <input name="phone" type="text" id="phone" ref={inputRef} className={cls.formInput} />
                        </div>

                        <button className={cls.formBtn}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

import React from "react";

import { Link } from "react-router-dom";

import telegram from "../assets/icons/telegram.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import viber from "../assets/icons/viber.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__menu">
            <div className="footer__col">
              <span className="footer__title">О компании</span>
              <ul>
                <li>
                  <Link to="/">Партнерская программа</Link>
                </li>
                <li>
                  <Link to="/">Вакансии</Link>
                </li>
              </ul>
            </div>
            <div className="footer__col">
              <span className="footer__title">Меню</span>
              <ul>
                <li>
                  <Link to="/">Расчет стоимости</Link>
                </li>
                <li>
                  <Link to="/">Услуги</Link>
                </li>
                <li>
                  <Link to="/">Виджеты</Link>
                </li>
                <li>
                  <Link to="/">Интеграции</Link>
                </li>
                <li>
                  <Link to="/">Наши клиенты</Link>
                </li>
                <li>
                  <Link to="/">Кейсы</Link>
                </li>
                <li>
                  <Link to="/">Благодарственные письма</Link>
                </li>
                <li>
                  <Link to="/">Сертификаты</Link>
                </li>
                <li>
                  <Link to="/">Блог на Youtube</Link>
                </li>
                <li>
                  <Link to="/">Вопрос / Ответ</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__contacts">
            <div className="footer__col">
              <span className="footer__title">Контакты</span>
              <ul>
                <li>
                  <a href="tel:+75555555555">+7 555 555-55-55</a>
                </li>
                <li>
                  <Link to="/">
                    <img src={telegram} alt="telegram" />
                  </Link>
                  <Link to="/">
                    <img src={viber} alt="viber" />
                  </Link>
                  <Link to="/">
                    <img src={whatsapp} alt="whatsapp" />
                  </Link>
                </li>
                <li>Москва, Путевой проезд 3с1, к 902</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright text-secondary text-thin">
          ©WELBEX 2022. Все права защищены.
          <a href="/" target="_blank">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

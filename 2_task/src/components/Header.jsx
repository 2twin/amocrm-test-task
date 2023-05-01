import React from "react";
import logo from "../assets/logo_welbex.svg";
import telegram from "../assets/icons/telegram.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import viber from "../assets/icons/viber.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__block">
            <a className="header__logo" href="/">
              <div>
                <img src={logo} alt="" />
                <p className="text-secondary text-thin">
                  крупный интегратор CRM <br /> в России и еще 8 странах
                </p>
              </div>
            </a>
            <nav className="header__nav">
              <ul>
                <li>
                  <NavLink to="/services">Услуги</NavLink>
                </li>
                <li>
                  <NavLink to="/widgets">Виджеты</NavLink>
                </li>
                <li>
                  <NavLink to="/integrations">Интеграции</NavLink>
                </li>
                <li>
                  <NavLink to="/cases">Кейсы</NavLink>
                </li>
                <li>
                  <NavLink to="/sertificates">Сертификаты</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__block">
            <a href="tel:+75555555555">+7 555 555-55-55</a>
            <ul className="header__social">
              <li>
                <Link to="/">
                  <img src={telegram} alt="telegram" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={viber} alt="viber" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={whatsapp} alt="whatsapp" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

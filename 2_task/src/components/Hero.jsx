import React, { useState } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(document.body.clientWidth <= 620);

  window.addEventListener('resize', function() {
    if (this.document.body.clientWidth <= 620) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  })

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__title">
            <h1>
              Зарабатывайте <br /> больше
            </h1>
            <span className="text-accent">с WELBEX</span>
            <p className="text-secondary">
              Развиваем и контролируем <br /> продажи за вас
            </p>
          </div>

          {!isMobile ? (
            <article className="hero__gifts">
              <p>
                Вместе с <span className="text-accent">бесплатной</span> <br />
                <span className="text-accent">консультацией</span> мы дарим:
              </p>
              <ul>
                <li>
                  <span className="text-upper">Виджеты</span>
                  <p className="text-thin text-secondary">
                    30 готовых <br /> решений
                  </p>
                </li>
                <li>
                  <span className="text-upper">Dashboard</span>
                  <p className="text-thin text-secondary">
                    с показателями <br /> вашего бизнеса
                  </p>
                </li>
                <li>
                  <span className="text-upper">Skype аудит</span>
                  <p className="text-thin text-secondary">
                    отдела продаж <br /> и CRM системы
                  </p>
                </li>
                <li>
                  <span className="text-upper">35 дней</span>
                  <p className="text-thin text-secondary">
                    использования <br /> CRM
                  </p>
                </li>
              </ul>
              <button className="btn btn-primary hero__btn">
                Получить консультацию
              </button>
            </article>
          ) : (
            <article className="hero__gifts">
              <p>
                Вместе с <span className="text-accent">бесплатной</span> <br />
                <span className="text-accent">консультацией</span> мы дарим:
              </p>
              <ul>
                <li>
                  <span className="text-upper">Skype аудит</span>
                </li>
                <li>
                  <span className="text-upper">30 виджетов</span>
                </li>
                <li>
                  <span className="text-upper">dashboard</span>
                </li>
                <li>
                  <span className="text-upper">Месяц amoCRM</span>
                </li>
              </ul>
            </article>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;

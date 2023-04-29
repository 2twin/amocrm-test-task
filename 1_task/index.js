const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// заводим переменную под интервал таймера
let timerInterval = null;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    // запускаем интервал с отрезком 1000мс
    timerInterval = setInterval(() => {
      // если таймер на отметке 0с, останавливаем его, чтобы не ушел в минус
      if (seconds < 0) {
        clearInterval(timerInterval);
        return;
      }
      // высчитываем часы, минуты и секунды
      let h = Math.floor(seconds / 60 / 60).toString();
      let m = Math.floor((seconds / 60) % 60).toString();
      let s = Math.floor(seconds % 60).toString();

      // отображаем таймер в нужном формате и уменьшаем кол-во секунд
      timerEl.innerHTML = `${h.padStart(2, "0")}:${m.padStart(
        2,
        "0"
      )}:${s.padStart(2, "0")}`;
      seconds--;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа

  // если вводится не число, меняем символ на пустую строку
  e.target.value = e.target.value.replace(/\D/, "");
});

buttonEl.addEventListener("click", (e) => {
  // отменяем стандатрное поведение (перезагрузку страницы)
  e.preventDefault();

  const seconds = Number(inputEl.value);

  // если кол-во секунд больше 359 999, не запускаем таймер,
  // т.к. кол-во часов в таком случае будет больше 99, что
  // не вписывается в заданный формат отображаения "hh:mm:ss"
  if (seconds > 359_999) {
    inputEl.value = "";
    return;
  }

  // сбрасываем таймер при каждом новом запуске
  clearInterval(timerInterval);

  animateTimer(seconds);

  inputEl.value = "";
});

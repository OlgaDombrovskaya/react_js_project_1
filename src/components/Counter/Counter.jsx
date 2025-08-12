// 1 шаг: импортировать функцию хук useState() из библиотеки React
import { useState } from "react";

import Button from "../Button/Button";

import "./styles.css";

function Counter() {
  // При старом способе копмонент Counter не перезагружается и не может показать на странице 
  // актуальное значение переменной count(не происходит перерендер)
  //   let count = 0;
  //   console.log("count in Counter component:", count);

  //   const onMinus = () => {
  //     // Тут пишем логику по уменьшению значения счетчика на 1
  //     count = count - 1;
  //     console.log("count in onMunus Function:", count);
  //   };

  //   const onPlus = () => {
  //     // Тут пишем логику по увеличению значения счетчика на 1
  //     count = count + 1;
  //     console.log("count in onPlus Function:", count);
  //   };

  // Синтаксис без деструктуризации
  //   const state = useState(0);
  //   console.log(state);
  //   console.log(state[0]);
  //   console.log(state[1]);

  // Синтаксис с деструктуризацией
  // Функция-хук useState() возвращает массив из 2 элементов
  // - 1 элемент - это переменная соcтояния
  // - 2 элемент - функция, которая меняет это состояние
  // По умолчанию count = undefined, если мы ничего не передадим в качестве аргумента в функцию useState()

  // хук - это функция, которая позволяет «подцепиться» (hook into) к возможностям React, таким как состояние (state),
  //  жизненный цикл и другие функции, внутри функционального компонента.
  //  (верхний уровень компонента - распологается между функцией и ретерном там и распологаем useState )

  // 🔹 Переменная изменяется, если она обычная (let / const) — но только внутри функции компонента
  //  при одном рендере.
  // 👉 Однако компонент не перерисовывается, и переменная сбрасывается при следующем рендере.

  const [count, setCount] = useState(0); //count это состояние, а setCount это изменяющееся состояние
  //в State нельзя хранить компоненты (например: function Greeting() {
//   return <h1>Привет, мир!</h1>;})

  const onMinus = () => {
    // Тут пишем логику по уменьшению значения счетчика на 1
    setCount((prevValue) => {
      return prevValue - 1;
    });
  };
  const onPlus = () => {
    // Тут пишем логику по увеличению значения счетчика на 1
    console.log(count);
    setCount((prevValue) => {
      console.log(prevValue);
      return prevValue + 1;
    });
    console.log(count);
  };

  //   Пример 1
  //   const [personName, setPersonName] = useState("Jonhy Depp");

  //   const changeName = () => {
  //     setPersonName("John Johnson");
  //   }

  // Пример 2
  //   const [animals, setAnimals] = useState(["Pig", "Cat", "Dog"]);

  //   const addRatt = () => {
  //     setAnimals((prevValue) => {
  //       return [...prevValue, "Ratt"];
  //     });
  //   };

  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button name="+" onClick={onPlus} />
      </div>
      {/* Пример 1 */}
      {/* {personName}
      <div className="button_control">
        <Button name="Add last name" onClick={changeName} />
      </div> */}

      {/* Пример 2 */}
      {/* {animals}
      <div className="button_control">
        <Button name="Add Ratt" onClick={addRatt} />
      </div> */}
    </div>
  );
}

export default Counter;

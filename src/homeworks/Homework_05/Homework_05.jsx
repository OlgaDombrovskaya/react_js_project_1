import { useState } from "react";
import { v4 } from "uuid";
import Button from "../../components/Button/Button";
import "./styles.css";

function Homework_05() {
  const [orders, setOrders] = useState([]);
  const orderList = ["Burger", "Fries", "Cola", "Salad", "Ketchup", "Ice-Cream"];

  return (
    <div className="lesson_05_page_wrapper">
      <div className="menu_wrapper">
        <h1 className="menu">Menu:</h1>
        <div className="button_wrapper">

          {orderList.map((orderButton) => (
            <div className="button_control" key={orderButton}>
              <Button
                buttonName={orderButton}
                onClick={() => setOrders((prevValue) => [...prevValue, orderButton])}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="order_wrapper">
        <p className="order_title">Your Order:</p>
        <ol className="order_list">
          {orders.map((orderItem) => (
            <li key={v4()} className="order_item">
              {orderItem}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Homework_05;


/* кратко, что поменяла и как это теперь работает:
Все названия собраны в один массив orderList — легко добавлять новые.
map используется и для кнопок, и для списка заказов. Кнопки генерируются через map
Больше нет 6 одинаковых блоков.
строка с 16 по 20 - Универсальный обработчик клика
Один коллбек добавляет в заказ то блюдо, по кнопке которого кликнули:
setOrders(prevValue => [...prevValue, item])

Рендер заказа — тоже через map прямо в JSX:
{orders.map(orderItem => <li key={v4()}>{orderItem}</li>)}
Ключи
Для кнопок: key={item} — в меню названия уникальны.
Для заказов: key={v4()} — чтобы элементы были уникальны, даже если одно и то же блюдо добавлено много раз.

Логика потока:
клик по кнопке → в orders добавляется название блюда → React перерисовывает компонент → список <li> 
строится из orders с уникальными ключами → видишь актуальный заказ.
P.S. если когда-нибудь захочется «стабильные» ключи (чтобы один и тот же пункт заказа не пересоздавался 
при каждом рендере), можно хранить в orders объекты вида { id: v4(), name: item } и рендерить по key={o.id}. */

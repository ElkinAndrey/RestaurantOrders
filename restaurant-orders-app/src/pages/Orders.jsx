import { React, useState, useEffect, useRef } from "react";
import { useFetching } from "./../hooks/useFetching";
import Service from "./../API/index";
import Order from "./../components/Orders/Order/Order";
import Loader from "./../components/UI/Loader/Loader";

const Orders = () => {
  const dataFetchedRef = useRef(false);
  let [orders, setOrders] = useState([]);

  const [fetchOrders, isOrdersLoading, ordersError] = useFetching(async () => {
    const response = await Service.getOrders();
    setOrders(response.data);
  });

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchOrders();
  }, []);

  const del = (order) => {
    setOrders(orders.filter((o) => o.orderId !== order.orderId));
    Service.delOrder(order.orderId);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "inline-block" }}>
        {/* Ошибка */}
        {ordersError ? (
          <div  style={{ color: "#df0000", fontSize: "18px", textAlign: "center" }}>
            Не удалось получить
            <br /> доступ к серверу
          </div>
        ) : (
          <div>
            {/* Загрузка */}
            {isOrdersLoading ? (
              <div>
                <Loader />
              </div>
            ) : (
              <div>
                {/* Данные */}
                {orders.length !== 0 ? (
                  <div>
                    {orders.map((order) => (
                      <div key={order.orderId}>
                        <Order order={order} del={del} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ color: "#c0c0be", fontSize: "18px", textAlign: "center" }}>Заказы отсутствуют</div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;

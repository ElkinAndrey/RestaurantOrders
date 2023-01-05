import { React, useState, useEffect, useRef } from "react";
import { useFetching } from "./../hooks/useFetching";
import Service from "./../API/index";
import Order from "./../components/Orders/Order/Order";

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

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "inline-block" }}>
        {orders.map((order) => (
          <div key={order.orderId}>
            <Order order={order} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

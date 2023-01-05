import { React, useState, useEffect, useRef } from "react";
import { useFetching } from "./../hooks/useFetching";
import Service from "./../API/index";

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
    <div>
      {orders.map((order) => (
        <div
          key={order.orderId}
          style={{ border: "3px red solid", margin: "10px", padding: "10px" }}
        >
          <div>{order.number}</div>
          <div>{order.paymentMethod}</div>
          {order.products.map((product) => (
            <div
              key={product.product.productId}
              style={{ border: "3px green solid", margin: "5px" }}
            >
              <div>{product.product.productName}</div>
              <div>{product.product.productPrice}</div>
              <div>{product.quantity}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Orders;

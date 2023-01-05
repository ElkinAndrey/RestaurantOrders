import React, { useState, useEffect, useRef } from "react";
import CollectedOrder from "../components/CreateOrder/CollectedOrder/CollectedOrder";
import OrderCharacteristics from "../components/CreateOrder/OrderCharacteristics/OrderCharacteristics";
import ProductList from "../components/CreateOrder/ProductList/ProductList";
import { useFetching } from "./../hooks/useFetching";
import Service from "./../API/index";

const CreateOrder = () => {
  const dataFetchedRef = useRef(false);

  let [products, setProducts] = useState([]);
  let [number, setNumber] = useState("");

  let [newOrder, setNewOrder] = useState({
    paymentMethod: "Наличные",
    products: [],
  });

  const [fetchNumber, isNumberLoading, numberError] = useFetching(async () => {
    const response = await Service.getNumber();
    setNumber(`${response.data}`);
  });
  const [fetchProducts, isProductsLoading, productsError] = useFetching(
    async () => {
      const response = await Service.getProducts();
      setProducts(response.data);
    }
  );
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchNumber();
    fetchProducts();
  }, []);

  const delProductInOrder = (product) => {
    setNewOrder({
      ...newOrder,
      products: [
        ...newOrder.products.filter(
          (p) => p.product.productId !== product.product.productId
        ),
      ],
    });
    setProducts([...products, product.product]);
  };

  const delAllProductInOrder = () => {
    setProducts([...products, ...newOrder.products.map((p) => p.product)]);
    setNewOrder({
      ...newOrder,
      products: [],
    });
  };

  const addNewOrder = () => {
    if (newOrder.products.length === 0) {
      return;
    }
    if (number === "") {
      return;
    }
    Service.addOrder({ number: number, ...newOrder });
    delAllProductInOrder();
    setNumber("");
    fetchNumber();
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "inline-block" }}>
        <OrderCharacteristics
          newOrder={newOrder}
          setNewOrder={setNewOrder}
          number={number}
          setNumber={setNumber}
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <ProductList
            products={products}
            setProducts={setProducts}
            isProductsLoading={isProductsLoading}
            productsError={productsError}
            newOrder={newOrder}
            setNewOrder={setNewOrder}
          />
          <CollectedOrder
            newOrder={newOrder}
            setNewOrder={setNewOrder}
            delProductInOrder={delProductInOrder}
            delAllProductInOrder={delAllProductInOrder}
            addNewOrder={addNewOrder}
            number={number}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;

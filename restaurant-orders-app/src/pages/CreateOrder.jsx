import React, { useState, useEffect, useRef } from "react";
import CollectedOrder from "../components/CreateOrder/CollectedOrder/CollectedOrder";
import OrderCharacteristics from "../components/CreateOrder/OrderCharacteristics/OrderCharacteristics";
import ProductList from "../components/CreateOrder/ProductList/ProductList";
import { useFetching } from "./../hooks/useFetching";
import Service from "./../API/index";

const CreateOrder = () => {
  const dataFetchedRef = useRef(false);

  let [products, setProducts] = useState([]);

  let [newOrder, setNewOrder] = useState({
    number: "",
    totalPrice: 0,
    paymentMethod: "Наличные",
    products: [],
  });

  const [fetchNumber, isNumberLoading, numberError] = useFetching(async () => {
    const response = await Service.getNumber();
    setNewOrder({ ...newOrder, number: `${response.data}` });
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
      products: [...newOrder.products.filter((p) => p.product.productId !== product.product.productId)],
    });
    setProducts([...products, product.product]);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "inline-block" }}>
        <OrderCharacteristics newOrder={newOrder} setNewOrder={setNewOrder} />
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
          <CollectedOrder newOrder={newOrder} setNewOrder={setNewOrder} delProductInOrder={delProductInOrder}/>
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;

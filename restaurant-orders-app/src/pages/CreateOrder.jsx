import React, { useState, useEffect } from "react";
import CollectedOrder from "../components/CreateOrder/CollectedOrder/CollectedOrder";
import OrderCharacteristics from "../components/CreateOrder/OrderCharacteristics/OrderCharacteristics";
import ProductList from "../components/CreateOrder/ProductList/ProductList";
import { useFetching } from "./../hooks/useFetching";
import Service from "./../API/index";

const CreateOrder = () => {
  let [products, setProducts] = useState([]);

  let [newOrder, setNewOrder] = useState({
    number: "",
    totalPrice: 0,
    paymentMethod: "Наличные",
    products: [],
  });

  const [fetchProducts, isProductsLoading, productsError] = useFetching(
    async () => {
      const response = await Service.getProducts();
      setProducts(response.data);
    }
  );
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "inline-block" }}>
        <OrderCharacteristics />
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
          />
          <CollectedOrder />
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;

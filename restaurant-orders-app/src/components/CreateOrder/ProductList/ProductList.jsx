import { React, useMemo, useState } from "react";
import classes from "./ProductList.module.css";
import Product from "./Product/Product";
import InputSearch from "./../../UI/InputSearch/InputSearch";
import Loader from "./../../UI/Loader/Loader";

const search = (searchQuery, products) => {
  if (!searchQuery) {
    return products;
  }

  return [...products].filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

const ProductList = ({
  products,
  setProducts,
  isProductsLoading,
  productsError,
  newOrder,
  setNewOrder,
}) => {
  let [searchQuery, setSearchQuery] = useState("");

  let searchedProducts = useMemo(() => {
    return search(searchQuery, products);
  }, [searchQuery, products]);

  const addProductInOrder = (product) => {
    setNewOrder({
      ...newOrder,
      products: [...newOrder.products, { product: product, quantity: 1 }],
    });
    setProducts(products.filter((p) => p.productId !== product.productId));
  };

  return (
    <div className={classes.body}>
      {/* Ошибка */}
      {productsError ? (
        <div className={classes.errorMessage}>
          Не удалось получить
          <br /> доступ к серверу
        </div>
      ) : (
        <div>
          {/* Загрузка */}
          {isProductsLoading ? (
            <div className={classes.loading}>
              <Loader />
            </div>
          ) : (
            <div>
              <InputSearch
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                id="SearchProduct"
                background="#ffffff"
                readOnly={productsError || isProductsLoading}
                style={{ color: "#000000" }}
                margin="0px 0px 5px 0px"
                width="100%"
                placeholder="Найти товар"
              />
              {/* Данные */}
              {searchedProducts.length !== 0 ? (
                <div className={classes.products}>
                  {searchedProducts.map((product) => (
                    <div key={product.productId}>
                      <Product
                        product={product}
                        addProductInOrder={addProductInOrder}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className={classes.message}>Товары отсутствуют</div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductList;

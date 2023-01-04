import React from "react";
import classes from "./ProductList.module.css";
import Product from "./Product/Product";
import InputSearch from "./../../UI/InputSearch/InputSearch";
import Loader from "./../../UI/Loader/Loader";

const ProductList = ({
  products,
  setProducts,
  isProductsLoading,
  productsError,
}) => {
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
                id="SearchProduct"
                background="#ffffff"
                readOnly={productsError || isProductsLoading}
                style={{ color: "#000000" }}
                margin="0px 0px 5px 0px"
                width="100%"
                placeholder="Найти товар"
              />
              {/* Данные */}
              {products.length !== 0 ? (
                <div className={classes.products}>
                  {products.map((product) => (
                    <div key={product.productId}>
                      <Product
                        productName={product.productName}
                        productPrice={product.productPrice}
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

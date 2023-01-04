import React from "react";
import classes from "./ProductList.module.css";
import Product from "./Product/Product";

const ProductList = () => {
  let products = [
    {
      productId: 1,
      productName: "Шаурма",
      productPrice: 220,
    },
    {
      productId: 2,
      productName: "Курица гриль",
      productPrice: 151.33,
    },
    {
      productId: 3,
      productName: "Шашлык из говядины",
      productPrice: 310,
    },
  ];

  return (
    <div className={classes.body}>
      <div className={classes.search}></div>
      <div className={classes.products}>
        <div>
          {products.map((product) => (
            <div key={product.productId}>
              <Product
                productName={product.productName}
                productPrice={product.productPrice}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

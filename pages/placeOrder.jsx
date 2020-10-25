import PlaceOrderForm from "../components/forms/placeOrderForm";
import Layout from "../components/core/layout";
import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store";
const PlaceOrder = () => {
  const [cartNumber, setcartNumber] = useState(0);
  const handleShoppingCart = () => {
    const products = JSON.parse(localStorage.getItem("products"));

    if (products && products.length>0) {
      const pds=products.reduce((a, b) => ({ actual_qnt: a.actual_qnt + b.actual_qnt }))
      setcartNumber(pds.actual_qnt) 

    } else {
      setcartNumber(0);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Provider store={store}>
      <Layout cartNumber={cartNumber} onAddCartClick={handleShoppingCart}>
        <div className="place-order">
          <div className="place-order__form">
            <PlaceOrderForm />
          </div>
          <img src="/payment.jpg" alt="" className="place-order__img" />
        </div>
      </Layout>
      </Provider>
  );
};

export default PlaceOrder;

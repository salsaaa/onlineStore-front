import React, { useState, useEffect } from "react";
import Layout from '../components/core/layout'
import FeaturedProducts from '../components/sections/featuredProducts'
import Collections from '../components/sections/collections'
import BestSellers from '../components/sections/bestSellers'
import Sales from '../components/sections/sales'
import NewArrivals from '../components/sections/newArrivals'
import AttachmentsCard from '../components/cards/attachmentsCard'
import OurBlogs from '../components/sections/ourBlogs'
import RatedProducts from '../components/sections/ratedProducts'
import Slider from '../components/core/slider'
import { Provider } from "react-redux";
import store from "../store";

export default function Home() {
  useEffect(() => {
    handleShoppingCart();
  });
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
  return (
    <Provider store={store}>
    <Layout cartNumber={cartNumber} onAddCartClick={handleShoppingCart}>
      <Slider />
      <FeaturedProducts onAddCartClick={handleShoppingCart} />
      <Collections />
      <Sales />
      <AttachmentsCard />
      <OurBlogs />
      <RatedProducts />
    </Layout>
    </Provider>
  )
}

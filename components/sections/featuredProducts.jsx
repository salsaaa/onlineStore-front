import React, { useState, useEffect } from "react";
import ProductCard from "../cards/productCard";
import { connect } from "react-redux";
import { fetchProducts } from "../../redux/actions/productActions";
const FeaturedProducts = (props) => {
  useEffect(() => {
    props.fetchProducts();
  }, []);
  return (
    <React.Fragment>
          <div className="container container--space container--maxwidth centered">
        <div className="word">
          Featured Products
          <div className="word--sm">
            Must have products from our top sellers
          </div>
        </div>
      </div>
      <div className="nav--categories">
        <ul className="nav nav--centerd nav--account container ">
          <li className="nav__item nav__item--account nav__item--categories">
            <a className="nav__item__link nav__item__link--account ">Men</a>
          </li>
          <li className="nav__item nav__item--account nav__item--clicked nav__item--categories">
            <a className="nav__item__link nav__item__link--account">Women</a>
          </li>
          <li className="nav__item nav__item--account nav__item--clicked nav__item--categories">
            <a className="nav__item__link nav__item__link--account ">
              Accessories
            </a>
          </li>
        </ul>
      </div>
      <div className="container container--maxwidth">
        {props?.products?.map((product) => (
          <ProductCard onAddCartClick={props.onAddCartClick} key={product._id} product={product} />
        ))}
       </div>
    </React.Fragment>
  );
};
function mapStateToProps(state) {
  return {
    products: state.products.items,
  };
}

export default connect(mapStateToProps, { fetchProducts })(FeaturedProducts);

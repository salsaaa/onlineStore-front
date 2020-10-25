import { InputNumber } from "antd";
import { Badge } from "antd";
import React, { useState, useEffect } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";


const ShoppingCard = (props) => {
  useEffect(() => {
    handleTotalCost()
  }, []);
  const [TotalPrice, setTotalPrice] = useState(props.product.actual_qnt * props.product?.price);
  const handleTotalPrice = (quantity) => {
    setTotalPrice(quantity * props.product?.price);
  };
  function onChange(value, product) {
    let products = JSON.parse(localStorage.getItem("products"));
    if (products) {
      const targetProduct = products.find((p) => p._id === product._id);
      if (targetProduct) {
        targetProduct.actual_qnt = value;
        localStorage.setItem("products", JSON.stringify(products));
        handleTotalPrice(value)
        handleTotalCost()
        props.onAddCartClick();
      }
    }
  }
  const handleTotalCost=()=>{
    let products = JSON.parse(localStorage.getItem("products"));
    if(products && products.length>0){

      const pds=products.reduce(function (acc, obj) { return acc + obj.actual_qnt*obj.price }, 0);
      props.onQntChange(pds,products[0].currency)
      localStorage.setItem("tota_cost", pds);
      localStorage.setItem("currency", products[0].currency);
    }else{
      props.onQntChange(0,'')
      localStorage.setItem("tota_cost", pds);

    }
  }
  const handleDelete=(product)=>{
    let products = JSON.parse(localStorage.getItem("products"));
    const targetProduct = products.findIndex((p) => p._id === product._id);
    if(targetProduct>-1){

      products.splice(targetProduct,1)
      localStorage.setItem("products", JSON.stringify(products));
      props.handleShoppingCardList();
      handleTotalCost()
      props.onAddCartClick();

    }

  }
  return (
    <React.Fragment>
      <div className="shopping-card">
        <Badge count={<CloseCircleOutlined className="delete-icon" onClick={()=>handleDelete(props.product)}/>}>
          <div className="shopping-card__products">
            <div className="shopping-card__item grayTxt">Product</div>
            <div className="">
              <img className="shopping-card__img" src={props.product?.picture} />
            </div>
            <a className="detailed-card__title shopping-card__products__title">
              {props.product?.name}
            </a>
            <div className="detailed-card__desc shopping-card__products__desc">
              <div>
                <a className="detailed-card__desc--desc">{props.product?.category}</a>
                ,
              </div>
              <div className="detailed-card__desc--stock">
                {props.product?.avail_qnt} in stock
              </div>
            </div>
            <div className="rating-card__desc rating-card__desc--rating shopping-card__products__rating">
              {/* {product.stars?.map((star) => (
                <i className="fa fa-star" />
              ))} */}
            </div>
          </div>
        </Badge>
        <div className="shopping-card__item">
          <div className="grayTxt">Price</div>
          <div className="detailed-card__price shopping-card__price">
            {props.product?.price} {props.product?.currency}
          </div>
        </div>
        <div className="shopping-card__item">
          <div className="grayTxt">Quantity</div>
          <div className="shopping-card__quantity">
            <InputNumber
              size="small"
              min={1}
              max={props.product?.avail_qnt}
              defaultValue={props.product?.actual_qnt}
              onChange={(value) => onChange(value, props.product)}
            />
          </div>
        </div>
        <div className="shopping-card__item">
          <div className="grayTxt">Total Price</div>
          <div className="shopping-card__total-price">{TotalPrice}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShoppingCard;

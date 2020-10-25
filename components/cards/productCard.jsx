export default function ProductCard(props) {
  const handleAddTocart = (product) => {
    let products = [];
    if (JSON.parse(localStorage.getItem("products"))) {
      products = JSON.parse(localStorage.getItem("products"));
      const targetProduct = products.find((p) => p._id === product._id);

      if (targetProduct) {
        if (targetProduct.actual_qnt + 1 > product.avail_qnt) return;
        targetProduct.actual_qnt += 1;
        localStorage.setItem("products", JSON.stringify(products));
        props.onAddCartClick();
        return;
      }
    }
    product["actual_qnt"] = 1;
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    props.onAddCartClick();
  };
  return (
    <React.Fragment>
      <div className="detailed-card">
        <div className="detailed-card__img">
          <img className="detailed-card__image" src={props.product?.picture} />
          <div className="rollover">
            <a
              onClick={() => handleAddTocart(props.product)}
              className="rollover__desc rollover__desc--addtocard"
            >
              <i className="fa fa-shopping-cart" /> Add to cart
            </a>
          </div>
        </div>
        <a className="detailed-card__title">{props.product?.name}</a>
        <div className="detailed-card__desc">
          <div>
            <a className="detailed-card__desc--desc">
              {props.product?.category}
            </a>
          </div>
          <div className="detailed-card__desc--stock">
            {props.product?.avail_qnt} in stock
          </div>
        </div>
        <div className="detailed-card__price">
          {props.product?.price} {props.product?.currency}
        </div>
      </div>
    </React.Fragment>
  );
}

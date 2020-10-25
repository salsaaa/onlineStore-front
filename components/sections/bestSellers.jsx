import ProductCard from "../cards/productCard";
import { connect } from "react-redux";
import { fetchProducts } from "../../redux/actions/productActions";
const BestSellers = (props) => {
  return (
    <React.Fragment>
      <div className="container container--space container--maxwidth centered">
        <div className="word">
          Best Seller
          <div className="word--sm">
            Must have products from our top sellers
          </div>
        </div>
      </div>
      <div className="container container--maxwidth">
        {props?.products?.map((product) => (
          <ProductCard
            onAddCartClick={props.onAddCartClick}
            key={product._id}
            product={product}
          />
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
export default connect(mapStateToProps, { fetchProducts })(BestSellers);

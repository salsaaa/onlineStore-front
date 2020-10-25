import ProductCard from "../cards/productCard";
import { connect } from "react-redux";
import { fetchProducts } from "../../redux/actions/productActions";
const NewArrivals = (props) => {
  return (
    <React.Fragment>
      <div className="container container--space container--maxwidth centered">
        <div className="word">
          New Arrivals
          <div className="word--sm">Brand new products from top designers</div>
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
export default connect(mapStateToProps, { fetchProducts })(NewArrivals);

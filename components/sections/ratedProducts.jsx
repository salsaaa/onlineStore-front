import RatedProductCard from '../cards/ratedProductCard'
const RatedProducts = () => {
    return ( 
        <div className="container container--maxwidth container--space">
        <div className="rating-cards">
          FEATURED
          <RatedProductCard img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/10/black_elegant_leather_jacket.jpg" title="Black Leather Jacket" price="200" currency="$"/>
          <RatedProductCard img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/10/spring_printed_dress.jpg" title="Black Leather Jacket" price="200" currency="$"/>
          <RatedProductCard img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/09/blue_leather_jacket.jpg" title="Black Leather Jacket" price="200" currency="$"/>
        </div>
        <div className="rating-cards">
          ON SALE
          <RatedProductCard img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/10/black_elegant_leather_jacket.jpg" title="Black Leather Jacket" price="200" currency="$"/>
          <RatedProductCard img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/10/spring_printed_dress.jpg" title="Black Leather Jacket" price="200" currency="$"/>
          <RatedProductCard img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/09/blue_leather_jacket.jpg" title="Black Leather Jacket" price="200" currency="$"/>
        </div>
        <div className="rating-cards">
          TOP RATED
          <RatedProductCard img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/10/black_elegant_leather_jacket.jpg" title="Black Leather Jacket" price="200" currency="$"/>
          <RatedProductCard img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/10/spring_printed_dress.jpg" title="Black Leather Jacket" price="200" currency="$"/>
          <RatedProductCard img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/09/blue_leather_jacket.jpg" title="Black Leather Jacket" price="200" currency="$"/>
        </div>
        <div className="rating-cards">
          LATEST REVIEWS
          <RatedProductCard img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/10/black_elegant_leather_jacket.jpg" title="Black Leather Jacket" price="200" currency="$"/>
          <RatedProductCard img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/10/spring_printed_dress.jpg" title="Black Leather Jacket" price="200" currency="$"/>
          <RatedProductCard img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/09/blue_leather_jacket.jpg" title="Black Leather Jacket" price="200" currency="$"/>
        </div>
      </div>
    
     );
}
 
export default RatedProducts;
const RatedProductCard = ({img,title,stars,price,currency}) => {
    return ( 
        <div className="rating-card rating-card--gray">
        <div className="rating-card__desc">
          <div className="rating-card__desc rating-card__desc--des">
            {title}
            </div>
          <div className="rating-card__desc rating-card__desc--rating">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
          <div className="rating-card__desc rating-card__desc--price">
            {currency+price}
            </div>
        </div>
        <div className="rating-card__img">
          <img
            className="rating-card__image"
            src={img}
          />
        </div>
      </div>
     
     );
}
 
export default RatedProductCard;
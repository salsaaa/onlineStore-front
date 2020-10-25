const CollectionCard = ({img,title,subTitle}) => {
    return (  <div
        className=" slider slider--center"
        style={{
          backgroundImage:
            `url("${img}")`,
        }}
      >
        {/* <div class="image image--primary"> */}
        <div className="slider__title slider__title--primary">
         {title}
          </div>
        <div className="slider__title slider__title--secondary">
          {subTitle}
          </div>
        <div className="slider__btns">
          <div className="slider__btns--btn">
            <a className="btn--secondary">VIEW MORE</a>
          </div>
        </div>
      </div>
      );
}
 
export default CollectionCard;
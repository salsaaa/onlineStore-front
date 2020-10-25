const Slider = () => {
  return (
    <React.Fragment>
      <div className="slider slider--center slider--Animation">
        {/* <div class="image image--primary"> */}
        <div className="slider__title slider__title--primary slider__title--primary--lg">
          Brand New Arrivals
        </div>
        <div className="slider__title slider__title--secondary slider__title--secondary--lg">
          NEW COLLECTION FROM NEW YORK
        </div>
        <div className="slider__btns">
          <div className="slider__btns--2btn">
            <a className="btn--secondary btn--lg-font">VIEW ALL</a>
            <a className="btn--secondary btn--lg-font">LOOKBOOK</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Slider;

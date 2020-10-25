const SalesCard = ({ img, title, desc }) => {
  return (
    <div
      className=" slider slider--left slider--mwidth"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      {/* <div class="image image--primary"> */}
      <div className="slider__title slider__title--primary">{title}</div>
      <span className="slider__title slider__title--secondary">{desc}</span>
      <div className="slider__btns">
        <div className="slider__btns--btn">
          <a className="btn--secondary">VIEW MORE</a>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;

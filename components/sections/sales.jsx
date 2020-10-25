import SalesCard from "../cards/salesCard";
const Sales = () => {
  return (
    <div className="gray">
      <div className="container container--space container--maxwidth container--padding">
        <SalesCard
          img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/09/promo_box_2_bg.jpg"
          title="Free Shipping"
          desc="Vivamus tempor leo lacus, feugiatut magna aliquam erat."
        />
        <SalesCard
          img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/09/promo_box_1_bg.jpg"
          title="70% Off"
          desc="Vivamus tempor leo lacus, feugiatut magna aliquam erat."
        />
      </div>
    </div>
  );
};

export default Sales;

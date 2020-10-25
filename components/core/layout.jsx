import React, { useState, useEffect } from "react";
import RatedProductCard from "../cards/ratedProductCard";
import ShoppingCard from "../cards/shoppingCard";
import { Badge } from "antd";
import { Modal, Button, Space } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";

const Layout = (props) => {
  const router = useRouter();
  useEffect(() => {
    handleShoppingCardList();
    props.onAddCartClick();
  }, []);
  const [visible, setVisible] = useState(false);
  const [cost, setCost] = useState(0);
  const [currency, setCurrency] = useState('');
  const [shoppingCardList, setShoppingCardList] = useState([]);
  const showModal = () => {
    setVisible(true);
    handleShoppingCardList()
  };
  const hideModal = () => {
    setVisible(false);
    setShoppingCardList([])
  };
  const handleOk = () => {
    setVisible(false);
    router.push("/placeOrder");
  };
  const handleShoppingCardList = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) {
      setShoppingCardList(products);
    }
  };
  const handleQunatityChange=(cost,currency)=>{
    setCost(cost);
    setCurrency(currency)
  }
  return (
    <React.Fragment>
      <Modal
        title="Shopping Cart"
        visible={visible}
        onOk={handleOk}
        onCancel={hideModal}
        okText="Place this Order"
        cancelText="Cancel"
      >
        {shoppingCardList?.map((product) => (
          <ShoppingCard key={product._id}  handleShoppingCardList={ handleShoppingCardList} onAddCartClick={props.onAddCartClick} onQntChange={handleQunatityChange} product={product}/>
        ))}
        <div className="shopping-card">
          <div>Total Cost</div>
        <div className="shopping-card__total-cost">{cost}{currency}</div>
        </div>
      </Modal>
      <div>
        <div>
          <div className="header">
            <div className="header__logo">
              <img src="/logo.png" />
            </div>
            <div className="header__nav">
              <ul className="nav">
                <li className="nav__item nav__item--colored">
                  <Link href="/">
                    <a className="nav__item__link--colored">Home</a>
                  </Link>
                </li>
                <li className="nav__item">
                  <a className="nav__item__link">Shop </a>{" "}
                  <i className="fa fa-chevron-down" />
                  <ul className="submenu">
                    <li className="submenu__item">
                      <a className="submenu__item__link">Shop 1</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__item__link">Shop 2</a>
                    </li>
                  </ul>
                </li>
                <li className="nav__item">
                  <a className="nav__item__link">Product</a>{" "}
                  <i className="fa fa-chevron-down" />
                  <ul className="submenu">
                    <li className="submenu__item">
                      <a className="submenu__item__link">Simple Product</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__item__link">Grouped Product</a>
                    </li>
                  </ul>
                </li>
                <li className="nav__item">
                  <a className="nav__item__link">Categories</a>{" "}
                  <i className="fa fa-chevron-down" />
                  <ul className="submenu submenu--category">
                    <div className="submenu__category">
                      <div className="category">
                        <div className="category__name">Men</div>
                        <div className="category__img">
                          <img
                            className="category__image"
                            src="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/12/promotion_men_img.jpg"
                          />
                        </div>
                      </div>
                      <div className="category">
                        <div className="category__name">Women</div>
                        <div className="category__img">
                          <img
                            className="category__image"
                            src="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/12/promotion_women_img.jpg"
                          />
                        </div>
                      </div>
                      <div className="category">
                        <div className="category__name">Accessories</div>
                        <div className="category__img">
                          <img
                            className="category__image"
                            src="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/12/promotion_accessories_img.jpg"
                          />
                        </div>
                      </div>
                      <div className="category">
                        <div className="category__name">Promotion</div>
                        <div className="category__img">
                          <img
                            className="category__image"
                            src="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/12/sidebar_promotion_img.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav__item">
                  <a className="nav__item__link">New </a>
                </li>
                <li className="nav__item">
                  <a className="nav__item__link">Elements </a>{" "}
                  <i className="fa fa-chevron-down" />
                  <ul className="submenu">
                    <li className="submenu__item">
                      <a className="submenu__item__link">Featured Products</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__item__link">Recent Products</a>
                    </li>
                  </ul>
                </li>
                <div onClick={showModal} className="cart-icon">
                  <Badge count={props.cartNumber} showZero>
                    <i className="fa fa-shopping-cart" />
                  </Badge>
                </div>
              </ul>
            </div>
          </div>
        </div>
        {props.children}
        <div className="gray">
          <div className="brand">
            <div className="brand__name">BRANDS LOGOS</div>
            <div className="container container--space container--maxwidth">
              <div className="brand__logo">
                <img src="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/09/b_logotype_2.png" />
              </div>
              <div className="brand__logo">
                <img src="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/09/b_logotype_7.png" />
              </div>
              <div className="brand__logo">
                <img src="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/09/b_logotype_3.png" />
              </div>
              <div className="brand__logo">
                <img src="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/09/b_logotype_4.png" />
              </div>
              <div className="brand__logo">
                <img src="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/09/b_logotype_6.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="subscribe">
          <div className="subscribe__left">
            <div className="subscribe__icon">
              <i className="fa fa-envelope" />{" "}
            </div>
            <div className="subscribe__desc">
              Subscribe now and get special offers
            </div>
          </div>
          <div className="subscribe__right">
            <div className="subscribe__txt">
              <input
                className="subscribe__txt__contorl"
                type="text "
                placeholder="Insert your email"
              />
            </div>
            <div className="subscribe__btn">
              <a className="subscribe__btn btn--primary">SEND</a>
            </div>
          </div>
        </div>
        <div className="footer__color  container--space">
          <div className="footer container--maxwidth">
            <div className="address">
              <img className="address__logo" src="/logo.png" />
              <div className="address__add">
                12345 North Main Street,
                <br />
                New York, NY 555555
                <br />
                Phone: 1.800.555.6789
                <br />
                Email: info@company.com
                <br />
                Web: Theme-fusion.com
              </div>
              <div className="social-icons">
                <div className="social-icons">
                  <i className="fa fa-twitter" />
                </div>
                <div className="social-icons">
                  <i className="fa fa-facebook-f" />
                </div>
                <div className="social-icons">
                  <i className="fa fa-instagram" />
                </div>
                <div className="social-icons">
                  <i className="fa fa-pinterest-p" />
                </div>
                <div className="social-icons">
                  <i className="fa fa-youtube" />
                </div>
              </div>
            </div>
            <div className="rating-cards">
              TOP RATED PRODUCTS
              <RatedProductCard
                img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/10/black_elegant_leather_jacket.jpg"
                title="Black Leather Jacket"
                price="200"
                currency="$"
              />
              <RatedProductCard
                img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/10/black_elegant_leather_jacket.jpg"
                title="Black Leather Jacket"
                price="200"
                currency="$"
              />
              <RatedProductCard
                img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/10/black_elegant_leather_jacket.jpg"
                title="Black Leather Jacket"
                price="200"
                currency="$"
              />
            </div>
            <div className="recent-posts">
              RECENT POSTS
              <div className="recent-posts__desc">
                &gt; Aenean lobortis sapien enim viverra
              </div>
              <div className="recent-posts__desc">
                &gt; Aenean lobortis sapien enim viverra{" "}
              </div>
              <div className="recent-posts__desc">
                &gt; Aenean lobortis sapien enim viverra
              </div>
              <div className="recent-posts__desc">
                &gt; Aenean lobortis sapien enim viverra
              </div>
              <div className="recent-posts__desc">
                &gt; Aenean lobortis sapien enim viverra
              </div>
              <div className="recent-posts__desc">
                &gt; Aenean lobortis sapien enim viverra
              </div>
            </div>
            <div className="tags-component">
              <h2 className="tags-component__name">TAGS</h2>
              <div className="tags-component__tags">
                <div className="tags-component__tags__btn">
                  <a className="btn--third">black</a>
                </div>
                <div className="tags-component__tags__btn">
                  <a className="btn--third">boots</a>
                </div>
                <div className="tags-component__tags__btn">
                  <a className="btn--third">brown</a>
                </div>
                <div className="tags-component__tags__btn">
                  <a className="btn--third">casual</a>
                </div>
                <div className="tags-component__tags__btn">
                  <a className="btn--third">black</a>
                </div>
                <div className="tags-component__tags__btn">
                  <a className="btn--third">black</a>
                </div>
                <div className="tags-component__tags__btn">
                  <a className="btn--third">black</a>
                </div>
                <div className="tags-component__tags__btn">
                  <a className="btn--third">black</a>
                </div>
                <div className="tags-component__tags__btn">
                  <a className="btn--third">black</a>
                </div>
                <div className="tags-component__tags__btn">
                  <a className="btn--third">black</a>
                </div>
                <div className="tags-component__tags__btn">
                  <a className="btn--third">black</a>
                </div>
                <div className="tags-component__tags__btn">
                  <a className="btn--third">black</a>
                </div>
                <div className="tags-component__tags__btn">
                  <a className="btn--third">black</a>
                </div>
                <div className="tags-component__tags__btn">
                  <a className="btn--third">black</a>
                </div>
                <div className="tags-component__tags__btn">
                  <a className="btn--third">black</a>
                </div>
                <div className="tags-component__tags__btn">
                  <a className="btn--third">black</a>
                </div>
                <div className="tags-component__tags__btn">
                  <a className="btn--third">black</a>
                </div>
                <div className="tags-component__tags__btn">
                  <a className="btn--third">black</a>
                </div>
                <div className="tags-component__tags__btn">
                  <a className="btn--third">black</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-color">
          <div className="copyright  container--space">
            <div className="copyright__desc">
              © Copyright 2012 - 2019 | Salsabil muhammed | All Rights Reserved
              | Powered by ...
            </div>
            <img
              className="copyright__image"
              src="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/09/payment_cards_footer.png"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;

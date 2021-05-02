import React from "react";
import { connect } from "react-redux";
import { setCartToggle } from "../../redux/cart/cartActions";
import "./styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/11.2 shopping-bag.svg";

function CartIcon({ setCartToggle }) {
  return (
    <div className="cart-icon" onClick={setCartToggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCartToggle: () => dispatch(setCartToggle()),
});

export default connect(null, mapDispatchToProps)(CartIcon);

import React from "react";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";
import { setCartToggle } from "../../redux/cart/cartActions";
import "./styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/11.2 shopping-bag.svg";

function CartIcon({ setCartToggle, count }) {
  return (
    <div className="cart-icon" onClick={setCartToggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCartToggle: () => dispatch(setCartToggle()),
});

const mapStateToProps = (state) => ({
  count: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

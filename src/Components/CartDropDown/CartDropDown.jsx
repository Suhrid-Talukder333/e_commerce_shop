import React from "react";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import CartItems from "../CartItems/CartItems";
import { setCartToggle } from "../../redux/cart/cartActions";
import { createStructuredSelector } from "reselect";
import "./styles.scss";

function CartDropDown({ cartItems, history, setCartToggle }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <span className="empty-message">Your Cart is Empty</span>
        ) : (
          cartItems.map((item) => <CartItems key={item.id} {...item} />)
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          setCartToggle();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
const mapDispatchToState = (dispatch) => ({
  setCartToggle: () => dispatch(setCartToggle()),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToState)(CartDropDown)
);

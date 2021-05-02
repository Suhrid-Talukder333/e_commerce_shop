import React from "react";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import CartItems from "../CartItems/CartItems";
import { createStructuredSelector } from "reselect";
import "./styles.scss";

function CartDropDown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItems key={item.id} {...item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, null)(CartDropDown);

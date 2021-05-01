import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./styles.scss";

export default function CartDropDown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

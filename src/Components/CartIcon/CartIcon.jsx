import React from "react";
import "./styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/11.2 shopping-bag.svg";

export default function CartIcon() {
  return (
    <div className="cart-icon ">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

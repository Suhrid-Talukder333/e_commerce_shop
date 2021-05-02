import React from "react";
import "./styles.scss";
import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import { addItemsToCart } from "../../redux/cart/cartActions";

function CollectionItem({ item, addItemsToCart }) {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="image"
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addItemsToCart(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
}

const mapDispatchToState = (dispatch) => ({
  addItemsToCart: (item) => dispatch(addItemsToCart(item)),
});

export default connect(null, mapDispatchToState)(CollectionItem);

import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { shopSelector } from "../../redux/shop/shopSelector";
import PreviewCollection from "../PreviewCollection/PreviewCollection";
import "./styles.scss";

function CollectionsOverview({ collections }) {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  collections: shopSelector,
});
export default connect(mapStateToProps, null)(CollectionsOverview);

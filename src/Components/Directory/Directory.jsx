import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { directorySelector } from "../../redux/directory/directorySelector";
import React, { Component } from "react";
import MenuItem from "../Menu-item/MenuItem";
import "./styles.scss";

function Directory({ sections }) {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: directorySelector,
});

export default connect(mapStateToProps, null)(Directory);

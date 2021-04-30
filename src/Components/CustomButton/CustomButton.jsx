import React from "react";
import "./styles.scss";

export default function CustomButton({
  children,
  isGoogleSignIn,
  ...otherProps
}) {
  return (
    <button
      className={`${isGoogleSignIn ? "goggle-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({children, isGoogleSignIn, inverted, ...otheProps}) => {
    return(
        <button className={`${inverted ? "inverted" : ""} ${isGoogleSignIn? "google-sign-in": ""} custom-button`} {...otheProps}>
            {children}
        </button>
    )
}

export default CustomButton;    
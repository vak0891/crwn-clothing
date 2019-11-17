import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({children, isGoogleSignIn, ...otheProps}) => {
    return(
        <button className={`${isGoogleSignIn? "google-sign-in": ""} custom-button`} {...otheProps}>
            {children}
        </button>
    )
}

export default CustomButton;    
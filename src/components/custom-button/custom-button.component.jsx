import React from "react";
import "./custom-button.styles.scss";
import {CustomButtonContainer} from "./custom-button.styles";

const CustomButton = ({children, isGoogleSignIn, inverted, ...otheProps}) => {
    return(
        <button className={`${inverted ? "inverted" : ""} ${isGoogleSignIn? "google-sign-in": ""} custom-button`} {...otheProps}>
            {children}
        </button>
    )
}

// const CustomButton = ({children, ...Props}) => {
//     return(
//         <CustomButtonContainer{...Props}>
//             {children}
//         </CustomButtonContainer>
//     )
// }
export default CustomButton;    
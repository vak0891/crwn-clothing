import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(){
        super()
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState = {
            [name]: value
        }
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({
            email: "",
            password: ""
        });
    }

    render(){
        return(
            <div className="sign-in" onSubmit={this.handleSubmit}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form>
                    <FormInput name="email" value={this.state.email} required type="email" handleChange={this.handleChange} label="email"/>
                    <FormInput name="password" value={this.state.password} required type="password" handleChange={this.handleChange} label="password"/>
                    <div className="buttons">
                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
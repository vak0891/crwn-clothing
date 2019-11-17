import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

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

    handleSubmit = async event =>{
        event.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: "",
                password: ""
            });
        }
        catch(error){
            console.log("Error", error.message);
        }

    }

    render(){
        const {email, password} = this.state;
        return(
            <div className="sign-in" onSubmit={this.handleSubmit}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form>
                    <FormInput type="email" name="email" value={email} required  handleChange={this.handleChange} label="Email"/>
                    <FormInput type="password" name="password" value={password} required handleChange={this.handleChange} label="Password"/>
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
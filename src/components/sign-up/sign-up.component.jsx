import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button-component';

import { auth,  createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';


class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({ [name] : value})

    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if( password !== confirmPassword) {
            alert(" password and confirm password are not the same!");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                                        email, 
                                        password
                                    );
                        

            await  createUserProfileDocument(user, { displayName });  
            
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch(error) {
            console.log("can't create user because : ");
            console.log(error.message);
        }
    }

    render() {
        const { displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2>I don't have an account</h2>
                <span>Sign up with your Email and Password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput name="displayName" 
                            type="text" 
                            value={displayName} 
                            onChange={this.handleChange}
                            label="Display Name"
                            required />
                    <FormInput name="email" 
                            type="email" 
                            value={email} 
                            onChange={this.handleChange}
                            label="Email"
                            required />
                    <FormInput name="password" 
                            type="password" 
                            value={password} 
                            onChange={this.handleChange}
                            label="Password"
                            required />
                    <FormInput name="confirmPassword" 
                            type="password" 
                            value={confirmPassword} 
                            onChange={this.handleChange}
                            label="Confirm Password"
                            required />        
                    <div className="buttons">      
                        <CustomButton type="submit" >Sign Up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;
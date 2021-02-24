import React, { Component } from 'react'
import ValidationError from './ValidationError'

class RegistrationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: {
                value: '',
                touched: false
            },
            password: {
                value: '',
                touched: false
            },
            repeatPassword: {
                value: '',
                touched: false
            }
        }
    }

    updateName(name) {
        this.setState({ name: {value: name, touched: true} })
    }

    updatePassword(password) {
        this.setState({ password: {value: password, touched: true} })
    }

    updateRepeatPassword(repeatPassword) {
        this.setState({ repeatPassword: {value: repeatPassword, touched: true} })
    }
    
    validateName() {
        const name = this.state.name.value.trim()
        if (name.length === 0){
            return "Name is required"
        }
        else if (name.length < 3) {
            return "Name must be at least 3 characters long"
        }
    }

    validatePassword() {
        const password = this.state.password.value.trim();
        if (password.length === 0) {
            return "Password is required"
        }
        else if (password.length < 6 || password.length > 72) {
            return "Password must be between 6 and 72 characters"
        }
        else if (!password.match(/[0-9]/)) {
            return "Password must contain at least one number"
        }
    }

    validateRepeatPassword() {
        const repeatPassword = this.state.repeatPassword.value.trim()
        const password = this.state.password.value.trim()
        if(repeatPassword !== password){
            return "Passwords do not match!"
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const {name, password, repeatPassword} = this.state
    
        console.log('name: ', name.value)
        console.log('password:', password.value)
        console.log('repeatPassword:', repeatPassword.value)
        
    }
    
    render() {
        return (
            <form className='registration' onSubmit={e => this.handleSubmit(e)}>
                <h2>Register</h2>
                <div className="registration__hint">* required field</div> 

                <br />

                <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input 
                        type="text" 
                        className="registration__control"
                        name="name" 
                        id="name"
                        ref={this.nameInput}
                        defaultValue="Sean"
                        onChange={e => this.updateName(e.target.value)}
                    />
                    {this.state.name.touched && (
                        <ValidationError message={this.validateName()} />
                    )}
                </div>

                <br />

                <div className="form-group">
                    <label htmlFor="password">Password *</label>
                    <input 
                        type="password" 
                        className="registration__control"
                        name="password" 
                        id="password"
                        ref={this.passwordInput}
                        onChange={e => this.updatePassword(e.target.value)}
                    />
                    
                    {this.state.name.touched && (
                        <ValidationError message={this.validatePassword()} />
                    )}

                <div className="registration__hint">6 to 72 characters, must include a number</div>
                
                <br />

                </div>
                <div className="form-group">
                    <label htmlFor="repeatPassword">Repeat Password *</label>
                    <input 
                        type="password" 
                        className="registration__control"
                        name="repeatPassword" 
                        id="repeatPassword"
                        ref={this.repeatPasswordInput}
                        onChange={e => this.updateRepeatPassword(e.target.value)}
                    />
                    
                    {this.state.name.touched && (
                        <ValidationError message={this.validateRepeatPassword()} />
                    )}

                </div>

                <br />

                <div className="registration__button__group">
                    <button type="reset" className="registration__button">
                        Cancel
                    </button>
                    <br />
                    <button 
                        type="submit" 
                        className="registration__button"
                        disabled={
                            this.validateName() ||
                            this.validatePassword() ||
                            this.validateRepeatPassword()
                        }
                    >
                        Save
                    </button>
                </div>
            </form>
        )
    }
}

export default RegistrationForm
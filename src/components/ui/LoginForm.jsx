import React, { Component } from 'react'

const initialState = {
    name: '',
    email: ''
}

export default class LoginForm extends Component {
    state = initialState

    handleSubmit = (e) => {
        e.preventDefault()
        
        this.props.loginUser(this.state)

        // reset fields
        this.setState(initialState)  
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }
    
    render() {
        return (
            <form className="login-form" onSubmit={this.handleSubmit}>
                <input 
                    name="email"
                    value={this.state.email} 
                    placeholder={"email"} 
                    onChange={this.handleChange} 
                    required
                />
                <input 
                    name="password"
                    value={this.state.password} 
                    placeholder={"password"} 
                    onChange={this.handleChange} 
                    required
                />

                <button role="submit">Log In</button>
            </form>
        )
    }
}
import React, { Component } from 'react'

// local form state
const initialState = {
    username: '',
    password: '',
    name: '',
    role: '',
    email: '',
    country: '',
    phone: '',
}

export default class SignUpForm extends Component {
    state = initialState
    
    handleSubmit = (e) => {
        e.preventDefault()

        // TODO: grab auth token off context, not props
        this.props.registerUser(this.props.authToken, this.state)
        
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
            <form 
                className="sign-up"
                onSubmit={this.handleSubmit}
            >
                <input 
                    name="username"
                    value={this.state.username} 
                    placeholder={"username"} 
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
                <input 
                    name="name"
                    value={this.state.name} 
                    placeholder={"name"} 
                    onChange={this.handleChange} 
                    required
                />
                <input 
                    name="email"
                    value={this.state.email} 
                    placeholder={"email"} 
                    onChange={this.handleChange} 
                    required
                />
                <input 
                    name="role"
                    value={this.state.role} 
                    placeholder={"role"} 
                    onChange={this.handleChange} 
                    required
                />
                <input 
                    name="country"
                    value={this.state.country} 
                    placeholder={"country"} 
                    onChange={this.handleChange} 
                    required
                />
                <input 
                    name="phone"
                    value={this.state.phone} 
                    placeholder={"phone"} 
                    onChange={this.handleChange} 
                    required
                />

                <button role="submit">Sign Up</button>
            </form>
        )
    }
    
}
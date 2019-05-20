import React, { useState } from 'react'

export default function SignUpForm(props) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    function handleSubmit(e) {
        e.preventDefault()
        // props.dispatch({ type: NewUser, payload: { email, password } })
        return {
            email,
            password
        }
    }

    function handleChange(action, {target:{value}}) {
        switch(action.type) {
            case 'email':
                setEmail(value)
                break
            case 'password':
                setPassword(value)
                break
            default: 
                console.warn('could not handle change for', value)
        }
    }
    
    return (
        <form 
            className="sign-up"
            onSubmit={handleSubmit}
        >
            <input 
                name="email"
                value={email} 
                placeholder={"email"} 
                onChange={handleChange.bind({type: email})} 
            />
            <input 
                name="password"
                value={password} 
                placeholder={"password"} 
                onChange={handleChange.bind({type: password})} 
            />
            <button role="submit">Sign Up</button>
        </form>

    )
}
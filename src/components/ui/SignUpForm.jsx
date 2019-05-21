import React, { useState } from 'react'

export default function SignUpForm(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        // use useEffect to make POST request to register/login route 
        // props.dispatch({ type: NewUser, payload: { email, password } })

        // reset fields
        setEmail('')
        setPassword('')
        return {
            email,
            password
        }
      
    }

    const handleChange = (field) => (e) => {
        switch(field) {
            case 'email':
                setEmail(e.target.value)
                break
            case 'password':
                setPassword(e.target.value)
                break
            default: 
                console.warn('could not handle change for', e.target.value)
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
                onChange={handleChange("email")} 
            />
            <input 
                name="password"
                value={password} 
                placeholder={"password"} 
                onChange={handleChange("password")} 
            />
            <button role="submit">Sign Up</button>
        </form>

    )
}
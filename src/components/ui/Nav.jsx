import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Nav(props) {
    return (
        <nav>
            <NavLink to="/">
                <img src={props.logo || "#"} alt="Logo" />
            </NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    )
}
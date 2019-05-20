import React from 'react'


export default function Nav(props) {
    return (
        <nav>
            <img src={props.logo || "#"} alt="Logo" />
            <a>SignUp/Login</a>
            <a>About</a>
            <a>Contact</a>
        </nav>
    )
}
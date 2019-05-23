import React, { useState } from 'react';

export default function Dashboard(props) {
    let [isOpen, toggleIsOpen] = useState(false)

    const handleClick = _ => {
        toggleIsOpen(!isOpen)
    }
    
    return (
        (isOpen) 
            ? <div className="drawer--open" >
                <HamburgerIcon onClick={handleClick} />
                { ...props.children }
              </ div>
              
            : <div className="drawer--close">
                <HamburgerIcon onClick={handleClick} />
              </div>

    )
}

function HamburgerIcon(props) {
    return <img src="https://img.icons8.com/material/24/000000/menu.png"/>
}
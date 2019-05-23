import React from 'react'
import { useStyletron } from "styletron-react"

const defaultProps= { 
  text: '',
  color: 'black', 
  quantity: new Array(1), 
  styles:[] 
}

export default function Button({
  text, 
  quantity, 
  styles, 
  color
}=defaultProps) {
  // styletron css hook
  const [css] = useStyletron()

  function renderBtn(btn, i) {
    return (
      <button 
        key={i}
        className={css(
          (styles)
            ? { ...styles }
            : { color: color || "blue" }
        )}>
          {text || ""}
      </button>
    )
}
  
  // for amount specificied in quanity, render a button
  return (
    <>
    { (quantity)
        ? quantity.map(renderBtn)
        : <button className={css(
            (styles)
              ? { ...styles }
              : { color: color || "blue" }
            )}>
              {text || "Click me"}
          </button>
    }
    </> 
  )
}



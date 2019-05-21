import React from 'react'
import { useStyletron } from "styletron-react"

export default function Button(props) {
  const [css] = useStyletron()
  
  return (
    <>
    { (props.quantity)
        ? props.quantity.map((x => (
                <button className={css(
                  (props.styles)
                    ? { ...props.styles }
                    : { color: props.color || "blue" }
                  )}>
                    {props.text || ""}
                </button>
            )
        ))
        : <button className={css(
            (props.styles)
              ? { ...props.styles }
              : { color: props.color || "blue" }
            )}>
              {props.text || "Click me"}
          </button>
    }
    </> 
  )
}



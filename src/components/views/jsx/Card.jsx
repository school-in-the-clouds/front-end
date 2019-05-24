import React from 'react'

import Elm from 'react-elm-components'
import { Avatar } from '../web/Avatar'
 
function renderAvatar(img) {
    return <Elm src={Avatar} flags={{img}} />
}



export default function Card(props) {
    return (
        <div className="card">
            {renderAvatar()}
            <p>{props.name}</p>
        </div>
    )
}
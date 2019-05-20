import React from 'react'

import Elm from 'react-elm-components'
import { Profile } from '../web/Profile'

export default function ProfileCard(props) {
    return (
        <div>
            <Elm src={Profile} flags={[...props]}></Elm>
        </div>
    )
}

/** 
 * Users can edit their username or password.
 */


// import axios from 'axios'

import { curry } from 'ramda'
// See Line 6 of "./task.js" for quick primer on how to use curry

export const EDIT_PASSWORD_INIT = "EDIT_PASSWORD_INIT"
export const EDIT_PASSWORD_SUCCESS = "EDIT_PASSWORD_SUCCESS"
export const EDIT_PASSWORD_FAILURE = "EDIT_PASSWORD_FAILURE"

// editPassword: String -> (x -> void) -> void
export const editPassword = curry((authToken, newPassword) => (dispatch) => {
    dispatch({ type: "EDIT_PASSWORD_INIT" })
    // axios.post()
    // TODO: get endpoint for handling password updates
})


export const EDIT_USERNAME_INIT = "EDIT_USERNAME_INIT"
export const EDIT_USERNAME_SUCCESS = "EDIT_USERNAME_SUCCESS"
export const EDIT_USERNAME_FAILURE = "EDIT_USERNAME_FAILURE"

// editUsername: String -> (x -> void) -> void
export const editUsername = curry((authToken, newUsername) => (dispatch) => {
    dispatch({ type: "EDIT_PASSWORD_INIT" })
    // axios.post()
    // TODO: get endpoint for handling username updates
})
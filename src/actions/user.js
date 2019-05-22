/** 
 * Users can edit their username or password.
 */


import axios from 'axios'


export const EDIT_PASSWORD_INIT = "EDIT_PASSWORD_INIT"
export const EDIT_PASSWORD_SUCCESS = "EDIT_PASSWORD_SUCCESS"
export const EDIT_PASSWORD_FAILURE = "EDIT_PASSWORD_FAILURE"

export const editPassword = (newPassword) => (dispatch) => 
    ({
        type: "EDIT_PASSWORD_INIT",
        payload: newPassword
    })

export const EDIT_USERNAME_INIT = "EDIT_USERNAME_INIT"
export const EDIT_USERNAME_SUCCESS = "EDIT_USERNAME_SUCCESS"
export const EDIT_USERNAME_FAILURE = "EDIT_USERNAME_FAILURE"

export const editUsername = (newUsername) => (dispatch) =>
    ({
        type: "EDIT_PASSWORD_INIT",
        payload: newUsername
    })
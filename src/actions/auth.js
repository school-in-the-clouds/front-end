/**
 * Authenticate users by either logging them in or signing them up.
 */


import axios from 'axios'

const BASE_URL = "https://school-itc.herokuapp.com/api"

// ---- LOGIN ----

export const LOG_IN_INIT = "LOG_IN_INIT"
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS"
export const LOG_IN_FAILURE = "LOG_IN_FAILURE"


export const loginUser = (userInfo) => (dispatch) => {
    dispatch({ type: SIGN_UP_INIT })

    axios.post(`${BASE_URL}/accounts/login`, userInfo)
    .then(res => {
        localStorage.setItem("school-in-the-cloud-auth-key", res.data.token)
         dispatch({
            type: SIGN_UP_SUCCESS,
            payload: res.data.token
        })
    })
     .catch(err => { 
        dispatch({
            type: SIGN_UP_FAILURE, 
            payload: err 
        })
    })
}


//  ---- SIGN UP ----

export const SIGN_UP_INIT = "SIGN_UP_INIT"
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS"
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE"


export const registerUser = (userInfo) => (dispatch) => {
    dispatch({ type: SIGN_UP_INIT })

    axios.post(`${BASE_URL}/accounts/register`, userInfo)
    .then(res => {
        dispatch({ 
            type: SIGN_UP_SUCCESS,
            payload: res.data
         })
    })
    .catch(err => { 
        dispatch({
            type: SIGN_UP_FAILURE, 
            payload: err 
        })
    })
}
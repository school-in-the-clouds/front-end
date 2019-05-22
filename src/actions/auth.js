import axios from 'axios'


// ---- LOGIN ----

export const LOG_IN_INIT = "LOG_IN_INIT"
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS"
export const LOG_IN_FAILURE = "LOG_IN_FAILURE"

// loginUser: Obj -> void
export const loginUser = (userInfo) => (dispatch) => {
    dispatch({ type: SIGN_UP_INIT })
    axios.post("https://school-itc.herokuapp.com/api/accounts/login", userInfo)
    .then(res => {
         dispatch({
            type: SIGN_UP_SUCCESS,
            payload: res
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


// registerUser:  Obj -> void
export const registerUser = (userInfo) => (dispatch) => {
    dispatch({ type: SIGN_UP_INIT })
    axios.post("https://school-itc.herokuapp.com/api/accounts/register", userInfo)
    .then(res => {
        dispatch({
            type: SIGN_UP_SUCCESS,
            payload: res
        })
    })
    .catch(err => { 
        dispatch({
            type: SIGN_UP_FAILURE, 
            payload: err 
        })
    })
}
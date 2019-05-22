// ---- LOGIN ----

export const LOG_IN_INIT = "LOG_IN_INIT"
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS"
export const LOG_IN_FAILURE = "LOG_IN_FAILURE"

// loginUser: Obj -> void
export const loginUser = (userInfo) => (dispatch) => {
     // TODO: use axios
     dispatch({type: SIGN_UP_INIT})
     fetch("https://school-itc.herokuapp.com/api/accounts/login",{
         method: 'POST',        
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(userInfo), 
     })
     .then(res => res.json())
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
    // TODO: use axios
    dispatch({type: SIGN_UP_INIT})
    fetch("https://school-itc.herokuapp.com/api/accounts/register",{
        method: 'POST',        
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo), 
    })
    .then(res => res.json())
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
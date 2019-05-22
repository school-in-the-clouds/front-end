import { useReducer, useEffect } from 'react'

// Registration Data Shape
// {
//     username: "jane doe",
//     password: "password",
//     country: "USA",
//     name: "Jane",
//     role: "admin",
//     email: "test@test.com",
//     phone: "1111111111"
// }

// Login Data Shape 
// {
//     username: "jane doe",
//     password: "password"
// }


function authReducer(state, action) {
    switch(action.type) {
        default: 
        return state
    }
}

// useAuthentication: Bool -> [Func, Func, Func]
export default function useAuthentication(isExistingUser=false) {
    // TODO: validate data before forwarding it
    const [loginStatus, dispatchLoginStatus] = useReducer(authReducer, {
        body: {},
        attempts: 0,
        attemptingLogin: false,
        loggedIn: false,
        errors: [],
        authKey: localStorage.getItem('school-in-the-cloud-auth-key')
    })
    
    return useEffect(() => {
        if (isExistingUser) {
            // logging in...
                if(loginStatus.loggedIn) {
                    // determine role (student, admin, volunteer)
                    // redirect to dashboard
                } else if(!loginStatus.loggedIn && loginStatus.attempts > 3) {
                    // apologize and issue a cooldown period
                    // display friendly error message
                } else {
                    // not logged in
        
                    // display error messages if there are any (ex: password too short)
                    // so something like... errors.map(renderError)
                    return [loginUser, loginStatus, dispatchLoginStatus]
                }
        } else {
            // registering...
            return [registerUser, loginStatus, dispatchLoginStatus]
        }
    }, [])
}

/*
    The two functions below return a promise containing 
    the server response from the attmepted login
*/

// registerUser:  Obj -> Promise
function registerUser(userInfo) {
    return new Promise((resolve, reject) => {
        fetch("https://school-itc.herokuapp.com/api/accounts/register",{
            method: 'POST',        
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo), 
        })
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => reject(err))
    })
}

// loginUser: Obj -> Promise
function loginUser(userInfo) {
    return new Promise ((resolve, reject) => {
        fetch("https://school-itc.herokuapp.com/api/accounts/login", {
            method: 'POST',
            headers: { 'Content-Type': 'applicatoin/json' },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => reject(err))
    })
}
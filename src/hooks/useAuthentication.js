import { useReducer, useEffect } from 'react'

const defaultRegisrationData = {
    username: "jane doe",
    password: "password",
    country: "USA",
    name: "Jane",
    role: "admin",
    email: "test@test.com",
    phone: "1111111111"
}

const defaultLoginData = {
    username: "jane doe",
    password: "password"
}


function authReducer(state, action) {
    switch(action.type) {
        default: 
        return state
    }
}

export default function useAuthentication(isExistingUser=false, userInfo=defaultRegisrationData) {
    // TODO: validate data before forwarding it
    const [loginStatus, dispatchLoginStatus] = useReducer(authReducer, {
        body: userInfo,
        attempts: 0,
        loggedIn: false,
        errors: [],
        authKey: localStorage.getItem('school-in-the-cloud-auth-key')
    })
   
    // returns a Promise
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
                    return [loginStatus, dispatchLoginStatus, new Promise(loginUser)]
                }
        } else {
            // registering...
            return [loginStatus, dispatchLoginStatus, new Promise(registerUser)]
        }
    }, [])

    function registerUser(resolve, reject) {
        fetch("https://school-itc.herokuapp.com/api/accounts/register",{
            method: 'POST',        
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo), 
        })
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => reject(err))
    }
    
    
    function loginUser(resolve, reject) {
        fetch("https://school-itc.herokuapp.com/api/accounts/login", {
            method: 'POST',
            headers: { 'Content-Type': 'applicatoin/json' },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => reject(err))
    }
}

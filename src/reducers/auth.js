import { LOG_IN_INIT, LOG_IN_SUCCESS, LOG_IN_FAILURE  } from '../actions/'


const initialState = {
    isLoading: false,
    loggedIn: false,
    name: '',
    role: null,
    authToken: localStorage.getItem('school-in-the-cloud-auth-key'),
    errors: [],
}

export function authReducer(state=initialState, action) {
    switch(action.type) {
        case LOG_IN_INIT:
        case LOG_IN_SUCCESS:
        case LOG_IN_FAILURE:
        default: 
            return state
    }
}
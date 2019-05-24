import { 
    LOGIN_INIT, LOGIN_SUCCESS, LOGIN_FAILURE,
    SIGN_UP_INIT, SIGN_UP_SUCCESS, SIGN_UP_FAILURE
} from '../actions'


const initialState = {
    fetching: false,
    loggedIn: false,
    error: null,
    name: '',
    role: null,
    id: null,
    authToken: localStorage.getItem('school-in-the-cloud-auth-key'),
}


export default function userReducer(state=initialState, action) {
    switch(action.type) {
        case LOGIN_INIT:
            return {
                ...state, 
                fetching: true
            }
        case LOGIN_SUCCESS:
            const { token, role, name, id } = action.payload

            return {
                ...state,
                fetching: false,
                error: null,
                loggedIn: true,
                id,
                name,
                role,
                authToken: token,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }

        case SIGN_UP_INIT:
            return {
                ...state,
                fetching: true
            }
        case SIGN_UP_SUCCESS: 
            return {
                ...state,
                fetching: false,
                error: null,
            }
        case SIGN_UP_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        
        default: 
            return state
    }
}
import { 
    LOG_IN_INIT, LOG_IN_SUCCESS, LOG_IN_FAILURE,
    SIGN_UP_INIT, SIGN_UP_SUCCESS, SIGN_UP_FAILURE
} from '../actions'


const initialState = {
    fetching: false,
    loggedIn: false,
    errors: [],
    authToken: localStorage.getItem('school-in-the-cloud-auth-key'),

    name: '',
    password: '',
    role: null,
}


export default function userReducer(state=initialState, action) {
    switch(action.type) {
        case LOG_IN_INIT:
        case LOG_IN_SUCCESS:
        case LOG_IN_FAILURE:

        case SIGN_UP_INIT:
        case SIGN_UP_SUCCESS:
        case SIGN_UP_FAILURE:
        
        default: 
            return state
    }
}
import { 
    EDIT_USERNAME_INIT, EDIT_USERNAME_SUCCESS, EDIT_USERNAME_FAILURE,
    EDIT_PASSWORD_INIT, EDIT_PASSWORD_SUCCESS, EDIT_PASSWORD_FAILURE,
} from '../actions'


const initialState = {
    fetching: false,
    error: null,
    oldUsername: "",
    oldPassword: "",
    currentUsername: "", 
    curentPassword: ""  
}


export default function userReducer(state=initialState, action) {
    switch(action.type) {
        case EDIT_USERNAME_INIT:
        case EDIT_USERNAME_SUCCESS:
        case EDIT_USERNAME_FAILURE:

        case EDIT_PASSWORD_INIT:
        case EDIT_PASSWORD_SUCCESS:
        case EDIT_PASSWORD_FAILURE:
        
        default: 
            return state
    }
}
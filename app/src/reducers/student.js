import { SEARCH_INIT, SEARCH_SUCCESS, SEARCH_FAILURE } from '../actions'


const initialState = {
    fetching: false,
    errors: [],
    authToken: localStorage.getItem('school-in-the-cloud-auth-key'),
    
    results: [],
}


export default function studentReducer(state=initialState, action) {
    switch(action.type) {
        case SEARCH_INIT:
        case SEARCH_SUCCESS:
        case SEARCH_FAILURE:

        default:
            return state
    }
}
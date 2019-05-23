import {
    ADD_TASK_INIT, ADD_TASK_SUCCESS, ADD_TASK_FAILURE,
    GET_TASK_INIT, GET_TASK_SUCCESS, GET_TASK_FAILURE,
    GET_ALL_TASKS_INIT, GET_ALL_TASKS_SUCCESS, GET_ALL_TASKS_FAILURE,
    EDIT_TASK_INIT, EDIT_TASK_SUCCESS, EDIT_TASK_FAILURE,
    MARK_COMPLETE_INIT, MARK_COMPLETE_SUCCESS, MARK_COMPLETE_FAILURE,
    DELETE_TASK_INIT, DELETE_TASK_SUCCESS, DELETE_TASK_FAILURE
} from '../actions'


const initialState = {
    fetching: false,
    errors: [],
    authToken: localStorage.getItem('school-in-the-cloud-auth-key'),
    
    results: [],
}


export default function taskReducer(state=initialState, action) {
    switch(action.type) {
        case ADD_TASK_INIT:
        case ADD_TASK_SUCCESS:
        case ADD_TASK_FAILURE:

        case GET_TASK_INIT:
        case GET_TASK_SUCCESS:
        case GET_TASK_FAILURE:

        case GET_ALL_TASKS_INIT:
        case GET_ALL_TASKS_SUCCESS:
        case GET_ALL_TASKS_FAILURE:

        case EDIT_TASK_INIT:
        case EDIT_TASK_SUCCESS:
        case EDIT_TASK_FAILURE:

        case MARK_COMPLETE_INIT:
        case MARK_COMPLETE_SUCCESS:
        case MARK_COMPLETE_FAILURE:

        case DELETE_TASK_INIT:
        case DELETE_TASK_SUCCESS:
        case DELETE_TASK_FAILURE:

        default: 
            return state
    }
}
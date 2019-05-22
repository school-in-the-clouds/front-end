/**
 * Admins can perform CRUD operations on tasks.
 */


import axios from 'axios'

// TODO: use ramda to curry action creators


//  ---- CREATE ----

export const ADD_TASK_INIT = "ADD_TASK_INIT"
export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS"
export const ADD_TASK_FAILURE = "ADD_TASK_FAILURE"

export const addTask = (newTask) => (dispatch) =>
    ({
        type: ADD_TASK_INIT,
        payload: newTask
    })




//  ---- READ ----

export const GET_TASK_INIT = "GET_TASK_INIT"
export const GET_TASK_SUCCESS = "GET_TASK_SUCCESS"
export const GET_TASK_FAILURE = "GET_TASK_FAILURE"

export const getTaskById = (authToken, taskId) => (dispatch) => {
    dispatch({ type: GET_TASK_INIT })
    axios.get(
        `https://school-itc.herokuapp.com/api/tasks/${taskId}`, 
        craftHeader(authToken)
    )
    .then(res => {
        dispatch({ 
            type: GET_TASK_SUCCESS,
            payload: res
        })
    })
    .catch(err => {
        dispatch({
            type: GET_TASK_FAILURE,
            payload: err
        })
    })
}

export const getTaskByVolunteer = (authToken, volunteerId) => (dispatch) => {
    // TODO: use useContext to pull auth token off local storage
    dispatch({ type: GET_TASK_INIT })
    axios.get(
        `https://school-itc.herokuapp.com/api/tasks/byVolunteer/${volunteerId}`,
        craftHeader(authToken) 
    )
    .then(res => {
        dispatch({
            type: GET_TASK_SUCCESS,
            payload: res
        })
    })
    .catch(err => {
        dispatch({
            type: GET_TASK_FAILURE,
            payload: err
        })
    })
}

export const GET_ALL_TASKS_INIT = "GET_ALL_TASKS_INIT"
export const GET_ALL_TASKS_SUCCESS = "GET_ALL_TASKS_SUCCESS"
export const GET_ALL_TASKS_FAILURE = "GET_ALL_TASKS_FAILURE"

export const getAllTasks = () => (dispatch) => 
    ({ type: GET_ALL_TASKS_INIT })




//  ---- UPDATE ---- 

export const EDIT_TASK_INIT = "EDIT_TASK_INIT"
export const EDIT_TASK_SUCCESS = "EDIT_TASK_SUCCESS"
export const EDIT_TASK_FAILURE = "EDIT_TASK_FAILURE"

export const editTask = (task) => (dispatch) =>
    ({
        type: EDIT_TASK_INIT,
        payload: task
    })


export const MARK_COMPLETE_INIT = "MARK_COMPLETE"
export const MARK_COMPLETE_SUCCESS = "MARK_COMPLETE"
export const MARK_COMPLETE_FAILURE = "MARK_COMPLETE"

export const markComplete = (task) => (dispatch) => 
    ({
        type: MARK_COMPLETE_INIT,
        payload: task
    })




//  ---- DELETE ----

export const DELETE_TASK_INIT = "DELETE_TASK_INIT"
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS"
export const DELETE_TASK_FAILURE = "DELETE_TASK_FAILURE"

export const deleteTask = (task) => (disptach) => 
    ({
        type: DELETE_TASK_INIT,
        payload: task
    })




// HELPERS
    
// abstract the common boilerplate of passing an authToken as a request header
function craftHeader(authToken, ...extraHeaders) {
    return Object.assign({}, { authorization: authToken }, ...extraHeaders)
}
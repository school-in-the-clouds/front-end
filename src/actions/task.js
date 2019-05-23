/**
 * Admins can perform CRUD operations on tasks.
 */


/* 
    Note: All action creators with 2+ params can be optionally curried, 
    meaning you can presupply them with an authToken once and then reuse that function 
    each time you need to trigger that specific action.
    Ex:
        let addTaskShortcut = addTask(usersToken)
        // returns a curried function (similar to Array.prototype.bind)

        addTaskShortcut(task1)
        addTaskShortcut(task2)
        addTaskShortcut(task3)
        ... 

    By utilizing this technique, all of our action creators essentially look like this:
        const addTask = authToken => newTask => dispatch

    However, the cool thing about Ramda's curry utility is that it's completely optional, 
    so you can still supply all your arguments up-front if you prefer -- like this:
        addTask(usersToken, task1)
*/

import axios from 'axios'
import { curry } from 'ramda'

// TODO: use useContext to pull auth token off local storage (instead of resorting to optional currying)



//  ---- CREATE ----

export const ADD_TASK_INIT = "ADD_TASK_INIT"
export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS"
export const ADD_TASK_FAILURE = "ADD_TASK_FAILURE"

export const addTask = curry((authToken, newTask) => (dispatch) => {
    dispatch({ type: ADD_TASK_INIT })
    
    axios.post(
        "https://school-itc.herokuapp.com/api/tasks", 
        newTask, 
        craftHeader(authToken)
    )
    .then(res => {
        dispatch({
            type: ADD_TASK_SUCCESS,
            payload: res
        })
    })
    .catch(err => {
        dispatch({
            type: ADD_TASK_FAILURE,
            payload: err
        })
    })
})
    




//  ---- READ ----

export const GET_TASK_INIT = "GET_TASK_INIT"
export const GET_TASK_SUCCESS = "GET_TASK_SUCCESS"
export const GET_TASK_FAILURE = "GET_TASK_FAILURE"

export const getTaskById = curry((authToken, taskId) => (dispatch) => {
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
})

export const getTaskByVolunteer = curry((authToken, volunteerId) => (dispatch) => {
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
})

export const GET_ALL_TASKS_INIT = "GET_ALL_TASKS_INIT"
export const GET_ALL_TASKS_SUCCESS = "GET_ALL_TASKS_SUCCESS"
export const GET_ALL_TASKS_FAILURE = "GET_ALL_TASKS_FAILURE"

export const getAllTasks = (authToken) => (dispatch) => {
    dispatch({ type: GET_ALL_TASKS_INIT })

    axios.get(
        "https://school-itc.herokuapp.com/api/tasks", 
        craftHeader(authToken)
    )
    .then(res => {
        dispatch({
            type: GET_ALL_TASKS_SUCCESS,
            payload: res
        })
    })
    .catch(err => {
        dispatch({
            type: GET_ALL_TASKS_FAILURE,
            payload: err
        })
    })
}




//  ---- UPDATE ---- 

export const EDIT_TASK_INIT = "EDIT_TASK_INIT"
export const EDIT_TASK_SUCCESS = "EDIT_TASK_SUCCESS"
export const EDIT_TASK_FAILURE = "EDIT_TASK_FAILURE"

export const editTask = curry((authToken, task) => (dispatch) => {
    dispatch ({ type: EDIT_TASK_INIT })

    axios.put(
        `https://school-itc.herokuapp.com/api/tasks/${task.id}`,
        task,
        craftHeader(authToken)
    )
    .then(res => {
        dispatch({
            type: EDIT_TASK_SUCCESS,
            payload: res
        })
    })
    .catch(err => {
        dispatch ({ 
            type: EDIT_TASK_FAILURE,
            payload: err
        })
    })
})


export const MARK_COMPLETE_INIT = "MARK_COMPLETE"
export const MARK_COMPLETE_SUCCESS = "MARK_COMPLETE"
export const MARK_COMPLETE_FAILURE = "MARK_COMPLETE"

export const markComplete = curry((authToken, task) => (dispatch) => {
    dispatch({ type: MARK_COMPLETE_INIT })

    axios.put(
        `https://school-itc.herokuapp.com/api/tasks/${task.id}`,
        [task].map(task => task.completed = true),
        craftHeader(authToken)
    ).then(res => {
        dispatch({
            type: MARK_COMPLETE_SUCCESS,
            payload: res
        })
    })
    .catch(err => {
        dispatch({
            type: MARK_COMPLETE_FAILURE,
            payload: err
        })
    })
})




//  ---- DELETE ----

export const DELETE_TASK_INIT = "DELETE_TASK_INIT"
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS"
export const DELETE_TASK_FAILURE = "DELETE_TASK_FAILURE"

export const deleteTask = curry((authToken, task) => (dispatch) => {
    dispatch({ type: DELETE_TASK_INIT })
    dispatch({ type: DELETE_TASK_FAILURE })
})




// HELPERS
    
// abstract the common boilerplate of passing an authToken as a request header
function craftHeader(authToken, ...extraHeaders) {
    const boilerplate = {
        "Content-Type": "application/json",
        authorization: authToken,
    }
    
    return Object.assign({}, boilerplate, ...extraHeaders)
}
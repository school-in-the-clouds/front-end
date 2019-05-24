import { combineReducers }  from 'redux'

import authReducer from './auth'
import studentRedcuer from './student'
import taskReducer from './task'
import userReducer from './task';


export default combineReducers({
    auth: authReducer,
    student: studentRedcuer,
    task: taskReducer,
    user: userReducer
})
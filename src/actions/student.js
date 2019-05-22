/** 
 * Students can view tasks, search volunteers, or schecule appointments.
 */


// TODO: fetch data w/ axios and use dispatch

// viewing of tasks is handled in "./task.js"

export const FETCH_VOLUNTEERS_INIT = "FETCH_VOLUNTEERS_INIT"
export const FETCH_VOLUNTEERS_SUCCESS = "FETCH_VOLUNTEERS_SUCCESS"
export const FETCH_VOLUNTEERS_FAILURE = "FETCH_VOLUNTEERS_FAILURE"

export const getListOfVolunteers = () => (dispatch) => 
    ({ 
        type: FETCH_VOLUNTEERS_INIT 
    })

// SEARCH (BY AVAILABLE TIMES OR COUNTRY)

export const SEARCH_INIT = "SEARCH_INIT"
export const SEARCH_SUCCESS = "SEARCH_SUCCESS"
export const SEARCH_FAILURE = "SEARCH_FAILURE"

export const searchBy = (filter, term) => 
    ({
        type: SEARCH_INIT,
        payload: [filter, term]
    })

// STRETCH: SCHEDULE TIME TO WORK WITH VOLUNTEER
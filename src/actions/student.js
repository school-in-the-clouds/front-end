/** 
 * Students can view tasks, search tasks by volunteer, or schedule appointments.
 */

// viewing of tasks is handled in "./task.js"
// searching of tasks is also handled in "./task.js"

// SEARCH (BY AVAILABLE TIMES OR COUNTRY)

export const SEARCH_INIT = "SEARCH_INIT"
export const SEARCH_SUCCESS = "SEARCH_SUCCESS"
export const SEARCH_FAILURE = "SEARCH_FAILURE"

export const searchByCountry = (authToken, country) => (dispatch) => {
    dispatch({ type: SEARCH_INIT })
    // this endpoint isn't set up yet, so let's intentionally deny this request
    setTimeout(() => {
        dispatch({ type: SEARCH_FAILURE })
    }, 500)
    
}

// STRETCH: SCHEDULE TIME TO WORK WITH VOLUNTEER
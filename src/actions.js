import { 
	CHANGE_SEARCH_FIELD, 
	REQUEST_ROBOTS_PENDING, 
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants.js';


export const setSearchField = (text) => ({ //returns object
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const requestRobots = () => (dispatch) => { //not returning object
	dispatch({ type: REQUEST_ROBOTS_PENDING })
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(resp => resp.json())
		.then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
		.catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}
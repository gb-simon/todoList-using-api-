import axios from 'axios'; 
import { fetchTodosBegin, fetchTodosSuccess, fetchTodosFailure } from './fetchActions';

export function fetchTodos() {

	return dispatch => {
		// dispatch BEGIN action
		dispatch(fetchTodosBegin())
		//fetch the data
		return axios.get(`https://jsonplaceholder.typicode.com/todos?_page=1&_limit=8`) 	//only get 8 results for now
			.then(result => {
				// after fetching, dispatch SUCCESS action, do some stuff w/ the data
				dispatch(fetchTodosSuccess(result.data))
			})

			// handle error
			.catch(error => {
				dispatch(fetchTodosFailure(error));
				console.log(error);
			})
	}
}
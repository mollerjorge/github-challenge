import {FETCH_PROJECTS, FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_FAIL} from './types';


const initialState = {
	projects: [],
	_loading: true,
	error: ''
}

export default (state = initialState, action) => {
	switch(action.type) {
		case FETCH_PROJECTS: 
			return {
				...state,
				_loading: true,
			};
		case FETCH_PROJECTS_SUCCESS: 
			return {
				...state,
				projects: [
					...state.projects,
					...action.payload
				]
			};
		case FETCH_PROJECTS_FAIL:
			return {
				...state,
				error: action.payload,
			};
		default:
		 return state;
		 break;
	}

}
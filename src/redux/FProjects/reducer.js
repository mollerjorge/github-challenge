import {FETCH_PROJECTS, FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_FAIL, SET_PROJECT, GET_CONTRIBUTORS, GET_CONTRIBUTORS_SUCCESS, GET_CONTRIBUTORS_FAIL, SET_SEARCH_VALUE} from './types';


const initialState = {
	projects: [],
	currentProject: null,
	contributors: null,
	_loading: true,
	searchValue: '',
	error: ''
}

export default (state = initialState, action) => {

	switch(action.type) {
		case SET_PROJECT:
		return {
			...state,
			currentProject: action.payload
		}
		case GET_CONTRIBUTORS: {
			return  {
				...state,
				_loading: true,
			}
		}
		case FETCH_PROJECTS: 
			return {
				...state,
				_loading: true,
			};
		case FETCH_PROJECTS_SUCCESS: 
			return {
				...state,
				_loading: false,
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
		case GET_CONTRIBUTORS_SUCCESS: 
			return {
				...state,
				_loading: false,
				contributors: [
					...action.payload
				]
			};
		case GET_CONTRIBUTORS_FAIL:
			return {
				...state,
				error: action.payload,
			};
		case SET_SEARCH_VALUE:
			return {
				...state,
				searchValue: action.searchValue
			};
		default:
		 return state;
		 break;
	}

}
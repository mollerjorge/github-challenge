import {
	FETCH_PROJECTS,
	FETCH_PROJECTS_SUCCESS,
	FETCH_PROJECTS_FAIL,
	SET_PROJECT,
	GET_CONTRIBUTORS,
	GET_CONTRIBUTORS_SUCCESS,
	GET_CONTRIBUTORS_FAIL,
	SET_SEARCH_VALUE
} from "../types";
import FProjectReducer from "../reducer";

describe("FProject reducer", () => {
	const initialState = {
		projects: [],
		currentProject: null,
		contributors: null,
		_loading: true,
		searchValue: "",
		error: ""
	};

	it("sets currentProject correctly", () => {
		const action = {
			type: SET_PROJECT,
			payload: { name: "mock project" }
		};
		const response = {
			...initialState,
			currentProject: action.payload
		};
		expect(FProjectReducer(initialState, action)).toEqual(response);
	});

	it("sets loading to true when fetching contributors ", () => {
		const action = {
			type: GET_CONTRIBUTORS
		};
		const response = {
			...initialState,
			_loading: true
		};
		expect(FProjectReducer(initialState, action)).toEqual(response);
	});

	it("sets loading to true when fetching projects", () => {
		const action = {
			type: FETCH_PROJECTS
		};
		const response = {
			...initialState,
			_loading: true
		};
		expect(FProjectReducer(initialState, action)).toEqual(response);
	});

	it("sets projects successfully", () => {
		const action = {
			type: FETCH_PROJECTS_SUCCESS,
			payload: [{ name: "p1" }, { name: "p2" }]
		};
		const response = {
			...initialState,
			_loading: false,
			projects: [...initialState.projects, ...action.payload]
		};
		expect(FProjectReducer(initialState, action)).toEqual(response);
	});

	it("sets the error message if error occured fetching projects", () => {
		const action = {
			type: FETCH_PROJECTS_FAIL,
			payload: "This is a mock error message"
		};
		const response = {
			...initialState,
			error: action.payload
		};
		expect(FProjectReducer(initialState, action)).toEqual(response);
	});

	it("sets contributors successfully", () => {
		const action = {
			type: GET_CONTRIBUTORS_SUCCESS,
			payload: [{ contributor: "c1", contributor: "c2" }]
		};
		const response = {
			...initialState,
			_loading: false,
			contributors: [...action.payload]
		};
		expect(FProjectReducer(initialState, action)).toEqual(response);
	});

	it("sets the error message if error occured fetching contributors", () => {
		const action = {
			type: GET_CONTRIBUTORS_FAIL,
			payload: "This is a mock error message"
		};
		const response = {
			...initialState,
			error: action.payload
		};
		expect(FProjectReducer(initialState, action)).toEqual(response);
	});

	it("sets search value to state properly", () => {
		const action = {
			type: SET_SEARCH_VALUE,
			searchValue: "flow"
		};
		const response = {
			...initialState,
			searchValue: action.searchValue
		};
		expect(FProjectReducer(initialState, action)).toEqual(response);
	});
});

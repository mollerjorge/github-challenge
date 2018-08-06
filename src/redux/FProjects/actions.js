import {
	FETCH_PROJECTS,
	SET_PROJECT,
	GET_CONTRIBUTORS,
	SET_SEARCH_VALUE
} from "./types";

export const getProjects = () => {
	return {
		type: FETCH_PROJECTS
	};
};

export const setProject = project => {
	return {
		type: SET_PROJECT,
		payload: project
	};
};

export const getContributors = projectName => {
	return {
		type: GET_CONTRIBUTORS,
		projectName
	};
};

export const setSearchValue = searchValue => {
	return {
		type: SET_SEARCH_VALUE,
		searchValue
	};
};

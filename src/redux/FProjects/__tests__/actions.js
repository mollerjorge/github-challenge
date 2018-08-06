import {
	FETCH_PROJECTS,
	SET_PROJECT,
	GET_CONTRIBUTORS,
	SET_SEARCH_VALUE
} from "../types";
import {
	getProjects,
	setProject,
	getContributors,
	setSearchValue
} from "../actions";

describe("actions", () => {
	describe("get projects", () => {
		const response = {
			type: FETCH_PROJECTS
		};

		it("returns the appropriate action type", () => {
			expect(getProjects()).toEqual(response);
		});
	});

	describe("set projects", () => {
		const mockProject = {
			name: 'mockProject'
		}
		const response = {
			type: SET_PROJECT,
			payload: mockProject
		};
		

		it("returns the appropriate action type with project attached to it", () => {
			expect(setProject(mockProject)).toEqual(response);
		});
	});


	describe("get contributors", () => {
		const response = {
			type: GET_CONTRIBUTORS,
			projectName: 'flow'
		};

		it("returns the appropriate action type", () => {
			expect(getContributors('flow')).toEqual(response);
		});
	});

	describe("set search value", () => {
		const response = {
			type: SET_SEARCH_VALUE,
			searchValue: 'flow'
		};

		it("returns the appropriate action type with search value attached to it", () => {
			expect(setSearchValue('flow')).toEqual(response);
		});
	});
});

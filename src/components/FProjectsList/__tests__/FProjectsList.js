import React from "react";
import { shallow } from "enzyme";
import FProjectsList from "../FProjectsList";

describe("FProjectsList", () => {
	const mockProjectsList = [
		{
			name: "create-react-app",
			id: 1,
			watchers_count: 1000
		},
		{
			name: "flow",
			id: 2,
			watchers_count: 500
		}
	];
	const mockFn = jest.fn();
	const fProjectList = shallow(<FProjectsList projects={mockProjectsList} onClickProjectHandler={mockFn} searchValue=""/>);
	
	it('renders correctly', () => {
		expect(fProjectList).toMatchSnapshot();
	});

	it('renders two `FProjectsListItem` items', () => {
		expect(fProjectList.find('FProjectsListItem').length).toEqual(2);
	});

	describe('user filters down `flow` project', () => {
		const filterProjects = shallow(<FProjectsList projects={mockProjectsList} onClickProjectHandler={mockFn} searchValue="flow"/>)

		it('renders only flow project when searchValue equals flow', () => {
			expect(filterProjects.find('FProjectsListItem').dive().find('h4').text()).toEqual('flow');
		});

		it('renders only one project', () => {
			expect(filterProjects.find('FProjectsListItem').length).toEqual(1);	
		});
	});

	
});

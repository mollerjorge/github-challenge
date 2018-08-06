import { shallow } from "enzyme";
import React from "react";
import FProject from "../FProject";

describe("FProject", () => {
	const contributorsMock = [
		{
			login: "george",
			avatar_url: "http://mockurl.com",
			contributions: 4
		},
		{
			login: "camille",
			avatar_url: "http://mockurl.com",
			contributions: 5
		}
	];
	const projectMock = {
			
				name: "this is a mock project",
				open_issues_count: 4,
				forks_count: 10,
				description: "this is a mock description"
			
		};
	const fproject = shallow(<FProject project={projectMock} contributors={contributorsMock} />);

	it("renders correctly", () => {
		expect(fproject).toMatchSnapshot();
	});

	it('displays ui elements correctly', () => {
		expect(fproject.find('FProejctHolder').find('h1').text()).toEqual('this is a mock project');
		expect(fproject.find('FProejctHolder').find('p').text()).toEqual('this is a mock description');
	});

	it('displays the ContributorsList Component', () => {
		expect(fproject.find('ContributorsList').length).toEqual(1);
	});
});

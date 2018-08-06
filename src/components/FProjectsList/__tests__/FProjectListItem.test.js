import {shallow} from 'enzyme';
import React from 'react';
import FProjectListItem from '../FProjectListItem';

describe('FProjectListItem', () => {
	const projectMock = {
		name: 'sample project',
		id: 1,
		watchers_count: 1000
	};
	const mockFn = jest.fn();
	const fprojectItem = shallow(<FProjectListItem project={projectMock} onClickProjectHandler={mockFn}/>);
	
	it('renders correctly', () => {
		expect(fprojectItem).toMatchSnapshot();
	});

	it('displays the name correctly', () => {
		expect(fprojectItem.find('h4').text()).toEqual('sample project');
	});

	it('displays the watchers_count correctly', () => {
		expect(fprojectItem.find('span').text()).toEqual('1000');
	});

	describe('user clicks on project', () => {

		beforeEach(() => {
			fprojectItem.find('FProjectsListItemHolder').simulate('click');
		});

		it('executes callback function once', () => {
			expect(mockFn).toHaveBeenCalledTimes(1);
		});

		it('executes calback function with proper args', () => {
			expect(mockFn).toHaveBeenCalledWith(1, 'sample project');
		});
		
	});


});
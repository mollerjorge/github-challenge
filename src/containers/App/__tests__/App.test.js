import React from 'react';
import { shallow } from 'enzyme';
import {App} from '../App';

describe('App', () => {
	const mockFn = jest.fn();
	const mocksetSearchValue = jest.fn();
	const app = shallow(<App getProjects={mockFn} setSearchValue={mocksetSearchValue} searchValue=""/>);

	it('renders correctly', () => {
		expect(app).toMatchSnapshot();
	});

	describe('there are no projects selected', () => {

		it('it renders the `Please select a project from sidebar`', () => {
			expect(app.find('.content-text').text()).toEqual('Please select a project from the sidebar');
		});
	});

	describe('user enter text in search input', () => {

		beforeEach(() => {
			app.find('Input').dive().find('input').simulate('change', {target: {value: 'flow'} });
		});

		it('executes `setSearchValue` callback', () => {
			expect(mocksetSearchValue).toHaveBeenCalledTimes(1);
			expect(mocksetSearchValue).toHaveBeenCalledWith('flow');
		});
	})


});
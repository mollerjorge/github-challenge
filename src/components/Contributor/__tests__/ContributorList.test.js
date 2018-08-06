import { shallow } from 'enzyme';
import React from 'react';
import ContributorsList from '../ContributorsList';

describe('ContributorsList', () => {
	const contributorsMock = [
		{
			login: 'george',
			avatar_url: 'http://mockurl.com',
			contributions: 3
		},
		{
			login: 'camille',
			avatar_url: 'http://mockurl.com',
			contributions: 5
		}
	]
	const contList = shallow(<ContributorsList contributors={contributorsMock}/>);

	it('renders correctly', () => {
		expect(contList).toMatchSnapshot();
	});

	it('displays the correct amount of Contributors', () => {
		expect(contList.find('List').dive().dive().find('Contributor').length).toEqual(2);
	});
	
});
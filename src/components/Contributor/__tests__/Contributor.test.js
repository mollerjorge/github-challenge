import {shallow} from 'enzyme';
import React from 'react';
import Contributor from '../Contributor';

describe('Contributor', () => {
	const mockChildren = {
		login: "george",
		avatar_url: 'http://mockavatarurl.com',
		contributions: 4
	}

	const contributor = shallow(<Contributor children={mockChildren} />);


	it('renders correctly', () => {
		expect(contributor).toMatchSnapshot();
	});

	it('displays the avatar_url correctly', () => {
		expect(contributor.find('img').prop('src')).toEqual('http://mockavatarurl.com')
	});
	it('displays the login name correctly', () => {
		expect(contributor.find('h3').text().trim()).toEqual('george')
	});
	it('displays the contributions correctly', () => {
		expect(contributor.find('span').text()).toEqual('Contributions: 4')
	});
});
import React from 'react';
import SidebarHolder from './Sidebar.style.js';

const Sidebar = ({children, onChangeSearchInput}) => {
	return (
		<SidebarHolder>
			<input type="text" onChange={onChangeSearchInput}/>

			{children}
		</SidebarHolder>

	)
}

export default Sidebar;
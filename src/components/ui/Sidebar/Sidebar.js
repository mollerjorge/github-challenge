import React from 'react';
import SidebarHolder from './Sidebar.style.js';

const Sidebar = (props) => {
	return (
		<SidebarHolder>
			{props.children}
		</SidebarHolder>

	)
}

export default Sidebar;
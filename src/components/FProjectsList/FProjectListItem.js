import React from 'react';
import FProjectsListItemHolder from './FProjectListItem.style.js';

const FProjectsListItem = ({project}) => {
	return (
		<FProjectsListItemHolder>
			<h4>{project.name}</h4> {project.watchers_count}
		</FProjectsListItemHolder>
	)
}

export default FProjectsListItem;
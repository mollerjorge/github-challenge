import React from 'react';
import FProjectsListItemHolder from './FProjectListItem.style.js';

const FProjectsListItem = ({project, onClickProjectHandler}) => {
	return (
		<FProjectsListItemHolder onClick={onClickProjectHandler.bind(this, project.id, project.name)}>
			<h4>{project.name}</h4> {project.watchers_count}
		</FProjectsListItemHolder>
	)
}

export default FProjectsListItem;
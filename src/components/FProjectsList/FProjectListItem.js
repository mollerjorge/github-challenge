import React from 'react';
import FProjectsListItemHolder from './FProjectListItem.style.js';
import { Icon } from 'antd';

const FProjectsListItem = ({project, onClickProjectHandler}) => {
	return (
		<FProjectsListItemHolder onClick={onClickProjectHandler.bind(this, project.id, project.name)}>
			<h4>{project.name}</h4> <div><Icon type="eye"/> {project.watchers_count}</div>
		</FProjectsListItemHolder>
	)
}

export default FProjectsListItem;
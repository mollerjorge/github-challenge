import React from "react";
import FProjectHolder from "./FProject.style.js";
import ContributorsList from "../Contributor/ContributorsList";
import { Icon } from "antd";

const FProject = ({ project, contributors }) => {
	return (
		<FProjectHolder>
			<div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
				<h1>{project.name}</h1>
				<h2>{contributors.length}</h2>
				<div>
					<span><Icon type="warning"/>&nbsp;{project.open_issues_count}</span>
					&nbsp;&nbsp;
					<span><Icon type="fork"/>&nbsp;{project.forks_count}</span>
					
				</div>
			</div>
			<p>{project.description}</p>
			<hr></hr>
			<ContributorsList projectId={project.id} contributors={contributors} />
		</FProjectHolder>
	);
};

export default FProject;

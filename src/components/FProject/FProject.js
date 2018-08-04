import React from "react";
import FProjectHolder from "./FProject.style.js";
import Contributor from "../Contributor/Contributor";
import { Icon } from "antd";

const FProject = ({ project, contributors }) => {
	return (
		<FProjectHolder>
			<div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
				<h1>{project.name}</h1>

				<div>
					<span><Icon type="warning"/>&nbsp;{project.open_issues_count}</span>
					&nbsp;&nbsp;
					<span><Icon type="fork"/>&nbsp;{project.forks_count}</span>
					
				</div>
			</div>
			<p>{project.description}</p>
			<hr></hr>
			<ul className="contributors-list">
				{contributors.map(c => <Contributor key={c.id} contributor={c} />)}
			</ul>
		</FProjectHolder>
	);
};

export default FProject;

import React from "react";
import FProjectHolder from "./FProject.style.js";
import Contributor from '../Contributor/Contributor';

const FProject = ({project, contributors}) => {
	
		return (
			<FProjectHolder>
					<h1>{project.name}</h1>
					
					 <ul>
					 		{contributors.map(c => <Contributor key={c.id} contributor={c} />)}
					 </ul>
			</FProjectHolder>
		);
	
}

export default FProject;

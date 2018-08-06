import React from "react";
import PropTypes from "prop-types";
import FProjectHolder from "./FProject.style.js";
import ContributorsList from "../Contributor/ContributorsList";
import { Icon } from "antd";

const FProject = ({
	project: { name, open_issues_count, forks_count, description },
	contributors
}) => {
	return (
		<FProjectHolder>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center"
				}}
			>
				<h1>{name}</h1>
				<div>
					<span>
						<Icon type="warning" />&nbsp;{open_issues_count}
					</span>
					&nbsp;&nbsp;
					<span>
						<Icon type="fork" />&nbsp;{forks_count}
					</span>
				</div>
			</div>
			<p>{description}</p>
			<hr />
			<ContributorsList contributors={contributors} />
		</FProjectHolder>
	);
};

FProject.propTypes = {
	project: PropTypes.shape({
		name: PropTypes.string,
		open_issues_count: PropTypes.number,
		forks_count: PropTypes.number,
		description: PropTypes.string
	}),
	contributors: PropTypes.array.isRequired
};

export default FProject;

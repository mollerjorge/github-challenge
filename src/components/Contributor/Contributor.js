import React from "react";
import Proptypes from "prop-types";
import ContributorHolder from "./Contributor.style.js";

const Contributor = ({ children: { login, avatar_url, contributions } }) => {
	return (
		<ContributorHolder>
			<img width="50px" src={avatar_url} alt="user avatar" />
			<div style={{ marginLeft: "2rem" }}>
				<h3> {login}</h3>
				<span>Contributions: {contributions}</span>
			</div>
		</ContributorHolder>
	);
};

Contributor.propTypes = {
	children: Proptypes.shape({
		login: Proptypes.string,
		avatar_url: Proptypes.string,
		contributions: Proptypes.number
	})
};

export default Contributor;

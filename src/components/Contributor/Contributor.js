import React from "react";

const Contributor = ({ contributor: { login, avatar_url, contributions } }) => {
	return (
		<div>
			<img width="80px" src={avatar_url} alt="user avatar" />
			<div style={{display: 'inline-block'}}>
				<h3> {login}</h3>
				<span>Contributions: {contributions}</span>
			</div>
		</div>
	);
};

export default Contributor;

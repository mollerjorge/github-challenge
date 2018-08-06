import React from "react";
import PropTypes from "prop-types";
import FProjectsListItemHolder from "./FProjectListItem.style.js";
import { Icon } from "antd";

const FProjectsListItem = ({
	project: { name, id, watchers_count },
	onClickProjectHandler
}) => {
	return (
		<FProjectsListItemHolder
			onClick={onClickProjectHandler.bind(this, id, name)}
		>
			<h4>{name}</h4>{" "}
			<div>
				<Icon type="eye" /> <span>{watchers_count}</span>
			</div>
		</FProjectsListItemHolder>
	);
};

FProjectsListItem.propTypes = {
	project: PropTypes.shape({
		name: PropTypes.string,
		id: PropTypes.number,
		watchers_count: PropTypes.number
	}),
	onClickProjectHandler: PropTypes.func.isRequired
};

export default FProjectsListItem;

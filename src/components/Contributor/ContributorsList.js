import React from "react";
import PropTypes from 'prop-types';
import Contributor from "./Contributor";
import { List } from "react-virtualized";
import "react-virtualized/styles.css";

class ContributorsList extends React.Component {
	constructor(props) {
		super(props);
		this.contributorsList = React.createRef();
	}
	rowRenderer = ({ key, index, isScrolling, isVisible, style }) => {
		const content = (
			<Contributor key={this.props.contributors[index].id}>
				{this.props.contributors[index]}
			</Contributor>
		);
		return (
			<div key={key} style={style}>
				{content}
			</div>
		);
	};

	componentDidUpdate() {
		if (typeof this.contributorsList !== "undefined") {
			this.contributorsList.current.forceUpdateGrid();
		}
	}

	render() {
		return (
			<React.Fragment>
				<List
					width={300}
					height={500}
					rowCount={this.props.contributors.length}
					rowHeight={100}
					rowRenderer={this.rowRenderer}
					ref={this.contributorsList}
				/>
			</React.Fragment>
		);
	}
}

ContributorsList.propTypes = {
	contributors: PropTypes.array.isRequired
}

export default ContributorsList;

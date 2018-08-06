import React from "react";
import Contributor from "./Contributor";
import { List } from "react-virtualized";
import 'react-virtualized/styles.css'

class ContributorsList extends React.Component {
	constructor(props) {
		super(props);
		this.contributorsList = React.createRef();
	}
	rowRenderer = ({
		key, // Unique key within array of rows
		index, // Index of row within collection
		isScrolling, // The List is currently being scrolled
		isVisible, // This row is visible within the List (eg it is not an overscanned row)
		style // Style object to be applied to row (to position it)
		
	}) => {

		const content = <Contributor key={this.props.contributors[index].id}>
				{this.props.contributors[index]}
			</Contributor>;
		return (
			<div key={key} style={style}>
				{content}
			</div>
			
		);
	
	};

	componentDidUpdate() {
		if (typeof this.contributorsList !== 'undefined') {
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
					projectId={this.props.projectId}
					ref={this.contributorsList}
				/>
				
			</React.Fragment>
		);
	}
}

export default ContributorsList;

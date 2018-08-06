import React, { Component } from "react";
import { connect } from "react-redux";

/* 
 Reusable component that fetches generic lists
 It makes use of the `render props` pattern
 The function that fetches the elements from the API is passed into the prop `getList`
 We only need to map the entity of our store we want to pass down to the render function via its props
 In this case the entity is projects
*/
class FetchList extends Component {
	componentDidMount() {
		this.props.getList();
	}

	render() {
		return <React.Fragment>{this.props.render(this.props)}</React.Fragment>;
	}
}

/*
	If another entity needs to be fetched, it should be added to the props via mapStateToProps function
	(convention over configuration)
*/
const mapStateToProps = state => {
	return {
		projects: state.ProjectReducer.projects
		/*Add as much entities as needed here*/
	};
};

export default connect(mapStateToProps, null)(FetchList);

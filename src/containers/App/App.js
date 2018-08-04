import React, { Component } from "react";
import Sidebar from "../../components/ui/Sidebar/Sidebar";
import FProject from "../../components/FProject/FProject";
import FProjectListItem from "../../components/FProjectsList/FProjectListItem";
import AppHolder from "./App.style.js";
import { connect } from "react-redux";
import { getProjects, setProject, getContributors, setSearchValue } from "../../redux/FProjects/actions";
import { Route } from "react-router-dom";
import { withRouter } from 'react-router'

class App extends Component {

  componentDidMount() {
    this.props.getProjects();
  }

  sortProjectsByWatchers = (p1, p2) => {
    return p1.watchers_count - p2.watchers_count;
  };

  onClickProjectHandler = (id, name, events) => {
    this.props.setProject(
      this.props.projects.filter(p => p.id === id)[0]
    );

    this.props.getContributors(name);
  }

  onChangeSearchInput = (events) => {
    const searchValue = events.target.value;
    this.props.setSearchValue(searchValue);
  }

  render() {
    const displayProjects = this.props.projects
      .sort(this.sortProjectsByWatchers)
      .map(p => {
        if( p.name.toLowerCase().includes(this.props.searchValue.toLowerCase())) {
          
            return <FProjectListItem onClickProjectHandler={this.onClickProjectHandler} key={p.id} project={p}/>
        }
      } );
    return (
      <AppHolder className="App">
        <Sidebar onChangeSearchInput={this.onChangeSearchInput}>{displayProjects}</Sidebar>

        
        {(this.props.currentProject && this.props.contributors) && <FProject contributors={this.props.contributors} project={this.props.currentProject}  />}
        
      </AppHolder>
    );
  }
}

const mapStateToProps = ({ProjectReducer: {projects, currentProject, contributors, searchValue}}) => {
  return {
    projects: projects,
    currentProject: currentProject,
    contributors: contributors,
    searchValue: searchValue
  };
};

export default connect(mapStateToProps, { getProjects, setProject, getContributors, setSearchValue })(withRouter(App));

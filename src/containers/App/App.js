import React, { Component } from "react";
import Sidebar from "../../components/ui/Sidebar/Sidebar";
import FProject from '../../components/FProject/FProject';
import FProjectListItem from '../../components/FProjectsList/FProjectListItem';
import AppHolder from './App.style.js';
import {connect} from 'react-redux';
import { getProjects } from '../../redux/FProjects/actions';

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.getProjects();
  }

  sortProjectsByWatchers = (p1, p2) => {
    return p1.watchers_count - p2.watchers_count;
  }

  render() {
    const displayProjects = this.props.projects.sort(this.sortProjectsByWatchers).map(p => <FProjectListItem key={p.id} project={p}/>)
    return (
      <AppHolder className="App">
        <Sidebar>
           {displayProjects} 
        </Sidebar>

        <FProject/>
      </AppHolder>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.ProjectReducer.projects
  }
}

export default connect(mapStateToProps, { getProjects })(App);

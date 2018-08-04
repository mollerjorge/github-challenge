import React, { Component } from "react";
import FProject from "../../components/FProject/FProject";
import FProjectListItem from "../../components/FProjectsList/FProjectListItem";
import AppHolder from "./App.style.js";
import { connect } from "react-redux";
import {
  getProjects,
  setProject,
  getContributors,
  setSearchValue
} from "../../redux/FProjects/actions";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import { Layout, Input, Icon } from "antd";
import "antd/dist/antd.css";
const { Sider, Content } = Layout;

class App extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  sortProjectsByWatchers = (p1, p2) => {
    return p2.watchers_count - p1.watchers_count;
  };

  onClickProjectHandler = (id, name, events) => {
    this.props.setProject(this.props.projects.filter(p => p.id === id)[0]);

    this.props.getContributors(name);
  };

  onChangeSearchInput = events => {
    const value = events.target.value;
    this.props.setSearchValue(value);
  };

  render() {
    const displayProjects = this.props.projects
      .sort(this.sortProjectsByWatchers)
      .map(p => {
        if (
          p.name.toLowerCase().includes(this.props.searchValue.toLowerCase())
        ) {
          return (
            <FProjectListItem
              onClickProjectHandler={this.onClickProjectHandler}
              key={p.id}
              project={p}
            />
          );
        }
      });
    return (
      <AppHolder>
        <Layout style={{ height: "100vh", overflow: 'scroll' }}>
          <Sider width="20rem" height="100vh" style={{overflow: 'scroll'}}>
            <Input
              placeholder="Search Projects"
              onChange={this.onChangeSearchInput}
              suffix={<Icon type="search" />}
              size="large"
              style={{ margin: "1rem", width: "18rem" }}
            />

            {displayProjects}
          </Sider>

          <Layout>
            <Content style={{padding: '5rem'}}>
              {this.props.currentProject &&
                this.props.contributors && (
                  <FProject
                    contributors={this.props.contributors}
                    project={this.props.currentProject}
                  />
                )}
            </Content>
          </Layout>
        </Layout>
      </AppHolder>
    );
  }
}

const mapStateToProps = ({
  ProjectReducer: { projects, currentProject, contributors, searchValue }
}) => {
  return {
    projects: projects,
    currentProject: currentProject,
    contributors: contributors,
    searchValue: searchValue
  };
};

export default connect(mapStateToProps, {
  getProjects,
  setProject,
  getContributors,
  setSearchValue
})(withRouter(App));

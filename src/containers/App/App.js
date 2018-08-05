import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import {
  getProjects,
  setProject,
  getContributors,
  setSearchValue
} from "../../redux/FProjects/actions";

// Components
import FProject from "../../components/FProject/FProject";
import FProjectsList from "../../components/FProjectsList/FProjectsList";
import FetchList from "../FetchList/FetchList";

// UI Components
import AppHolder from "./App.style.js";
import { Layout, Input, Icon } from "antd";
const { Sider, Content } = Layout;

class App extends Component {
  onClickProjectHandler = (id, name, events) => {
    this.props.setProject(this.props.projects.filter(p => p.id === id)[0]);
    this.props.getContributors(name);
  };

  onChangeSearchInput = ({ target: { value } }) => {
    this.props.setSearchValue(value);
  };

  render() {
    const {
      getProjects,
      searchValue,
      onClickProjectHandler,
      currentProject,
      contributors
    } = this.props;
    return (
      <AppHolder>
        <Layout style={{ height: "100vh", overflow: "scroll" }}>
          <Sider width="20rem" height="100vh" style={{ overflow: "scroll", background: '#262a34' }}>
            <Input
              placeholder="Search Projects"
              onChange={this.onChangeSearchInput}
              suffix={<Icon type="search" />}
              size="large"
              style={{ margin: "1rem", width: "18rem" }}
            />
            <FetchList
              getList={getProjects}
              render={props => {
                return <FProjectsList
                  searchValue={searchValue}
                  onClickProjectHandler={this.onClickProjectHandler}
                  projects={props.projects}
                />;
              }}
            />
          </Sider>

          <Layout>
            <Content style={{ padding: "5rem" }}>
              {currentProject &&
                contributors && (
                  <FProject
                    contributors={contributors}
                    project={currentProject}
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
})(App);

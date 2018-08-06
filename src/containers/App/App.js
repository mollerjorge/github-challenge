import React, { Component } from "react";
import { connect } from "react-redux";
import { Debounce } from "react-throttle";

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

    let content = "";
    if (currentProject && contributors) {
      content = (
        <FProject contributors={contributors} project={currentProject} />
      );
    } else {
      content = (
        <div
          style={{
            position: "absolute",
            transform: "translate(-50%,-50%)",
            top: "50%",
            left: "50%"
          }}
        >
          Please select a project from the sidebar
        </div>
      );
    }
    return (
      <AppHolder>
        <Layout style={{ height: "100vh", overflow: "scroll" }}>
          <Sider
            width="20rem"
            height="100vh"
            style={{ overflow: "scroll", background: "#262a34" }}
          >
            <Debounce time="500" handler="onChange">
              <Input
                placeholder="Search Projects"
                onChange={this.onChangeSearchInput}
                suffix={<Icon type="search" />}
                size="large"
                style={{ margin: "1rem", width: "18rem" }}
              />
            </Debounce>
            <FetchList
              getList={getProjects}
              render={props => {
                return (
                  <FProjectsList
                    searchValue={searchValue}
                    onClickProjectHandler={this.onClickProjectHandler}
                    projects={props.projects}
                  />
                );
              }}
            />
          </Sider>

          <Layout>
            <Content style={{ padding: "5rem", position: "relative" }}>{content}</Content>
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

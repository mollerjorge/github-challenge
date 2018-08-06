import React from "react";
import PropTypes from "prop-types";
import FProjectListItem from "./FProjectListItem";

const FProjectsList = ({ projects, onClickProjectHandler, searchValue }) => {
  const displayProjectsList = projects
    .sort((p1, p2) => p2.watchers_count - p1.watchers_count)
    .map(p => {
      if (p.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return (
          <FProjectListItem
            onClickProjectHandler={onClickProjectHandler}
            key={p.id}
            project={p}
          />
        );
      } else {
        return <React.Fragment key={p.id} />;
      }
    });
  return <React.Fragment>{displayProjectsList}</React.Fragment>;
};

FProjectsList.propTypes = {
  projects: PropTypes.array.isRequired,
  onClickProjectHandler: PropTypes.func.isRequired,
  searchValue: PropTypes.string
};

export default FProjectsList;

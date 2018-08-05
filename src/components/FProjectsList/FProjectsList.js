import React from 'react';
import FProjectListItem from "./FProjectListItem";

const FProjectsList = ({projects, onClickProjectHandler, searchValue}) => {
	return (
		<React.Fragment>
		{projects.sort((p1, p2) => p2.watchers_count - p1.watchers_count).map(p => {
			
                    if (p.name.toLowerCase().includes(searchValue.toLowerCase())) {
                      return (
                        <FProjectListItem
                          onClickProjectHandler={onClickProjectHandler}
                          key={p.id}
                          project={p}
                        />
                      );
                    }
                  })}
      </React.Fragment>
	)

}

export default FProjectsList;
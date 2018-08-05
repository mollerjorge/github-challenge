import React from 'react';
import Contributor from "./Contributor";

const ContributorsList = ({contributors}) => {
	return (

		<ul className="contributors-list">
				{contributors.map(c => <Contributor key={c.id} contributor={c} />)}
		</ul>
	)
}

export default ContributorsList;
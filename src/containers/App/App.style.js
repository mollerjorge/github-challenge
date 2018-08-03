import styled from 'styled-components';

const AppHolder = styled.div`

	*,
	body,
	*::after,
	*::before {
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	}

	min-height: 100vh;
	display: flex;
	justify-content: space-between;
	
`;

export default AppHolder;
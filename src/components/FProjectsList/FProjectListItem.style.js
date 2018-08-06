import styled from "styled-components";

const FProjectListItemHolder = styled.div`
	&& {
		background: #ffffff;
		cursor: pointer;
		border-radius: 0.1rem;
		display: flex;
		padding: 1rem;
		justify-content: space-between;
		margin: 0.5rem 1rem;
		transition: all 0.3s ease-in-out;

		&:hover {
			transform: scale(1.05);
		}
		h4 {
			word-wrap: break-word;
			max-width: 80%;
		}
	}
`;

FProjectListItemHolder.displayName = "FProjectsListItemHolder";

export default FProjectListItemHolder;

import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	align-items: center;
	background-color: white;
`;

export const ButtonGroup = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	> * {
		margin-block: 10px;
	}
`;

export const BaristaButton = styled.div`
	display: flex;
	flex-direction: column;
`;

import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
`;

export const Logo = styled.a`
	margin-block: 45px;
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
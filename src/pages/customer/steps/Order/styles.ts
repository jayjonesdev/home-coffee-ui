import theme from '../../../../theme';

export const fullPageStyle: React.CSSProperties = {
	display: 'flex',
	width: '100%',
	height: '100%',
};

export const selectDrinkStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	width: '50%',
	height: '100%',
	paddingBlockStart: 25,
};

export const customerDrinksStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	width: '50%',
	height: '100%',
};

export const drinkOptionStyle: React.CSSProperties = {
	paddingInlineStart: 50,
	display: 'flex',
	alignItems: 'baseline',
	marginBlockEnd: 10,
	width: '100%',
};

export const userDrinkStyle: React.CSSProperties = {
	padding: 25,
	marginBlockEnd: 20,
	display: 'flex',
	alignContent: 'baseline',
	justifyContent: 'space-between',
	backgroundColor: theme.palette.primary.main,
	color: 'white',
};

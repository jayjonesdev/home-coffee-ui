import { createTheme } from '@mui/material';
import { green } from '@mui/material/colors';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#9f9375',
		},
		secondary: {
			main: green[500],
		},
	},
});

export default theme;

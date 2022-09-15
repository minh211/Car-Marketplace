import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    primary: '#232323',
    secondary: '#ffffff',
    errorMain: {
        main: red.A400
    },
    buttonMain: '#EE1B24',
    typography: {
        fontFamily: ['Poppins']
    }
});

export default theme;

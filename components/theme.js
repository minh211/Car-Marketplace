import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#232323'
        },
        secondary: {
            main: '#ffffff'
        },
        error: {
            main: red.A400
        },
        button: {
            main: '#EE1B24'
        }
    },
    typography: {
        fontFamily: ['Poppins']
    }
});

export default theme;

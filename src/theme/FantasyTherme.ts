
import { createTheme, Link } from '@mui/material';

export const FantasyTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
            `,
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    ":hover": { backgroundColor: "transparent" },
                    textTransform: "none",
                    color: "white",
                    fontWeight: 400
                }
            },
        },
    },
    palette: {
        primary: {
            main: "#0A2647",
        },
        secondary: {
            main: "#144272"
        },
    },
    typography: {
        fontFamily: "Manrope"
    }
});
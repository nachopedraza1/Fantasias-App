
import { createTheme } from "@mui/material";

export const FantasyTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: ``,
        },
    },
    palette: {
        primary: {
            main: "#2192FF",
        },
        secondary: {
            main: "#393E46"
        },
    }
});
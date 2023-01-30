
import { createTheme, Link } from '@mui/material';

export const FantasyTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
            `,
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    color: "#d9d9e6",
                    "&.MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "#d9d9e6"
                        }, '&:hover fieldset': {
                            borderColor: '#d9d9e6',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: "#2192FF",
                        },
                    },
                },
                notchedOutline: {
                    borderColor: "#d9d9e6",
                },
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    color: "#d9d9e6",
                    "&.MuiFilledInput-root": {
                        "&.MuiFilledInput-underline::before": {
                            borderBottomColor: '#FFFFFF'
                        },
                    }
                },
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "#d9d9e6",
                }
            }
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
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontWeight: 400,
                    color: "#d9d9e6"
                }
            }
        }
    },
    palette: {
        primary: {
            main: "#F49867",
        },
        secondary: {
            main: "#144272"
        },
    },
    typography: {
        fontFamily: "Manrope"
    }
});
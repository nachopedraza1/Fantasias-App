
import { createTheme, Link, InputLabel } from '@mui/material';

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
                            borderColor: "#8953C3"
                        }, '&:hover fieldset': {
                            borderColor: '#8953C3',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: "#8953C3",
                        },
                    },
                },
                notchedOutline: {
                    borderColor: "#d9d9e6",
                    color: "white"
                },
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    color: "#d9d9e6",
                    "&.MuiFilledInput-root": {
                        "&.MuiFilledInput-underline::before": {
                            borderBottomColor: '#8953C3',
                        },
                    }
                },
            }
        },

        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    color: "#d9d9e6",
                    "&.Mui-focused": {
                        color: "#d9d9e6"
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
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
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    ":before": {
                        borderTop: "thin solid #8953C3"
                    },
                    ":after": {
                        borderTop: "thin solid #8953C3"
                    },
                }
            }
        },
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
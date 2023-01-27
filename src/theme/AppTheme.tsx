import { Props } from '../interfaces/interfaces';

import { CssBaseline, ThemeProvider } from "@mui/material"
import { FantasyTheme } from "./FantasyTherme"

export const AppTheme = ({ children }: Props) => {

    return (
        <ThemeProvider theme={FantasyTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
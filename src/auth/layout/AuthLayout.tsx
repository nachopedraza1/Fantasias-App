import "../../theme/scss/global.scss";

import { Grid, Typography } from '@mui/material';

export const AuthLayout = ({ children, title }: AuthLayout) => {
    return (
        <Grid container justifyContent="center" alignItems="center" className="bgAuth">
            <Grid
                container
                sx={{
                    backgroundColor: "white",
                    padding: 2,
                    margin: 2,
                    borderRadius: 1,
                    maxWidth: { xs: "450px", md: "530px" },
                }}>
                <Typography variant='h5'> {title} </Typography>
                {children}
            </Grid>
        </Grid >
    )
}

interface AuthLayout {
    children: JSX.Element | JSX.Element[];
    title: string;
}

import "../../theme/scss/global.scss";

import { Grid, Typography } from '@mui/material';

export const AuthLayout = ({ children, title }: AuthLayout) => {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            className="bgAuth"
        >
            <Grid
                container
                sx={{
                    backgroundColor: "white",
                    padding: 2,
                    margin: 2,
                    borderRadius: 1,
                    maxWidth: { xs: "450px" },
                }}>
                <Typography variant='h5'> {title} </Typography>
                {children}
            </Grid>
            <img src="../assets/wave-auth1.svg" className="wave-top" />
            <img src="../assets/wave-auth2.svg" className="wave-bottom" />
            <img src="../assets/circle-auth-sm.svg" className="circle-sm" />
            <img src="../assets/circle-auth-md.svg" className="circle-md" />
            <img src="../assets/circle-auth-xl.svg" className="circle-xl" />
        </Grid >
    )
}

interface AuthLayout {
    children: JSX.Element | JSX.Element[];
    title: string;
}
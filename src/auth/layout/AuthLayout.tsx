import "../../theme/scss/global.scss";

import { Container, Grid, Typography } from '@mui/material';

import { Children } from "../../interfaces/interfaces";

export const AuthLayout = ({ children }: Children) => {
    return (
        <Grid
            container
            alignItems="center"
            className="bgAuth textShadow"
        >
            <Container maxWidth="lg" >
                <Typography
                    variant="h4"
                    position="absolute"
                    className="bgGradientText"
                    fontWeight={800}
                    padding={3}
                    top={0}
                    left={0}
                >
                    Fantasias
                </Typography>

                <Grid container alignItems="center">
                    <Grid item xs={6} textAlign="center" paddingLeft={20}>
                        <img src="../assets/staartup.svg" />
                    </Grid>

                    <Grid item xs={6} padding={2}>
                        {children}
                    </Grid>

                </Grid>
            </Container>


            <img src="../assets/wave-auth1.svg" className="wave-top" />
            <img src="../assets/wave-auth2.svg" className="wave-bottom" />
            <img src="../assets/circle-auth-sm.svg" className="circle-sm" />
            <img src="../assets/circle-auth-md.svg" className="circle-md" />
            <img src="../assets/circle-auth-xl.svg" className="circle-xl" />
            <img src="../assets/FrameLayout.svg" className="frame-auth-rigth" />
        </Grid >
    )
}
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
                    display={{ xs: "none", md: "flex" }}
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
                    <Grid item xs={6} textAlign="center" display={{ xs: "none", md: "flex" }}>
                        <img src="/assets/images/mockup-auth-desk.png" width="100%" />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        {children}
                    </Grid>

                </Grid>
            </Container >
        </Grid >
    )
}
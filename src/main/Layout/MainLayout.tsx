import "../../theme/scss/global.scss"

import { Container, Grid } from '@mui/material';

import { Children } from '../../interfaces/interfaces';
import { NavBar } from "../../ui/NavBar";

export const MainLayout = ({ children }: Children) => {
    return (
        <Grid container className="bgMain" position="relative">
            <img src="assets/FrameLayout.svg" alt="" className="svg-home-left" />
            <img src="assets/FrameLayout.svg" alt="" className="svg-home-rigth" />
            <Container maxWidth="lg" >
                <NavBar />
                {children}
            </Container>
        </Grid >
    )
}

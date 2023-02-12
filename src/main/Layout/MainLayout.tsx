import "../../theme/scss/global.scss"

import { Container, Grid } from '@mui/material';

import { Children } from '../../interfaces/interfaces';

export const MainLayout = ({ children }: Children) => {
    return (
        <Grid container className="bgMain" position="relative">
            <Container maxWidth="lg" >
                {children}
            </Container>
        </Grid >
    )
}

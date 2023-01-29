import { Grid, Typography } from "@mui/material"

import { Header } from "../components/Header"
import { MainLayout } from "../Layout/MainLayout"


export const HomePage: React.FC = () => {
    return (
        <MainLayout>
            <Header />
            <Grid container>
                <Grid item xs={6}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        height="90vh"
                        gap={4}
                        >
                        <Typography variant="h4" className="bgGradientText" px={5} textAlign="center" fontWeight={800}>
                            ! Los mejores productos estan en Fantasias !
                        </Typography>
                        <img src="assets/home-interface.svg" alt="fantasias polirrubro" width="450px" />
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        height="90vh"
                    >
                        <Typography variant="h4" className="bgGradientText" px={5} textAlign="center" fontWeight={800}>
                            ! Los mejores productos estan en Fantasias !
                        </Typography>
                        <img src="assets/home-interface.svg" alt="fantasias polirrubro" width="450px" />
                    </Grid>
                </Grid>
            </Grid >
        </MainLayout >
    )
}

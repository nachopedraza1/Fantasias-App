import { Grid, Typography } from '@mui/material';

import { MainLayout } from "../Layout/MainLayout"
import { Review } from "../components"
import { SocialButtons } from '../components/SocialButtons';

export const HomePage: React.FC = () => {
    return (
        <MainLayout>
            <Grid container className="textShadow">
                <Grid item xs={6}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        height="calc(100vh - 120px)"
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
                        height="calc(100vh - 120px)"
                    >
                        <Typography variant="h6" mb={1}>
                            Ultimas reseñas de nuestros clientes.
                        </Typography>

                        <Review />

                        <Grid container justifyContent="center" alignItems="center" mt={3}>
                            <Typography variant="h4" mr={2} fontWeight={800} className="bgGradientText">12 Años en el Mercado</Typography>
                            <img src="assets/medal.png" alt="" width="45px" />
                        </Grid>
                    </Grid>
                </Grid>
                <SocialButtons />
            </Grid >
        </MainLayout >
    )
}

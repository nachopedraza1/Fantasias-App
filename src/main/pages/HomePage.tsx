import { useState } from 'react';

import { Button, Grid, Typography } from '@mui/material';

import { MainLayout } from "../Layout/MainLayout";
import { Review, SocialButtons, SendReviewModal } from "../components";

import { RocketLaunch } from '@mui/icons-material';

export const HomePage: React.FC = () => {

    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true)
    const handleClose = () => setOpenModal(false)

    return (
        <MainLayout>
            <Grid container className="textShadow">
                <Grid item xs={6}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        height="calc(100vh - 130px)"
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
                        height="calc(100vh - 130px)"
                    >
                        <Typography variant="h6" mb={1} mr={10}>
                            Ultimas reseñas de nuestros clientes.
                        </Typography>

                        <Review />

                        <Button
                            onClick={handleOpen}
                            disableTouchRipple
                            endIcon={<RocketLaunch />}
                            sx={{
                                color: "#FF8A71",
                                borderColor: "#FF8A71",
                                fontWeight: 800,
                                mt: 2
                            }}
                        >
                            Enviar reseña
                        </Button>

                        <SendReviewModal openModal={openModal} handleClose={handleClose} />

                        <Grid container justifyContent="center" alignItems="center" >
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
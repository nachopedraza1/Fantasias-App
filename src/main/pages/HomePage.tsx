import { MainLayout } from "../Layout/MainLayout";
import { Grid, Typography, Box } from '@mui/material';
import { SocialButtons, TimeOpen } from "../components";

export const HomePage: React.FC = () => {

    return (
        <MainLayout>
            <Grid container className="textShadow animate__animated animate__fadeIn" position="relative">
                <Grid
                    xs={6}
                    item
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="start"
                    height="100vh"
                >
                    <Typography mb={1} variant="h4" className="bgGradientText" textAlign="start" fontWeight={800} noWrap>
                        Los mejores productos estan aqui !
                    </Typography>

                    <Typography mb={1} fontSize={18}>
                        Contamos con gran variedad de productos, de excelente calidad <br /> y a un precio conveniente, Visítanos!
                    </Typography>

                    <Box display="flex">
                        <Typography variant="h5" mr={2} fontWeight={800} className="bgGradientText">12 Años en el Mercado</Typography>
                        <img src="assets/medal.png" alt="" width="30px" />
                    </Box>
                    <SocialButtons justify="start" />
                </Grid>

                <Grid
                    xs={6}
                    item
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    height="100vh"
                >
                    <img src="../assets/home-ilust.svg" alt="fantasias polirrubro" width="450px" />
                </Grid>

            </Grid>
        </MainLayout >
    )
}

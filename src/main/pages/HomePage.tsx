import { MainLayout } from "../Layout/MainLayout";
import { Grid, Typography, Box } from '@mui/material';
import { SocialButtons } from "../components";

export const HomePage: React.FC = () => {

    return (
        <MainLayout>
            <Grid container className="textShadow" position="relative">
                <Grid
                    xs={6}
                    item
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="start"
                    height="calc(100vh - 130px)"
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

                    <SocialButtons />

                </Grid>

                <Grid
                    xs={6}
                    item
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    height="calc(100vh - 130px)"
                >
                    <img src="assets/home-interface.svg" alt="fantasias polirrubro" width="450px" />
                </Grid>

            </Grid>
        </MainLayout >
    )
}

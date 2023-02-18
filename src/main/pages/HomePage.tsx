import { MainLayout } from "../Layout/MainLayout";
import { Grid, Typography, Box } from '@mui/material';
import { SocialButtons } from "../components";

export const HomePage: React.FC = () => {

    return (
        <MainLayout>
            <Grid
                container
                className="textShadow animate__animated animate__fadeIn"
                position="relative"
                height="100vh"
                alignContent="center"
                alignItems="center"
                textAlign={{ xs: "center", md: "start" }}>
                <Grid
                    item
                    xs={12} md={6}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems={{ xs: "center", md: "start" }}
                >

                    <Typography mb={1} variant="h4" className="bgGradientText" fontWeight={800} display={{ xs: "flex", sm: "none" }}>
                        Fantasias Polirrubro
                    </Typography>

                    <Typography mb={1} variant="h4" className="bgGradientText" fontWeight={800} display={{ xs: "none", sm: "flex" }} noWrap>
                        Los mejores productos estan aqui!
                    </Typography>

                    <Typography mb={1} fontSize={18} maxWidth="540px" >
                        Contamos con gran variedad de productos, de excelente calidad y a un precio conveniente, Visítanos!
                    </Typography>

                    <Box display="flex" width="100%" justifyContent={{ xs: "center", md: "start" }}>
                        <Typography variant="h5" mr={2} fontWeight={800} className="bgGradientText">12 Años en el Mercado</Typography>
                        <img src="assets/images/medal.png" alt="" width="30px" />
                    </Box>
                </Grid>

                <Grid
                    item
                    xs={12} md={6}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <img src="/assets/images/home-ilust.svg" alt="fantasias polirrubro" width="100%" style={{ maxWidth: "450px" }} />
                </Grid>
                <SocialButtons />
            </Grid>
        </MainLayout >
    )
}

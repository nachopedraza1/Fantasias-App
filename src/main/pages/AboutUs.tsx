import { Grid, Typography } from '@mui/material';
import { MainLayout } from "../Layout/MainLayout"

export const AboutUs: React.FC = () => {
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
                        Sobre nosotros
                    </Typography>

                    <Typography mb={1} fontSize={18}>
                        Fantasías nace en el año 2010, con la ayuda familiar pudimos emprender el sueño de independizarse y
                        llevar adelante nuestro propio negocio, fuimos creciendo poco a poco asumiendo el compromiso de cubrir
                        las necesidades de nuestros clientes, con novedades, surtido y atención, con este sistema de trabajo hemos
                        logrado ser reconocidos en la zona.
                    </Typography>

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
                    <img src="../assets/aboutus-ilust.svg" alt="fantasias polirrubro" width="450px" />
                </Grid>

            </Grid>
        </MainLayout >
    )
}

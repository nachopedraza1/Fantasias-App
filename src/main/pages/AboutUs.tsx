import { Grid, Link, Typography } from '@mui/material';
import { SocialButtons } from '../components';
import { MainLayout } from "../Layout/MainLayout"

export const AboutUs: React.FC = () => {
    return (
        <MainLayout>
            <Grid container alignContent="center" className="textShadow animate__animated animate__fadeIn" position="relative" height="100vh">

                <Grid container direction="column" alignItems="center" className="textShadow animate__animated animate__fadeInDown">
                    <Typography mb={1} variant="h4" className="bgGradientText" fontWeight={800} noWrap>
                        ¿Quienes somos?
                    </Typography>
                    <Typography mb={1} textAlign="center" >
                        Conozca nuestra historia. Puede visitar nuestras socursales <Link href=''> aqui </Link>
                    </Typography>
                </Grid>

                <Grid
                    item
                    xs={12} md={6}
                    mt={{ xs: 3, sm: 0 }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems={{ xs: "center", md: "start" }}
                    textAlign={{ xs: "center", md: "start" }}
                >
                    <Typography mb={1} variant="h4" className="bgGradientText" fontWeight={800} noWrap>
                        Fantasias Polirrubro
                    </Typography>

                    <Typography mb={1} fontSize={18} >
                        Fantasías nace en el año 2010, con la ayuda familiar pudimos emprender el sueño de independizarse y
                        llevar adelante nuestro propio negocio, fuimos creciendo poco a poco asumiendo el compromiso de cubrir
                        las necesidades de nuestros clientes, con novedades, surtido y atención, con este sistema de trabajo hemos
                        logrado ser reconocidos en la zona.
                    </Typography>
                </Grid>

                <Grid
                    item
                    xs={12} md={6}
                    display={{ xs: "none", sm: "flex" }}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <img src="/assets/images/aboutus-ilust.svg" alt="fantasias polirrubro" width="450px" />
                </Grid>
                <SocialButtons />
            </Grid>
        </MainLayout >
    )
}

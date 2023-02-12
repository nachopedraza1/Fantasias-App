import { MainLayout } from "../Layout/MainLayout"
import { Button, Grid, Typography, TextField, InputAdornment, Box } from '@mui/material';
import { Email, EmailOutlined, ForwardToInbox, LocationOn, MapOutlined, Person, PhoneOutlined, PlaceOutlined, Schedule, Send, SupportAgent } from "@mui/icons-material";
import { SocialButtons, TimeOpen } from "../components";
import { maxWidth } from "@mui/system";


const styleButton = {
    background: "linear-gradient(90deg, #8953C3 0%, #DF35C9 100%), linear-gradient(90deg, #8953C3 0%, #DF35C9 100%)",
    borderRadius: "5px",
    fontSize: "17px",
    fontWeight: 800
}

const styleBoxContact = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "50px 20px 20px 20px",
    borderRadius: "10px",
    background: "#0B1C31",
    border: "1px solid #AE67FA",
    height: "250px"
}

const styleIcon = {
    border: "1px solid #AE67FA",
    color: "#DF35C9",
    position: "absolute",
    background: "#0B1C31",
    borderRadius: "50%",
    fontSize: "120px",
    padding: "15px",
    top: -60,
    left: 0,
    right: 0,
    margin: "0 auto"
}

export const ContactUs: React.FC = () => {
    return (
        <MainLayout>
            <Grid container alignContent="center" className="textShadow animate__animated animate__fadeIn" height="100vh">

                <Grid container direction="column" mb={10}>
                    <Typography mb={1} variant="h4" className="bgGradientText" textAlign="center" fontWeight={800} noWrap>
                        ¿ En que podemos ayudarte ?
                    </Typography>
                    <Typography mb={1} textAlign="center" noWrap>
                        ¿Tienes alguna pregunta? Nos encantaría saber de usted.
                    </Typography>
                </Grid>

                <Grid container gap={2} wrap="nowrap" >

                    <Grid item xs={4} sx={styleBoxContact}>
                        <Box>
                            <EmailOutlined sx={styleIcon} />
                            <Typography variant="h6" mb={1} fontWeight={800}>
                                Email
                            </Typography>
                            <Typography mb={2}>
                                Envíanos un correo electrónico, nuestros agentes se comunicarán con usted en un lapso de 24 horas.
                            </Typography>
                        </Box>
                        <Button variant="contained" startIcon={<ForwardToInbox />} sx={styleButton}>
                            Enviar email
                        </Button>
                    </Grid>

                    <Grid item xs={4} sx={styleBoxContact}>
                        <Box>
                            <SupportAgent sx={styleIcon} />
                            <Typography variant="h6" mb={1} fontWeight={800}>
                                Telefono
                            </Typography>
                            <Typography mb={2}>
                                Llamenos al 0351-379-7074. <br />
                                Nuestro equipo de soporte esta disponible de
                                lunes a viernes de 9:00hs a 22:00hs.
                            </Typography>
                        </Box>
                        <Button variant="contained" startIcon={<PhoneOutlined />} sx={styleButton}>
                            Llamar
                        </Button>
                    </Grid>

                    <Grid item xs={4} sx={styleBoxContact}>
                        <Box>
                            <LocationOn sx={styleIcon} />
                            <Typography variant="h6" mb={1} fontWeight={800}>
                                Socursales
                            </Typography>
                            <Typography mb={2}>
                                Mariano Boedo 1846 | B 1º de Mayo <br />
                                Horario 09:00 a 13:30 hs y 17:00 a 21:30 hs.
                            </Typography>
                        </Box>
                        <Button variant="contained" startIcon={<MapOutlined />} sx={styleButton}>
                            Ver en mapas
                        </Button>
                    </Grid>

                </Grid>

            </Grid>
            <TimeOpen />
        </MainLayout >
    )
}


{/* <Grid item xs={6} display="flex" flexWrap="wrap">
<Grid item xs={5} display="flex" flexDirection="column" alignItems="start">
    <Typography mb={1} variant="h5" className="bgGradientText" textAlign="start" fontWeight={800} noWrap>
        Contacto
    </Typography>
    <Button variant="text" startIcon={<EmailOutlined />} disableTouchRipple>
        mariopedraza71@hotmail.com
    </Button>
    <Button variant="text" startIcon={<PhoneOutlined />} disableTouchRipple>
        0351-379-7074
    </Button>
</Grid>

<Grid item xs={7} display="flex" flexDirection="column" alignItems="start">
    <Typography mb={1} variant="h5" className="bgGradientText" textAlign="start" fontWeight={800} noWrap>
        Visitanos
    </Typography>
    <Button variant="text" startIcon={<Schedule />} disableTouchRipple>
        Horario 09:00 a 13:30 hs y 17:00 a 21:30 hs.
    </Button>
    <Button variant="text" startIcon={<PlaceOutlined />} disableTouchRipple>
        Mariano Boedo 1846 | B 1º de Mayo
    </Button>
</Grid>
</Grid> */}

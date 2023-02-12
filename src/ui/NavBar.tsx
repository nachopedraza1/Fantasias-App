import "../theme/scss/navbar.scss"

import { Link as RouterLink } from "react-router-dom";
import { Container, Grid, Link, List, ListItem, Typography, Button } from '@mui/material';

const navItems: NavItem[] = [
    { id: 1, text: "Inicio", path: "/" },
    { id: 2, text: "Productos", path: "/" },
    { id: 3, text: "Quienes Somos", path: "/aboutus" },
    { id: 4, text: "Contacto", path: "/contactus" },
]
export const NavBar: React.FC = () => {

    return (
        <Container maxWidth="lg" sx={{ position: "absolute", zIndex: 1, top: 0, left: 0, right: 0 }}>
            <Grid container justifyContent="space-between" alignItems="center" mt={2} className="animate__animated animate__fadeInDown">

                <Grid item >
                    <Typography variant="h4" className="bgGradientText" fontWeight={800} pb={1}>
                        Fantasias
                    </Typography>
                </Grid>

                <Grid item>
                    <List className="navlinks" disablePadding>
                        {navItems.map(({ id, text, path }) => (
                            <ListItem key={id}  >
                                <Link noWrap component={RouterLink} to={path}> {text} </Link>
                            </ListItem>
                        ))}
                    </List>
                </Grid>

                <Grid item>
                    <Button
                        sx={{ px: 3, ":hover": { backgroundColor: "transparent" } }}
                        disableRipple
                    >
                        <Link component={RouterLink} underline="none" color="white" to="/auth/login">
                            Ingresa
                        </Link>
                    </Button>
                    <Button
                        className="bgGradient"
                        sx={{ px: 3 }}
                    >
                        <Link component={RouterLink} to="/auth/register" underline="none" color="white">
                            Registro
                        </Link>
                    </Button>
                </Grid>
            </Grid >
        </Container >
    )
}

interface NavItem {
    id: number;
    text: string;
    path: string;
}

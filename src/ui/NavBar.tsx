import "../theme/scss/navbar.scss"

import { Link as RouterLink } from "react-router-dom";
import { Container, Grid, Link, List, ListItem, Typography, Button } from '@mui/material';

const navItems: NavItem[] = [
    { id: 1, text: "Inicio" },
    { id: 2, text: "Productos" },
    { id: 3, text: "Quienes Somos" },
    { id: 4, text: "Contacto" },
]
export const NavBar: React.FC = () => {

    return (
        <Container maxWidth="xl" disableGutters>
            <Grid container justifyContent="space-between" alignItems="center" mt={2}>

                <Grid item >
                    <Typography variant="h4" className="bgGradientText" fontWeight={800} pb={1}>
                        Fantasias
                    </Typography>
                </Grid>

                <Grid item>
                    <List className="navlinks" disablePadding>
                        {navItems.map(({ id, text }) => (
                            <ListItem key={id}  >
                                <Link noWrap > {text} </Link>
                            </ListItem>
                        ))}
                    </List>
                </Grid>

                <Grid item>
                    <Button
                        sx={{ px: 3 }}
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
                        Registro
                    </Button>
                </Grid>
            </Grid >
        </Container >
    )
}

interface NavItem {
    id: number;
    text: string;
}

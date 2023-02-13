import "../theme/scss/navbar.scss"

import { useState, MouseEventHandler } from 'react';
import { Link as RouterLink } from "react-router-dom";

import { ProductsMenu } from './ProductsMenu';
import { Container, Grid, Link, List, ListItem, Typography, Button, IconButton } from '@mui/material';
import { ExpandMore } from "@mui/icons-material";

const navItems: NavItem[] = [
    { id: 1, text: "Inicio", path: "/" },
    { id: 2, text: "Productos", path: "/" },
    { id: 3, text: "Quienes Somos", path: "/aboutus" },
    { id: 4, text: "Contacto", path: "/contactus" },
]

export const NavBar: React.FC = () => {

    const [menuProducts, setMenuProducts] = useState<boolean>(false);

    const displayMenuProducts: MouseEventHandler = () => {
        setMenuProducts(!menuProducts);
    }

    return (
        <>
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
                                < ListItem key={id} sx={(text === "Productos") ? { pr: 0 } : null}>
                                    {
                                        (text === "Productos")
                                            ?
                                            <>
                                                <Link
                                                    noWrap
                                                    component={RouterLink}
                                                    to={path}
                                                    onMouseEnter={displayMenuProducts}
                                                >
                                                    {text}
                                                </Link>
                                                <ExpandMore sx={{ color: "white" }} />
                                            </>
                                            :
                                            <Link
                                                noWrap
                                                component={RouterLink} to={path}
                                            >
                                                {text}
                                            </Link>
                                    }
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
            <ProductsMenu menuProducts={menuProducts} displayMenuProducts={displayMenuProducts} />
        </>
    )
}

interface NavItem {
    id: number;
    text: string;
    path: string;
}
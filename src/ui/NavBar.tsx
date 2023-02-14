import "../theme/scss/navbar.scss"

import { useState, MouseEventHandler } from 'react';
import { Link as RouterLink } from "react-router-dom";

import { Container, Grid, Link, List, ListItem, Typography, Button, AppBar, IconButton, Drawer, Toolbar, Divider, ListItemIcon, ListItemButton, ListItemText } from '@mui/material';
import { ContactPhone, ExpandMore, Home, Info, MenuOpenOutlined, MenuOutlined } from "@mui/icons-material";

import { ProductsMenu, MenuProductsMobile } from './components';

const navItems: NavItem[] = [
    { id: 1, text: "Inicio", path: "/" },
    { id: 2, text: "Productos", path: "/" },
    { id: 3, text: "Quienes Somos", path: "/aboutus" },
    { id: 4, text: "Contacto", path: "/contactus" },
]

export const NavBar: React.FC = () => {

    const [menuState, setMenuState] = useState(false);
    const [menuProducts, setMenuProducts] = useState<boolean>(false);

    const displayMenuProducts: MouseEventHandler = () => {
        setMenuProducts(!menuProducts);
    }

    const handleDrawerToggle = () => {
        setMenuState(!menuState);
    };

    return (
        <>
            <AppBar sx={{ zIndex: 1, backgroundColor: "transparent", mt: 2, boxShadow: "none" }}>
                <Container maxWidth="lg">
                    <Grid container justifyContent="space-between" alignItems="center" className="animate__animated animate__fadeInDown">

                        <IconButton sx={{ mr: 2, p: 0, display: { md: "none" } }} onClick={() => setMenuState(!menuState)}>
                            <MenuOutlined sx={{ fontSize: 30 }} color="primary" />
                        </IconButton>

                        <Grid item display={{ xs: "none", md: "flex" }} >
                            <Typography variant="h4" className="bgGradientText" fontWeight={800} pb={1}>
                                Fantasias
                            </Typography>
                        </Grid>

                        <Grid item display={{ xs: "none", md: "flex" }} >
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

                        <Grid item  >
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
                                sx={{ p: "5px 15px 5px 15px" }}
                            >
                                <Link component={RouterLink} to="/auth/register" underline="none" color="white">
                                    Registro
                                </Link>
                            </Button>
                        </Grid>
                    </Grid >
                </Container >
            </AppBar>

            <ProductsMenu menuProducts={menuProducts} displayMenuProducts={displayMenuProducts} />

            <Drawer
                variant="temporary"
                open={menuState}
                sx={{ "& .MuiDrawer-paper": { boxSizing: "border-box", width: "270px", background: "#0D1F33" } }}
                onClose={handleDrawerToggle}
            >
                <Toolbar sx={{ mt: 1, justifyContent: "space-between" }}>
                    <IconButton sx={{ mr: 3, p: 0 }} onClick={handleDrawerToggle}>
                        <MenuOpenOutlined sx={{ fontSize: 30 }} color="primary" />
                    </IconButton>

                    <Typography variant="h5" pl={1} className="bgGradientText" fontWeight={800} width="100%">
                        Fantasias
                    </Typography>
                </Toolbar>

                <Divider sx={{ backgroundColor: "white" }} />

                <List sx={{ p: 1 }}>
                    {
                        navItems.map(({ id, text, path }) => (
                            (text === "Productos")
                                ? <MenuProductsMobile key={id} />
                                : <ListItem component={RouterLink} to={path} key={id} disablePadding sx={{ color: "white" }}  >
                                    <ListItemButton onClick={handleDrawerToggle} disableRipple>
                                        <ListItemIcon sx={{ color: "primary.main" }}>
                                            {
                                                (text === "Inicio") ? <Home />
                                                    : (text === "Quienes Somos") ? <Info />
                                                        : (text === "Contacto") ? <ContactPhone /> : null
                                            }
                                        </ListItemIcon>
                                        <Grid container>
                                            <ListItemText primary={text} />
                                        </Grid>
                                    </ListItemButton>
                                </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </>
    )
}

interface NavItem {
    id: number;
    text: string;
    path: string;
}
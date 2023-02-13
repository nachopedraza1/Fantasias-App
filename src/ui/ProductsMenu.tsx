import { MouseEventHandler } from "react"
import { Grid, Typography, Container } from '@mui/material';

const menuProductsStyle = {
    background: "rgba(11, 28, 49, 90%)",
    position: "absolute",
    width: "100%",
    height: "250px",
    zIndex: 1,
    transition: "0.4s",
    alignItems: "center"
}

export const ProductsMenu: React.FC<{ menuProducts: boolean, displayMenuProducts: MouseEventHandler }> = ({ menuProducts, displayMenuProducts }) => {
    return (
        <Grid container className="productsMenu" sx={menuProductsStyle} style={menuProducts ? { top: "0%" } : { top: "-100%" }} onMouseLeave={displayMenuProducts}>
            <Container maxWidth="lg" disableGutters>
                <Grid container>
                    <Grid item xs={2}>
                        <Typography mb={3} variant="h5" className="bgGradientText" fontWeight={800} noWrap>
                            Jugueteria
                        </Typography>
                        <img src="../assets/jugueteria.png" alt="Jugueteria fantasias polirrubro" width="110px" />
                    </Grid>
                    <Grid item xs={2}>
                        <Typography mb={3} variant="h5" className="bgGradientText" fontWeight={800} noWrap>
                            Libreria
                        </Typography>
                        <img src="../assets/libreria.png" alt="Libreria fantasias polirrubro" width="110px" />
                    </Grid>
                    <Grid item xs={2}>
                        <Typography mb={3} variant="h5" className="bgGradientText" fontWeight={800} noWrap>
                            Regaleria
                        </Typography>
                        <img src="../assets/regaleria.png" alt="Regaleria fantasias polirrubro" width="110px" />
                    </Grid>
                    <Grid item xs={2}>
                        <Typography mb={3} variant="h5" className="bgGradientText" fontWeight={800} noWrap>
                            Bijouterie
                        </Typography>
                        <img src="../assets/bijouterie.png" alt="Bijouterie fantasias polirrubro" width="110px" />
                    </Grid>
                    <Grid item xs={2}>
                        <Typography mb={3} variant="h5" className="bgGradientText" fontWeight={800} noWrap>
                            Bazar
                        </Typography>
                        <img src="../assets/Bazar.png" alt="Bazar fantasias polirrubro" width="110px" />
                    </Grid>
                    <Grid item xs={2}>
                        <Typography mb={3} variant="h5" className="bgGradientText" fontWeight={800} noWrap>
                            Otros
                        </Typography>
                        <img src="../assets/otros.png" alt="Otros fantasias polirrubro" width="110px" />
                    </Grid>
                </Grid>
            </Container>
        </Grid >
    )
}

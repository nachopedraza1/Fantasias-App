import { Grid } from "@mui/material"

export const Header: React.FC = () => {
    return (
        <Grid
            container
            sx={{
                backgroundImage: "url(/assets/banner-desk.png)",
                backgroundSize:"cover",
                backgroundPosition:"center",
                height:"100vh",
            }}
        >

        </Grid>
    )
}

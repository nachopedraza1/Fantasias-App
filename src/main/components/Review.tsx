import { Box, Grid, Rating, Typography } from "@mui/material"

export const Review: React.FC = () => {
    return (
        <Grid container direction="column" justifyContent="center" className="bgGradientReview" width="430px" height="250px" p={3}>
            <Grid container gap={2} alignItems="center" position="relative">
                <Grid item xs={2}>
                    <img src="assets/ejemploimg.webp" alt="" style={{ borderRadius: "50%", width: "60px" }} />
                </Grid>
                <Grid item xs={4}>
                    <Typography fontWeight={800}>Juan Pedraza</Typography>
                    <Rating value={5} readOnly />
                </Grid>
                <img src="assets/like.svg" alt="" width="100px" style={{ position: "absolute", right: 0, bottom: 5 }} />
            </Grid>
            <Grid container direction="column">
                <Box height={95}>
                    <Typography fontWeight={800}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever...
                    </Typography>
                </Box>
                <Typography fontWeight={800} textAlign="end">Hace 1 Hora</Typography>
            </Grid>
        </Grid>
    )
}

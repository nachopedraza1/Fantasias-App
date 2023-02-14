import { useState } from 'react';
import { Box, Grid, Rating, Typography, Button } from '@mui/material';
import { RocketLaunch } from '@mui/icons-material';
import { SendReviewModal } from './SendReviewModal';

export const Review: React.FC = () => {

    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true)
    const handleClose = () => setOpenModal(false)

    return (
        <>
            <Button
                onClick={handleOpen}
                disableTouchRipple
                endIcon={<RocketLaunch />}
                sx={{
                    color: "#FF8A71",
                    borderColor: "#FF8A71",
                    fontWeight: 800,
                    mb: 1,
                    p: 0
                }}
            >
                Dejanos tu reseña!
            </Button>

            <Grid
                container
                direction="column"
                justifyContent="start"
                className="bgGradientReview"
                width="360px"
                height="150px"
                p={2}
            >
                <Grid container gap={2} alignItems="center" position="relative" >
                    <Grid item xs={2}>
                        <img src="assets/ejemploimg.webp" alt="" style={{ borderRadius: "50%", width: "60px" }} />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography fontWeight={800}>Juan Pedraza</Typography>
                        <Rating value={5} readOnly />
                    </Grid>

                </Grid>
                <Grid container direction="column">
                    <Box >
                        <Typography fontWeight={800}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque illum quia incidunt.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            <SendReviewModal openModal={openModal} handleClose={handleClose} />
        </>
    )
}
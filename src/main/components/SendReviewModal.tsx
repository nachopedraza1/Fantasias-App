import { FormEvent, useState } from 'react';
import { setReview } from '../../redux/slices';

import { useForm, useCustomDispatch } from '../../hooks';

import { Box, Fade, Modal, Typography, Rating, TextField, InputAdornment, Button } from '@mui/material';
import { Create, RocketLaunch } from '@mui/icons-material';


import { ModalState } from '../../interfaces/interfaces';

const style = {
    p: 2,
    width: 500,
    border: "2px solid #F49867",
    boxShadow: 24,
    borderRadius: "5px",
    background: "radial-gradient(125.14% 247.47% at -10.83% -4.83%, #0A2647 46.59%, #7B2869 100%)",
};

export const SendReviewModal = ({ openModal, handleClose }: ModalState) => {

    const dispatch = useCustomDispatch();

    const { comment, onInputChange } = useForm<{ [key: string]: string }>({ comment: "" });

    const [stars, setStars] = useState<number | null>(3);

    const onSubmitReview = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setReview({ comment, stars }))
    }

    return (
        <Modal
            open={openModal}
            onClose={handleClose}
            closeAfterTransition
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Fade in={openModal} timeout={600}>
                <Box sx={style}>
                    <Box textAlign="center" className="textShadow">
                        <Typography variant="h6">
                            ¡QUEREMOS SABER
                        </Typography>
                        <Typography variant="h4" fontWeight={800} className="bgGradientText">
                            TU OPINIÓN!
                        </Typography>
                    </Box>
                    <Box textAlign="center" mt={2}>
                        <Rating
                            value={stars}
                            onChange={(event, newValue = 0) => {
                                setStars(newValue);
                            }}
                        />
                        <form onSubmit={onSubmitReview}>
                            <Typography fontWeight={600} mt={1}>
                                Danos tu opinión y dejanos un comentario!
                            </Typography>
                            <TextField
                                fullWidth
                                multiline
                                label="Tu comentario"
                                variant='filled'
                                maxRows={4}
                                onChange={onInputChange}
                                value={comment}
                                name="comment"
                                sx={{ mt: 2 }}
                                InputProps={{
                                    endAdornment:
                                        <InputAdornment position="end">
                                            <Create sx={{ color: "white", position: "absolute", top: 15, right: 12 }} />
                                        </InputAdornment>,
                                }}
                            />
                            <Box display="flex" justifyContent="end" mt={2}>
                                <Button
                                    type='submit'
                                    variant='contained'
                                    className='bgGradient'
                                    sx={{ px: 3 }}
                                    endIcon={<RocketLaunch />}
                                >
                                    ENVIAR
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    )
}


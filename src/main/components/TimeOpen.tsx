import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';


export const TimeOpen: React.FC = () => {

    const now = new Date().getHours();
    const day = new Date().getDay();

    const [isOpen, setIsOpen] = useState<boolean | null>(null);

    useEffect(() => {
        if (day != 0) {
            if (now >= 9 && now < 13 || now >= 17 && now < 22) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        }
    }, [])

    const [timeClock, setTimeClock] = useState<string>();

    useEffect(() => {
        setInterval(() => {
            const time = new Date().toLocaleTimeString();
            setTimeClock(time)
        }, 1000)
    }, [])


    return (
        <Box
            display={{ xs: "none", sm: "block" }}
            className="textShadow animate__animated animate__fadeInRight"
            textAlign="center"
            sx={{
                position: "absolute",
                bottom: 20,
                right: 20,
            }} >

            <Typography color="white">
                {timeClock}
            </Typography>

            <Typography
                color={isOpen ? "green" : "error"}
                fontWeight={800}
            >
                {isOpen ? "Abierto Ahora" : "Cerrado Ahora"}
            </Typography >

        </Box>

    )
}

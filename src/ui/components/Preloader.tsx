import { useEffect, useState } from "react";
import { CircularProgress, Grid } from "@mui/material";

export const Preloader: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true);
        }, 1500);
    }, [])

    const loadState = isLoading ? "loading-div active" : "loading-div show";

    return (
        <Grid
            className={`loading-div ${loadState}`}
            id="loading-div"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={3}>
                <CircularProgress />
            </Grid>
        </Grid>
    )
}

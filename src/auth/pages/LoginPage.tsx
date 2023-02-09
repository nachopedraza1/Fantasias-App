import { useState, FormEvent, useEffect } from 'react';
import { Link as RouterLink } from "react-router-dom"

import { startLogin } from '../../redux/thunks/auth';
import { clearErrorMessage } from '../../redux/slices';

import { useForm, useCustomDispatch, useCustomSelector } from '../../hooks';

import { AuthLayout } from '../layout/AuthLayout';
import { EmailRounded, Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, IconButton, InputAdornment, Link, TextField, Typography, Grid } from '@mui/material';

import { LoginData } from '../../interfaces/interfaces';

const styleButton = {
    background: "linear-gradient(90deg, #8953C3 0%, #DF35C9 100%)",
    borderRadius: "5px",
    padding: "5px",
    fontSize: "20px",
    fontWeight: 600
}

const loginForm: LoginData = {
    email: "",
    password: "",
}


export const LoginPage: React.FC = () => {

    const dispatch = useCustomDispatch();

    const { isLoading } = useCustomSelector(state => state.auth);
    const { email, password, onInputChange } = useForm<LoginData>(loginForm);

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const onLogin = async (event: FormEvent) => {
        event.preventDefault();
        dispatch(startLogin({ email, password }))
    }

    useEffect(() => { dispatch(clearErrorMessage()) }, [])

    return (
        <AuthLayout>
            <form onSubmit={onLogin} autoComplete="off">
                <Grid
                    container
                    position="relative"
                    direction="column"
                    gap={2}
                    borderRadius={1}
                    maxWidth={{ xs: "450px" }}
                    zIndex={1}
                    className="animate__animated animate__fadeIn"
                >
                    <Typography
                        position="absolute"
                        variant="h4"
                        className="bgGradientText animate__animated animate__fadeInDown"
                        fontWeight={800}
                        textAlign="center"
                        mb={4}
                        top={-55}
                        left={140}
                    >
                        ¡Bienvenido!
                    </Typography>

                    <Typography
                        maxWidth={100}
                        variant="h4"
                        className="bgGradientText"
                        fontWeight={800}
                    >
                        Login
                    </Typography>

                    <TextField
                        required={true}
                        fullWidth
                        variant="filled"
                        label="Email"
                        type="email"
                        name='email'
                        value={email}
                        onChange={onInputChange}
                        placeholder="Ingresa tu email."
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <EmailRounded sx={{ color: "white" }} />
                                </InputAdornment>
                        }}
                        sx={{

                        }}
                    />

                    <TextField
                        required={true}
                        variant="filled"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Ingresa tu contraseña."
                        label="Contraseña"
                        name='password'
                        value={password}
                        onChange={onInputChange}
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        sx={{ p: 0, color: "white" }}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>,
                        }}
                    />


                    <Typography textAlign="end">
                        No tienes cuenta?
                        <Link ml={1} component={RouterLink} to="/auth/register">Registrate</Link>
                    </Typography>

                    <Button type="submit" variant="contained" disabled={isLoading} sx={styleButton}>
                        Ingresar
                    </Button>
                </Grid>
            </form>

        </AuthLayout >
    )
}

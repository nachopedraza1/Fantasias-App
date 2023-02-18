import { useState, FormEvent, useEffect } from 'react';
import { Link as RouterLink } from "react-router-dom"

import { startLogin } from '../../redux/thunks/auth';
import { clearErrorMessage } from '../../redux/slices';

import { useForm, useCustomDispatch, useCustomSelector } from '../../hooks';

import { AuthLayout } from '../layout/AuthLayout';
import { EmailRounded, Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, IconButton, InputAdornment, Link, TextField, Typography, Grid, Divider } from '@mui/material';

import { LoginData } from '../../interfaces/interfaces';

const styleButton = {
    background: "linear-gradient(90deg, #8953C3 0%, #DF35C9 100%)",
    borderRadius: "5px",
    padding: "5px",
    fontSize: "20px",
    fontWeight: 600
}

const styleButton2 = {
    borderRadius: "5px",
    backgroundColor: "rgb(41 37 75 / 80%)",
    padding: "13px",
    ":hover": { backgroundColor: "rgb(41 37 75 / 80%)" },
    border: "1px solid #8953C3",
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
                    padding={3}
                    borderRadius={3}
                    zIndex={1}
                    maxWidth="600px"
                    m="auto"
                    className="bgAuthForm animate__animated animate__fadeIn"
                >
                    <Typography
                        variant="h4"
                        className="bgGradientText animate__animated animate__fadeInDown"
                        fontWeight={800}
                        textAlign="center"
                        mb={3}
                    >
                        ¡Bienvenido!
                    </Typography>


                    <Button variant="text" sx={styleButton2} style={{ paddingRight: 36 }} >
                        <img src="/assets/images/google-logo.svg" width="30px" alt="" />
                        Ingresar con Google
                    </Button>

                    <Button variant="text" sx={styleButton2}>
                        <img src="/assets/images/facebook-logo.svg" width="12px" alt="" style={{ marginRight: 7 }} />
                        Ingresar con Facebook
                    </Button>

                    <Divider sx={{ color: "white", fontSize: "15px" }}>OR</Divider>

                    <TextField
                        required={true}
                        fullWidth
                        variant="outlined"
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
                        variant="outlined"
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

                    <Button type="submit" variant="contained" disabled={isLoading} sx={styleButton}>
                        Ingresar
                    </Button>

                    <Typography textAlign="center">
                        No estas registrado?
                        <Link ml={1} component={RouterLink} to="/auth/register">Registrate</Link>
                    </Typography>
                </Grid>
            </form>

        </AuthLayout >
    )
}

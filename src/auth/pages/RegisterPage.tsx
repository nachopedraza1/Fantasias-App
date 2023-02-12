import { useState, FormEvent, useEffect } from 'react';
import { Link as RouterLink } from "react-router-dom";

import { useForm, useCustomDispatch, useCustomSelector } from '../../hooks';

import { clearErrorMessage, logout } from '../../redux/slices';
import { startRegister } from '../../redux/thunks/auth';

import { AuthLayout } from "../layout/AuthLayout";
import { AccountCircle, EmailRounded, Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment, TextField, Typography, Link, Button, IconButton, Grid, Divider } from '@mui/material';

import { RegisterData } from '../../interfaces/interfaces';

const styleButton = {
    background: "linear-gradient(90deg, #8953C3 0%, #DF35C9 100%)",
    borderRadius: "5px",
    padding: "5px",
    fontSize: "20px",
    fontWeight: 600
}

const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
}

export const RegisterPage: React.FC = () => {

    const dispatch = useCustomDispatch();

    const { message, validations, isLoading } = useCustomSelector(state => state.auth);
    const { name, email, password, confirmPassword, onInputChange } = useForm<RegisterData>(initialState);

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const onSubmitForm = async (event: FormEvent) => {
        event.preventDefault();
        dispatch(startRegister({ name, email, password, confirmPassword }));
    };
    useEffect(() => { dispatch(clearErrorMessage()) }, [])

    return (
        <AuthLayout>
            <form onSubmit={onSubmitForm}>
                <Grid
                    container
                    position="relative"
                    direction="column"
                    gap={2}
                    padding={3}
                    borderRadius={3}
                    zIndex={1}
                    className="bgAuthForm animate__animated animate__fadeIn"
                >
                    <Typography
                        variant="h4"
                        className="bgGradientText animate__animated animate__fadeInDown"
                        fontWeight={800}
                        textAlign="center"
                    >
                        ¡Bienvenido a Fantasias!
                    </Typography>

                    <Divider sx={{ color: "white", fontSize: "15px" }}>REGISTRO</Divider>

                    <TextField
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Nombre"
                        name='name'
                        value={name}
                        error={!!validations?.name}
                        helperText={validations?.name?.msg}
                        onChange={onInputChange}
                        required={true}
                        placeholder="Ingresa tu nombre."
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <AccountCircle sx={{ color: "white" }} />
                                </InputAdornment>,
                        }}
                    />

                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Email"
                        type="email"
                        name='email'
                        value={email}
                        error={!!validations?.email || !!message}
                        helperText={validations?.email?.msg || message}
                        onChange={onInputChange}
                        required={true}
                        placeholder="Ingresa tu email."
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <EmailRounded sx={{ color: "white" }} />
                                </InputAdornment>
                        }}
                    />

                    <TextField
                        variant="outlined"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Ingresa una contraseña."
                        label="Contraseña"
                        name='password'
                        value={password}
                        error={!!validations?.password}
                        helperText={validations?.password?.msg}
                        onChange={onInputChange}
                        required={true}
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

                    <TextField
                        variant="outlined"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Repite la Contraseña"
                        label="Repite la Contraseña"
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={onInputChange}
                        error={!!validations?.confirmPassword}
                        helperText={validations?.confirmPassword?.msg}
                        required={true}
                    />

                    <Button variant="contained" disabled={isLoading} sx={styleButton} type="submit">
                        Enviar
                    </Button>

                    <Typography textAlign="center">
                        Ya tienes cuenta?
                        <Link ml={1} component={RouterLink} to="/auth/login">Ingresa</Link>
                    </Typography>
                </Grid>
            </form>
        </AuthLayout >
    )
}
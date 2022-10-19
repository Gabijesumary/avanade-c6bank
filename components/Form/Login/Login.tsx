import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import React, { FormEvent, useEffect, useState } from 'react'
import Snackbar from '../../utils/Snackbar'


export default function Login() {
    
    const [email, setEmail] = useState<string | null | FormDataEntryValue>('');
    const [password, setPassword] = useState<string | undefined | null| FormDataEntryValue>('');
    const [error, setError] = useState<string | boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setPassword(data.get('password'));    
    }

    useEffect(() => {

        if (password && password.length < 6) {
            setError(true);
            setErrorMessage('A senha deve ter no mínimo 6 caracteres');
        } else if (password) {
            setError(false);
            setErrorMessage('');
            setOpen(true);
        }
    },[password]);

return (
        <Box sx={{
                mt:8, 
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
                }}
            >
                            
            <Typography component="h1" variant="h5">
            Tela de login
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{mt:1}}>
                <TextField margin="normal" required id="email" name="email" fullWidth label="Digite o login"  autoComplete="email" />
                <TextField margin="normal" required fullWidth id="password" name="password" type="password" label="Digite a senha" autoComplete="current-password"/>
                <FormControlLabel
                control={<Checkbox value="remember" color="primary"/>}
                label="Lembrar-me"
            />
                                    
                <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>
                    Login
                </Button>
                                        
                {error && <Typography color = "error">{errorMessage}</Typography>}
                {open && <Snackbar open={open} hide={6} message={'Usuário logado com sucesso! ...Aguarde...'} severity="success"/>}
            </Box>
        </Box>
        )
}

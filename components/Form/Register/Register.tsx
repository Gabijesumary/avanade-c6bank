import React, { FormEvent, useEffect, useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import Snackbar from '../../utils/Snackbar'

export default function Register() {
    const [name, setName] = useState<string | undefined | null| FormDataEntryValue>('');
    const [email, setEmail] = useState<string | null | FormDataEntryValue>('');
    const [password, setPassword] = useState<string | undefined | null| FormDataEntryValue>('');
    const [confirmPassword, setConfirmPassword] = useState<string | undefined | null| FormDataEntryValue>('');
    const [error, setError] = useState<string | boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setPassword(data.get('password'));
        setConfirmPassword(data.get('confirmPassword'));    
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

    useEffect(() => {
        if(password && confirmPassword) {
            if(password !== confirmPassword) {
                setError(true);
                setErrorMessage('As senhas não conferem');
                setOpen(false);
            } else {
                setError(false);
                setErrorMessage('');
                setOpen(true);
            }
            
        }
    },[password, confirmPassword]);

    return (
        <Box sx={{
                mt:8, 
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
                }}
            >
                            
            <Typography component="h1" variant="h5">
            Tela de cadastro
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{mt:1}}>
                <TextField margin="normal" required id="name" name="name" fullWidth label="Digite o nome"  autoComplete="name" />
                <TextField margin="normal" required id="email" name="email" fullWidth label="Digite o seu email"  autoComplete="email" />
                <TextField margin="normal" required fullWidth id="password" name="password" type="password" label="Digite a senha" autoComplete="current-password"/>
                <TextField margin="normal" required fullWidth id="confirmPassword" name="confirmPassword" type="password" label="Confirme a senha" autoComplete="current-password"/>
                                    
                <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>
                    Cadastrar
                </Button>
                                        
                {error && <Typography color = "error">{errorMessage}</Typography>}
                {open && <Snackbar open={open} hide={6} message={'Usuário cadastrado com sucesso! ...Aguarde...'} severity="success"/>}
            </Box>
        </Box>
        )
}

import React from 'react'
import {Typography,
    Container,
    CssBaseline,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Copyright from '../components/utils/Copyright'
import Login from '../components/Form/Login'

export default function SignInSide () {
    const theme = createTheme();

    
    <ThemeProvider theme={theme}> 
        <Container component="main" maxWidth="xs">; 
            <CssBaseline />
            <Login/>

            <Copyright site="avanade" />
           
        </Container>
    </ThemeProvider>
    
     
}


  


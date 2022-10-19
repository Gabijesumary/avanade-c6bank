//Sempre que vai mandar na tela é bom importar o react from react
import React, { FormEvent, useEffect, useState } from 'react'
import {Typography,
    Container,
    Button,
    TextField,
    Checkbox,
    Box,
    CssBaseline,
    FormControlLabel,} from '@mui/material'
//@mui/material
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Snackbar from '../components/utils/Snackbar'
import Copyright from '../components/utils/Copyright'


/*const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });*/

const theme = createTheme();

//todo componente é uma função, então começamos com a palavra function
//A função tá isolada e por isso precisa exportar ela para ser usada em outro lugar, por isso coloca o export default na frente da função
export default function LoginPage() { //uma página é a junção de vários componentes

    //one way data binding. Significa que o react envia dados para DOM. o que o DOM faz nao importa.

const [email, setEmail] = useState<string | null | FormDataEntryValue>('');
const [password, setPassword] = useState<string | undefined | null| FormDataEntryValue>('');
const [error, setError] = useState<string | boolean>(false);
const [errorMessage, setErrorMessage] = useState<string>('');
const [open, setOpen] = useState<boolean>(false);
const [contador, setContador] = useState<number>(0);

const handleClosed = () => {
    setOpen(false);
 }

//Execute automaticamente após o primeiro render da página
//Executa a cada alteração de estado ou recarregamento de página.
/*useEffect(() => {
    if (contador == 0) {
        document.title = `Executando useEffect a primeira vez. Contador ${contador}`;
    } else {
        document.title = `Executando useEffect. Contador ${contador}`;
    }

    console.log(`Chamou o useEffect. Contador ${contador}`);
},[]);*/ //o segundo parâmetro é opcional, usado para performance ou para customização
// sem [] - executa a cada alteração de state, de todos eles | com [] - executa apenas uma vez, na primeira renderização | com [state] - executa a cada alteração do state indicado


 //aqui a mágica acontece. Criar uma função.
const handleSubmit = (event: FormEvent<HTMLFormElement>) => { 
     //pára tudo
     event.preventDefault();
     const data = new FormData(event.currentTarget);
     //eslin-disable-next-line no-console

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
        <ThemeProvider theme={theme}> {/* O ThemeProvider que permite alterar todo o tema. O theme provider é um componente que vai envolver o container, ele vai envolver o container e vai passar o tema para o container. Ex tema dark, tema light, etc. Só se muda uma vez em um unico arquivo.*/}
            <Container component="main" maxWidth="xs">; {/*A tag container é como se fosse uma div. só se usa uma vez na maioria das vezes*/}
                <CssBaseline /> {/*Se passa CSS para o metarial UI. Faz o css reset, usando o minimo de CSS.*/}
                

        {/*<button onClick={()=>setContador(contador+1)}>Mudando o contador</button>*/}

                <Box sx={{mt:8, 
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center'
                    }}> {/*O box é um componente do material UI, ele é tipo o estilo inline, mas com mais propriedades. Se fosse um classe colocaria o ClassName. O sx é um objeto que vai receber um monte de propriedades. O mt é margin top*/}
                    <Typography component="h1" variant="h5">
                    Tela de login
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{mt:1}}>
                        <TextField margin="normal" required id="email" name="email" fullWidth label="Digite o login" autoComplete="email"/>
                        <TextField margin="normal" required id="password"  name="password" fullWidth type="password" label="Digite a senha" autoComplete="current-password"/>
                        <FormControlLabel    
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Lembrar-me"
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>
                            Login
                        </Button>
                        {error && <Typography color = "error">{errorMessage}</Typography>}
                    </Box>
                </Box>

                <Copyright site="avanade"/>
                {open && <Snackbar open={open} hide={6} message={'Usuário logado com sucesso! ...Aguarde...'} severity="success"/>}
            </Container>
        </ThemeProvider>
    )
} //
//
//Depois carregamos o Css Básico com o CssBaseline

 

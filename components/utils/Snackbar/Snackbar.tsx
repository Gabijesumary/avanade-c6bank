import React,{ useState }  from 'react'
import {Stack, Snackbar as Container, AlertColor} from '@mui/material' //o "as" é quando tem que modificar o nome da propriedade que está sendo repetida. Nesse caso o Snackbar passa a ser chamada Container lá embaixo.
import Alert from '../Alert'

//propiedades que o componente vai receber: Open, HideDuration, Message, Severity
type SnackbarProps = {
  open: boolean;
  hide: number;
  message: string;
  severity: AlertColor;
}


export default function Snackbar(props: SnackbarProps) {
  const [open, setOpen] = useState<boolean>(props.open);

  const handleClose = () => {
    setOpen(false);
  }  

  return (
      <Stack>
        <Container open={open} autoHideDuration={props.hide*1000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={props.severity?props.severity:"success"} sx={{ width: '100%' }}> {props.message}
            
          </Alert>
        </Container>
     </Stack>
  )
}

 /*<Stack>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClosed}>
            <Alert onClose={handleClosed} severity="success" sx={{ width: '100%' }}>
            Usuário logado com sucesso! ...Aguarde...
          </Alert>
      </Snackbar>
    </Stack>*/

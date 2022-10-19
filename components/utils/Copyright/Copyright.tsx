import React from 'react'
import { Typography } from '@mui/material'
import Link from 'next/link'



type CropProps ={
    site?: string; // ? = opcional
} //por ser typescript, tem colocar o tipo da variável

//sempre que tem um texto a propriedade é Typography
//o Link é um componente do next importado acima
export default function Copyright(props: CropProps) {
    return ( //Quando o return é parênteses ele só espera JSX, só aceita tags, por isso não pode colocar textos soltos dentro do return, por isso essa quantidade de {}.
    //o link é o HTML, o href é o atributo do link, só que no next
        <Typography>
            {'Copyright © '}
            <Link color="inherit" href={`https://www.${props.site}.com.br`}>
            {props.site}
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}


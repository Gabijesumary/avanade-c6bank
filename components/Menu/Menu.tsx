import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const MenuContainer = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: #f8f8f8;
  font-family: sans-serif;
  background-color: #242424;
  width: 100%;
  ul {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-top: 30px;
    height: 150px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      background-color: #242424;
      outline: 1px solid #777777;
      border-radius: 2px;
    }
    &::-webkit-scrollbar {
      width: 6px;
    }  
    li {
      font-weight: 400;
      font-size: 1.2rem;
      width:100%;
      display: flex;
      list-style: none;
      line-height: 60px;
      border: solid 4px transparent;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      &:hover {
        background: #888;
        border-left-color: #fffb19;
        cursor: pointer;
      }
    }
  }
`
export default function Menu() {
  return (
    <MenuContainer>
      <ul>
        <li>
          <Link href="/">
            {/*<Icon types="home"/> https://fonts.google.com/icons  */}
            <a>
              Inicio
            </a>
            </Link></li>
        <li>
          <Link href="/">
            {/*<Icon types="home"/>*/}
            <a>
              Extrato
            </a>
            </Link></li>
        <li>
        <Link href="/">
            {/*<Icon types="home"/>*/}
            <a>
              Transferência
            </a>
            </Link>
        </li>
        <li>
        <Link href="/">
            {/*<Icon types="home"/>*/}
            <a>
              Pagamentos
            </a>
            </Link>
        </li>
        <li>
        <Link href="/">
            {/*<Icon types="home"/>*/}
            <a>
              Cartões
            </a>
            </Link>
        </li>
        <li>
        <Link href="/">
            {/*<Icon types="home"/>*/}
            <a>
              Crédito
            </a>
            </Link>
        </li>
      </ul>
    </MenuContainer>
  )
}

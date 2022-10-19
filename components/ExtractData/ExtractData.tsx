import React from 'react'
import styled from '@emotion/styled'
import TypeDb from '../../types/TypeDb';

const ExtractDataContainer = styled.table`
  width:100%;
  border-collapse: collapse;
  thead tr {text-align:left};
  tr {
    line-height: 2.5em;
  }
  tbody tr:nth-child(odd){
    background-color: #f2f2f2;
  }
  tbody tr:hover {
    background-color: #ffa;
    cursor: pointer;
  }
`;


type ExtractDataProps = {
  db: Array <TypeDb>; //vem da pasta Types
}

export default function ExtractData(props: ExtractDataProps) {
  return (
    <ExtractDataContainer>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Data</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {props.db.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                <span>{item.type}</span><br/>
                {item.description}
              </td>
              <td>{new Date(item.date).toLocaleDateString('pt-br')}</td>
              <td>{new Intl.NumberFormat('pt-br',
              {style: 'currency',
              currency: 'BRL'
              }).format(item.amount)}</td>
            </tr>
          )
        })}
      </tbody>
    </ExtractDataContainer>
  )
}
import styled from '@emotion/styled'
import React from 'react'
import ExtractData from '../ExtractData'
import ExtractHeader from '../ExtractHeader'
import ExtractTotal from '../ExtractTotal'
import db from '../utils/db'

const ExtractContenteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

export default function ExtractContent() {
  return (
    <ExtractContenteContainer>
      <ExtractHeader/>
      <ExtractTotal/>
      <ExtractData db={db}/>
      <ExtractTotal/>
    </ExtractContenteContainer>
  )
}

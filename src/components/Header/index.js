import React from 'react'
import { Container, Logo, SearchInput } from './styled'
import logotipo from '../../assets/logo.png'

export default () => {
  return (
    <Container>
      <Logo src={logotipo} />
      <SearchInput type="text" placeholder="Digite um produto..." />
    </Container>
  )
}
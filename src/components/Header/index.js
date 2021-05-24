import React, { useState } from 'react'
import { Container, Logo, SearchInput } from './styled'
import logotipo from '../../assets/logo.png'

export default () => {

  const [inputActive, setInputActive] = useState(false)

  const handleInputFocus = () => {
    setInputActive(true)
  }

  const handleInputBlur = () => {
    setInputActive(false)
  }

  return (
    <Container>
      <Logo src={logotipo} />
      <SearchInput
        type="text"
        placeholder="Digite um produto..."
        active={inputActive}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  )
}
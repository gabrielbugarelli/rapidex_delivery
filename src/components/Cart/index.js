import React from 'react'
import cart from '../../assets/cart.png'
import {
  CartArea,
  CartHeader,
  CartIcon,
  CartText,
  CartBody
} from './styled'

export default () => {
  return (
    <CartArea>
      <CartHeader>
        <CartIcon src={cart} />
        <CartText>Meu carrinho (x)</CartText>
      </CartHeader>
      <CartBody>

      </CartBody>
    </CartArea>
  )
}
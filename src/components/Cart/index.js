import React, { useState } from 'react'
import cart from '../../assets/cart.png'
import { useSelector } from 'react-redux'
import downImage from '../../assets/down.png'

import {
  CartArea,
  CartHeader,
  CartIcon,
  CartText,
  CartBody
} from './styled'

export default () => {

  const products = useSelector(state => state.cart.products)
  const [show, setShow] = useState(false)

  const handleCartClick = () => {
    setShow(!show)
  }

  return (
    <CartArea>
      <CartHeader onClick={handleCartClick}>
        <CartIcon src={cart} />
        <CartText>Meu carrinho ({products.length})</CartText>

        {show &&
          <CartIcon small={false} src={downImage} />
        }
      </CartHeader>
      <CartBody show={show}>
        <div style={{ width: 50, height: 300, backgroundColor: 'white' }}></div>
      </CartBody>
    </CartArea>
  )
}
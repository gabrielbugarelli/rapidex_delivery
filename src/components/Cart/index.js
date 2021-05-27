import React, { useState } from 'react'
import cart from '../../assets/cart.png'
import { useSelector, useDispatch } from 'react-redux'
import downImage from '../../assets/down.png'
import addIcon from '../../assets/add.svg'
import removeIcon from '../../assets/removeWhite.svg'

import {
  CartArea,
  CartHeader,
  CartIcon,
  CartText,
  CartBody,
  ProductItem,
  ProductsArea,
  ProductPhoto,
  ProductInfoArea,
  ProductName,
  ProductPrice,
  ProductQuantityArea,
  ProductQtIcon,
  ProductQtText
} from './styled'

export default () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.cart.products)
  const [show, setShow] = useState(false)

  const handleCartClick = () => {
    setShow(!show)
  }

  const handleProductChange = (key, type) => {
    dispatch({
      type: 'CHANGE_PRODUCT',
      payload: { key, type }
    })
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
        <ProductsArea>
          {products.map((item, index) => (
            <ProductItem key={index}>
              <ProductPhoto src={item.image} />
              <ProductInfoArea>
                <ProductName>{item.name}</ProductName>
                <ProductPrice>R$: {item.price.toFixed(2)}</ProductPrice>
              </ProductInfoArea>
              <ProductQuantityArea>
                <ProductQtIcon
                  src={removeIcon}
                  onClick={() => handleProductChange(index, '-')}
                />
                <ProductQtText>{item.qt}</ProductQtText>
                <ProductQtIcon
                  src={addIcon}
                  onClick={() => handleProductChange(index, '+')}
                />
              </ProductQuantityArea>
            </ProductItem>
          ))}
        </ProductsArea>
      </CartBody>
    </CartArea>
  )
}
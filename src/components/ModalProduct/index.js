import React, { useState, useEffect } from 'react'
//imagens
import add from '../../assets/add.svg'
import cancel from '../../assets/cancel.svg'
import remove from '../../assets/remove.svg'
import addBlack from '../../assets/add_black.svg'


import {
  Container,
  ProductArea,
  ProductPhoto,
  ProductInfoArea,
  ProductDetails,
  ProductQuantityArea,
  ProductButtons,
  ProductName,
  ProductIngredients,
  ProductQuantity,
  ProductPrice,
  ProductButton,
  ButtonIcon,
  ProductQtImg,
  ProductQtText

} from './styled'

export default ({ data, setStatus }) => {

  const [qt, setQt] = useState(1)

  //limpa o modal quando o usuário cancela
  useEffect(() => {
    setQt(1)
  }, [data])

  const handleRemoveQt = () => {
    if (qt > 1) {
      setQt(qt - 1)
    }
  }

  const handleAddQt = () => {
    setQt(qt + 1)
  }

  const handleCancelButton = () => {
    setStatus(false);
  }

  return (
    <Container>
      <ProductArea>
        <ProductPhoto src={data.image} />
        <ProductInfoArea>
          <ProductDetails>
            <ProductName> {data.name} </ProductName>
            <ProductIngredients>{data.ingredients}</ProductIngredients>
          </ProductDetails>
          <ProductQuantityArea>
            <ProductQuantity>
              <ProductQtImg onClick={handleRemoveQt} src={remove} />

              <ProductQtText>
                {qt}
              </ProductQtText>

              <ProductQtImg onClick={handleAddQt} src={addBlack} />
            </ProductQuantity>
            <ProductPrice>
              R$:{(data.price * qt).toFixed(2)}
            </ProductPrice>
          </ProductQuantityArea>
        </ProductInfoArea>
      </ProductArea>

      <ProductButtons>
        <ProductButton small={true} onClick={handleCancelButton}>
          <ButtonIcon src={cancel} /> Cancelar
        </ProductButton>

        <ProductButton>
          <ButtonIcon src={add} />  Adicionar
        </ProductButton>
      </ProductButtons>
    </Container>
  )
}

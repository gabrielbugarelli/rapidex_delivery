import React from 'react'
import imageNext from '../../assets/next.png'
import {
	Container,
	ProductPhotoArea,
	ProductButtonArea,
	ProductInfoArea,
	ProductPhoto,
	ProductName,
	ProductPrice,
	ProductIngredients,
	ProductButton
} from './styled'

export default ({ data, onClick }) => {

	const handleClick = () => {
		onClick(data)
	}

	return (
		<Container onClick={handleClick}>
			<ProductPhotoArea>
				<ProductPhoto src={data.image} />
			</ProductPhotoArea>

			<ProductInfoArea>
				<ProductName>{data.name}</ProductName>
				<ProductPrice>R$: {data.price}</ProductPrice>
				<ProductIngredients>{data.ingredients}</ProductIngredients>
			</ProductInfoArea>

			<ProductButtonArea>
				<ProductButton src={imageNext} />
			</ProductButtonArea>
		</Container>
	)
}
import React from 'react'
import { Container, CategoryImage } from './styled'


export default ({ data, activeCategory, setActiveCategory }) => {
  const handleCategoryClick = () => {
    setActiveCategory(data.id);
  }

  return (
    <Container
      active={activeCategory}
      id={data.id}
      onClick={handleCategoryClick}
      data-tip={data.name}
      data-for="tip-bottom"
    >
      <CategoryImage src={data.image} />
    </Container>
  )
}
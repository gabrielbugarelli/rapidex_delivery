import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  padding:1.5vw;
`;

export const CategoryArea = styled.div`
  font-weight:bold;
  margin-top: 3vh;
`

export const CategoryList = styled.div`
  display:flex;
`
export const ProductArea = styled.div`
  margin-top:3.5vh;
`

export const ProductList = styled.div`
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  grid-gap:1.3vw;
`

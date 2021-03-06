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
export const ProductPaginationArea = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin-top:2vh;
`

export const ProductPaginationItem = styled.div`
  background-color:${props => props.active == props.current ? '#AAE09A' : '#fff'};
  padding:5px 10px;
  border-radius:5px;
  box-shadow:0px 3px 6px rgba(0, 0, 0, 0.16); 
  cursor:pointer;
  margin-right:10px;
`
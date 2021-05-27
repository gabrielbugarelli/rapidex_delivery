import styled from 'styled-components'

export const Container = styled.div`
  width:700px;
  padding:10px;
`
export const ProductArea = styled.div`
  height:200px;
  display:flex;
  color:#136713;
`
export const ProductButtons = styled.div`
  margin-top:1vh;
  display:flex;
  justify-content:flex-end;
`
export const ProductPhoto = styled.img`
  width:310px;
  border-radius: 10px;
`
export const ProductInfoArea = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  margin-left:1vw;
`
export const ProductDetails = styled.div`
  height:50px;
  
`
export const ProductQuantityArea = styled.div`
  height: 50px;
  color: #8c1323;
  display:flex;
  justify-content:space-between;
`
export const ProductName = styled.div`
  font-size:2.5vw;
  font-weight:bold;
`
export const ProductIngredients = styled.div`
  font-size:1.2vw;
`
export const ProductButton = styled.button`
  border:0;
  border-radius:10px;
  color:white;
  font-size:${props => props.small ? '1.3vw' : '1.7vw'};
  font-weight:bold;
  background-color:${props => props.small ? '#8c1323' : '#136713'};
  box-shadow: 4px 5px 0px rgba(0,0,0, 0.16);
  padding:10px 20px;
  margin-left:1vw;
  display:flex;
  align-items:center;
  cursor:pointer;
`
export const ButtonIcon = styled.img`
  margin-right:5px;
`
export const ProductQuantity = styled.div`
  display:flex;
  align-items:center;
`

export const ProductQtImg = styled.img`
  width:2vw;
  height:auto;
  cursor:pointer;
`

export const ProductQtText = styled.div`
  font-size:2vw;
  font-weight:bold;
  color:#136713;
`

export const ProductPrice = styled.div`
  font-size:2.5vw;
  font-weight:bold;
`


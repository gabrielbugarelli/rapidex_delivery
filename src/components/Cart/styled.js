import styled from 'styled-components'

export const CartArea = styled.div`
  background-color:#136713;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position:fixed;
  bottom:0;
  right:30px;
`

export const CartHeader = styled.div`
  width:20vw;
  height:50px;
  display:flex; 
  align-items:center;
  cursor:pointer;
`
export const CartIcon = styled.img`
  width:23px;
  height:auto;
  margin-left:0.8vw;
  margin-right:0.5vw;
`

export const CartText = styled.div`
  display:flex;
  flex:1;
  color:white;
  font-size:1.4vw;
`

export const CartBody = styled.div`
  display:${props => props.show ? 'block' : 'none'}
`


import styled from 'styled-components'

export const Container = styled.div`
  width:70px;
  height:70px;
  background-color:${props => props.active == props.id ? 'white' : "#AAE09A"};
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:20px;
  margin-right:1vw;
  margin-top:1.2vh;
  cursor:pointer;
  transition: all ease .3s;
  box-shadow:0px 3px 6px rgba(0,0,0,0.16);
`

export const CategoryImage = styled.img`
  width:40px;
  height:40px;
`
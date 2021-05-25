import styled from 'styled-components'

export const Container = styled.div`
  width:80px;
  height:80px;
  background-color:${props => props.active == props.id ? 'white' : "#AAE09A"};
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:20px;
  margin-right:1vw;
  margin-top:1.2vh;
  cursor:pointer;
  transition: all ease .3s;
`

export const CategoryImage = styled.img`
  width:55px;
  height:55px;
`
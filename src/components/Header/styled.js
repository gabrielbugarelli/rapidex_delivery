import styled from 'styled-components'
import search from '../../assets/search.png'

export const Container = styled.div`
  background-color:#136713;
  border-radius:10px;
  padding:0.5vw;
  display:flex;
  justify-content:space-between;
  align-items:center;
  box-shadow:0px 3px 6px rgba(0,0,0,0.16);
`
export const Logo = styled.img`
  width:auto;
  height:70px;
`
export const SearchInput = styled.input`
  border:0;
  border-radius: 18px;
  width:${props => props.active ? 300 : 0}px;
  height:50px;
  background-color:white;
  background-image:url(${search});
  background-size:30px;
  background-repeat:no-repeat;
  background-position:10px center;
  padding-left:50px;
  outline:0;
  transition: all ease .2s;
  cursor:pointer;
  font-size:2.5vh;

  &:focus{
    cursor: text;
  }
`
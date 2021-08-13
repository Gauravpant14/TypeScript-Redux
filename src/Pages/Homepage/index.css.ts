import styled from "styled-components";

export const OuterContainer = styled.div`
display: flex;
flex-direction: column;
align-items:center;

`

export const Container = styled.div`
padding: 2px 16px;
Label {
    /* display: block; */
    font-size: 20px;
    padding: 20px;
}
`
export const Card = styled.div`
border: 1px solid ;
margin-top: 10px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 40%;
&:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,1);
}
`

export const TitleCon = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    `

export const BtnContainer = styled.div`
    padding-left: 30px;
    margin-bottom: 10px;

`

export const Button = styled.button`
  background-color: #ffff; /* Green */
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border:  2px solid #008CBA;
  &:hover{
    background-color: #008CBA;
    color: #fff;
  }
`
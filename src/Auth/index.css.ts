import styled from 'styled-components';

export const FormContainer = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  position: relative;
  height: 100vh;
 
`

export const Form = styled.form`
    width: 30%;
    padding: 50px;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid;
    &:hover {
  box-shadow: 0 8px 16px 0 rgba(11,20,45,1);
  animation: bounce 1s;
    }

    @keyframes bounce {
	0%, 20%, 60%, 100% {
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}

	40% {
		-webkit-transform: translateY(-20px);
		transform: translateY(-20px);
	}

	80% {
		-webkit-transform: translateY(-10px);
		transform: translateY(-10px);
	}
}

`

export const FormFieds = styled.div`

`
export const ButtonContainer = styled.div`
 display: flex;
 .signupLink a {
   color: black;
   text-decoration: none;
 }
 .signupBtn{
   margin-top:8px;
 }

`
export const LabelContainer = styled.div`

.loginLink {
  text-decoration: none;
  color: blue;
  padding: 10px 0px 5px 0px;
}
`
export const InputContainer = styled.div`

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

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`

export const Label = styled.label`


`
import React, { ReactElement, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  ButtonContainer,
  Form,
  FormContainer,
  FormFieds,
  Input,
  InputContainer,
  Label,
  LabelContainer,
} from "../index.css";

interface Props { }

// eslint-disable-next-line no-empty-pattern
export default function LoginPage({ }: Props): ReactElement {
  const [val, setVal] = useState({
    email: '',
    pass: ''
  })

  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal({ ...val, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (val.email && val.pass) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: val.email, password: val.pass })
      };
      try{
        const res = await fetch("http://localhost:5000/signin", requestOptions)
        const result = await res.json()
        console.log(result,'----------',res)
        if(res.status === 200){
          localStorage.setItem("auth",result.token);
          history.push("/home")
        }
        else{
          alert(result.error)
        }
      }
      catch(err){
        console.log(err)
      }       
    }
    else {
      alert("Please Fill all the values")
    }
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormFieds>
          <LabelContainer>
            <Label htmlFor="email">Email</Label>
          </LabelContainer>
          <InputContainer>
            <Input type="text" placeholder="Enter Your Email" name="email" value={val.email} onChange={(e) => handleChange(e)} autoComplete="chrome-off" />
          </InputContainer>
        </FormFieds>
        <FormFieds>
          <LabelContainer>
            <Label htmlFor="email">Password</Label>
          </LabelContainer>
          <InputContainer>
            <Input type="password" placeholder="Enter Your Password" name="pass" onChange={(e) => handleChange(e)} autoComplete="chrome-off" />
          </InputContainer>
        </FormFieds>

        <ButtonContainer>
          <Button type="submit">Login</Button>
          <Link to="/signup"><Button className="signupLink">Sign Up</Button></Link>
        </ButtonContainer>
      </Form>
    </FormContainer>
  );
}

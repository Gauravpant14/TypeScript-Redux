import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonContainer, Form, FormContainer, FormFieds, Input, InputContainer, Label, LabelContainer } from '../index.css'

interface Props {
  data: any;
}

const SignUp: React.FC<Props> = () => {
  const [val, setVal] = useState({
    name: '',
    email: '',
    pass: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal({ ...val, [e.target.name]: e.target.value })
  }

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    const requestedOpt = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name:val.name, email: val.email, password: val.pass })
    };
    if(val.name && val.email && val.pass){
      const res = await fetch('http://localhost:5000/signup',requestedOpt)
      console.log(res)
      const result = await res.json()
      if(res.status === 200){
        alert(result.message)
      }
      else{
        alert(result.error)
      }
    }
  }
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormFieds>
          <LabelContainer>
            <Label htmlFor="name">Name</Label>
          </LabelContainer>
          <InputContainer>
            <Input type="text" placeholder="Enter Your Full Name" name="name" value={val.name} onChange={(e) => handleChange(e)} autoComplete="off" />
          </InputContainer>
          <LabelContainer>
            <Label htmlFor="email">Email</Label>
          </LabelContainer>
          <InputContainer>
            <Input type="text" placeholder="Enter Your Email" name="email" value={val.email} onChange={(e) => handleChange(e)} autoComplete="off" />
          </InputContainer>
        </FormFieds>
        <FormFieds>
          <LabelContainer>
            <Label htmlFor="email">Password</Label>
          </LabelContainer>
          <InputContainer>
            <Input type="password" placeholder="Enter Your Password" name="pass" onChange={(e) => handleChange(e)} autoComplete="off" />
          </InputContainer>
        </FormFieds>
        <FormFieds>
          <LabelContainer>
            <Link to="/login" className="loginLink">Already have an account !</Link>
          </LabelContainer>
        </FormFieds>
        <ButtonContainer>
          <Button type="submit" className="signupBtn">Signup</Button>
        </ButtonContainer>
      </Form>
    </FormContainer>
  )
}

export default SignUp

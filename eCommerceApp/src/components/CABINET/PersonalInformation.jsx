import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 300px;
  margin: 0 auto;

  .saveBtn {
    background-color: #00a045ca;
    border-radius: 5px;
    &:hover {
      background-color: #00A046;

    }
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  border: none;
`;

const PersonalInformation = () => {
  return (
    <Container>
      <Title>Personal Information</Title>
      <Form onSubmit={(e)=> { e.preventDefault()}}>
        <Label htmlFor="firstName">First Name</Label>
        <Input type="text" id="firstName" name="firstName" autoComplete="off" />

        <Label htmlFor="lastName">Last Name</Label>
        <Input type="text" id="lastName" name="lastName" autoComplete="off" />

        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" autoComplete="off" />

        <Label htmlFor="phone">Phone</Label>
        <Input type="tel" id="phone" name="phone" autoComplete="off" />

        <Button  className='saveBtn' type="submit">Save Changes</Button>
      </Form>
    </Container>
  );
};

export default PersonalInformation;

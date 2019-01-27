import React, { Component } from 'react';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import { Field, FieldProps, Form, Formik, FormikProps } from 'formik';
import { object, ref, string } from 'yup';


const Global = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono");
body {
  font-family: 'Roboto Mono', monospace;
}
`;
const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
  border-radius: 4px;
  box-shadow: 0px 10px 13px -7px #000000,
    1px 47px 46px -25px rgba(0, 0, 0, 0.43);
  width: 283px;
  height: 600px;
`;

const HeaderContainer = styled.div`
  background: linear-gradient(#bfeaff 0%, #7cd5ff 100%);
`;
const Header = styled.h1`
  padding: 20px 6px 20px 6px;
  font-size: 20x;
  margin: 0px;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Global />
        <PageContainer>
          <FormContainer>
            <HeaderContainer>
              <Header>Create Account</Header>
            </HeaderContainer>
          </FormContainer>
          <Formik
            initialValues={{
              email: '',
              password: '',
              passwordConfirm: '',
            }}
            validationSchema={object().shape({
              email: string()
                .email('please enter a valid email')
                .required('please enter an email'),
              password: string()
                .min(6)
                .max(20)
                .required('please enter a password'),
              passwordConfirm: string()
                .required('please confirm password')
                .oneOf([ref('password')], 'passwords need to match'),
            })}
          />
        </PageContainer>
      </div>
    );
  }
}

export default App;

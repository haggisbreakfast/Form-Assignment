import React, { Component } from 'react';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import { Field, FieldProps, Form, Formik, FormikProps } from 'formik';
import { object, ref, string, number } from 'yup';

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
  border: 1px solid red;
  justify-content: space-between;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 20px;
  justify-content: flex-start;
  border: 1px solid red;
  height: 600px;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid red;
  padding: 20px;
`;

const HeaderContainer = styled.div`
  background: linear-gradient(#bfeaff 0%, #7cd5ff 100%);
`;
const Header = styled.h1`
  padding: 20px 6px 20px 6px;
  font-size: 20x;
  margin: 0px;
`;

export const Error = styled.span`
  color: grey;
  font-size: 12px;
  min-height: 16px;
`;

const FieldLabel = styled.label`
  margin-bottom: 5px;
  font-size: 16px;
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

            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={object().shape({
                email: string()
                  .email('please enter a valid email')
                  .required('please enter an email'),
                password: string()
                  .min(6)
                  .max(20)
                  .required('please enter a password'),
                number: number()
                  .min(1)
                  .max(100)
                  .required('please enter a number'),
              })}
              render={() => (
                <StyledForm>
                  <FieldContainer>
                    <Field
                      name="email"
                      render={({ field, form }) => (
                        <div>
                          <FieldLabel>email</FieldLabel>
                          <input type="email" {...field} placeholder="" />
                          <Error>
                            {form.touched.email &&
                              form.errors.email &&
                              form.errors.email}
                          </Error>
                        </div>
                      )}
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Field
                      name="password"
                      render={({ field, form }) => (
                        <div>
                          <FieldLabel>password</FieldLabel>
                          <input type="password" {...field} placeholder="" />
                          <Error>
                            {form.touched.password &&
                              form.errors.password &&
                              form.errors.password}
                          </Error>
                        </div>
                      )}
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Field
                      name="number"
                      render={({ field, form }) => (
                        <div>
                          <FieldLabel>number</FieldLabel>
                          <input type="number" {...field} placeholder="" />
                          <Error>
                            {form.touched.number &&
                              form.errors.number &&
                              form.errors.number}
                          </Error>
                        </div>
                      )}
                    />
                  </FieldContainer>
                </StyledForm>
              )}
            />
          </FormContainer>
        </PageContainer>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import { Field, Form, Formik } from 'formik';
import { object, string, number } from 'yup';
import RadioButtons from './RadioButtons';
import CheckboxButtons from './CheckboxButtons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
// import { library, IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// library.add(faUserPlus);

// local imports

const Global = createGlobalStyle`
/* @import url("https://fonts.googleapis.com/css?family=Roboto+Mono"); */
@import url("https://fonts.googleapis.com/css?family=Kalam|Roboto+Mono");
body {
  /* font-family: 'Roboto Mono', monospace; */
  font-family: 'Kalam', cursive;
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
  border: 2px solid #cfd3d7;
  border-radius: 4px;
  box-shadow: 0px 10px 13px -7px #000000,
    1px 47px 46px -25px rgba(0, 0, 0, 0.43);
  width: 283px;
  height: 600px;
  justify-content: space-between;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 10px;
  justify-content: space-between;
  height: 600px;
  border: 1px solid red;
`;
const Fields = styled.div`
  display: flex;
  flex-direction: column;
`;

const FieldContainer = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  justify-content: center;
  padding: 10px;
  border: solid red 1px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  background: linear-gradient(#bfeaff 0%, #7cd5ff 100%);
`;
const Header = styled.p`
  padding: 20px 6px 20px 6px;
  font-size: 20px;
  margin: 0px;
`;

export const Error = styled.span`
  color: red;
  font-size: 12px;
  min-height: 16px;
`;

const FieldLabel = styled.label`
  font-size: 20px;
`;

const InputContainer = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
`;

const SubmitButton = styled.button`
  background: #7cd5ff;
  /* font-family: 'Roboto Mono', monospace; */
  font-family: 'Kalam', cursive;
  border-radius: 4px;
  font-size: 18px;
  &:hover {
    opacity: 0.7;
    background: black;
    color: #7cd5ff;
  }
  height: 40%;
  width: 80%;
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
              <FontAwesomeIcon icon={faUserPlus} size="1x" color="pink" />
            </HeaderContainer>

            <Formik
              initialValues={{
                email: '',
                password: '',
                number: 0,
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
                  <Fields>
                    <FieldContainer>
                      <Field
                        name="email"
                        render={({ field, form }) => (
                          <div>
                            <FieldLabel>email</FieldLabel>
                            <InputContainer>
                              <input
                                type="email"
                                {...field}
                                placeholder="lorem@ipsum.com"
                              />
                            </InputContainer>
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
                            <InputContainer>
                              <input
                                type="password"
                                {...field}
                                placeholder=""
                              />
                            </InputContainer>
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
                            <InputContainer>
                              <input type="number" {...field} placeholder="" />
                            </InputContainer>
                            <Error>
                              {form.touched.number &&
                                form.errors.number &&
                                form.errors.number}
                            </Error>
                          </div>
                        )}
                      />
                    </FieldContainer>
                  </Fields>
                  <RadioButtons />
                  <CheckboxButtons />
                  <ButtonContainer>
                    <SubmitButton type="submit"> Submit</SubmitButton>
                  </ButtonContainer>
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

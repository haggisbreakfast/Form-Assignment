import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Field, Form, Formik } from 'formik';
import { object, string, number } from 'yup';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// local imports
import RadioButtons from './RadioButtons';
import CheckboxButtons from './CheckboxButtons';

const Global = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono");
body {
  font-family: 'Roboto Mono', monospace;
}
`;

const PageContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  margin: 60px;
  display: flex;
  flex-direction: column;
  border: 2px solid #cfd3d7;
  border-radius: 4px;
  box-shadow: 0px 10px 13px -7px #000000,
    1px 47px 46px -25px rgba(0, 0, 0, 0.43);
  min-width: 400px;
  justify-content: space-between;
  padding: 20px 30px 20px 30px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px dotted #7cd5ff;
  padding: 10px;
`;

const Header = styled.p`
  font-size: 26px;
  margin: 6px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 10px;
  justify-content: space-between;
`;
const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 20px;
`;

const FieldLabel = styled.label`
  font-size: 16px;
  margin: 5px;
`;

const StyledInput = styled.input`
  border-radius: 3px;
  border: 1px solid #cfd3d7;
  width: 90%;
  height: 20px;
  padding: 4px;
`;

const Error = styled.span`
  font-size: 12px;
  min-height: 16px;
  color: #3f7fbf;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  border: 2px solid #7cd5ff;
  font-family: 'Roboto Mono', monospace;
  border-radius: 4px;
  font-size: 18px;
  &:hover {
    opacity: 0.7;
    background: #7cd5ff;
  }
  height: 30%;
  width: 40%;
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
              <FontAwesomeIcon icon={faUserPlus} size="2x" color="pink" />
            </HeaderContainer>
            <Formik
              initialValues={{
                email: '',
                password: '',
                number: 0,
              }}
              validationSchema={object().shape({
                email: string()
                  .email('uh-oh this is not a valid email!')
                  .required('looks like you forgot your email!'),
                password: string()
                  .min(6, 'make sure your password has 6+ characters!')
                  .max(20, 'this is a little long! 20 or less please!')
                  .required('whoa there you need a password!'),
                number: number()
                  .min(1, 'whoops this has to be more than 1')
                  .max(100)
                  .required('please enter a number'),
              })}
              render={() => (
                <StyledForm>
                  <Field
                    name="email"
                    render={({ field, form }) => (
                      <FieldContainer>
                        <FieldLabel>email</FieldLabel>

                        <StyledInput
                          type="email"
                          {...field}
                          placeholder="lorem@ipsum.com"
                        />

                        <Error>
                          {form.touched.email &&
                            form.errors.email &&
                            form.errors.email}
                        </Error>
                      </FieldContainer>
                    )}
                  />

                  <Field
                    name="password"
                    render={({ field, form }) => (
                      <FieldContainer>
                        <FieldLabel>password</FieldLabel>
                        <StyledInput
                          type="password"
                          {...field}
                          placeholder=""
                        />

                        <Error>
                          {form.touched.password &&
                            form.errors.password &&
                            form.errors.password}
                        </Error>
                      </FieldContainer>
                    )}
                  />

                  <Field
                    name="number"
                    render={({ field, form }) => (
                      <FieldContainer>
                        <FieldLabel>how many lorem ipsums?</FieldLabel>

                        <StyledInput type="number" {...field} placeholder="" />

                        <Error>
                          {form.touched.number &&
                            form.errors.number &&
                            form.errors.number}
                        </Error>
                      </FieldContainer>
                    )}
                  />
                  <RadioButtons />
                  <CheckboxButtons />
                  <ButtonContainer>
                    <SubmitButton type="submit"> submit</SubmitButton>
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

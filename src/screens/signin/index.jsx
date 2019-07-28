import React from 'react';
import { withFormik } from 'formik';
import {
  StyledContainer,
  StyledBody,
  StyledTitle,
  StyledInput,
  StyledForm,
  StyledButton,
  StyledButtonS
} from './styles';

const SignIn = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit
}) => {
  return (
    <StyledBody>
      <StyledContainer>
        <StyledTitle>CRYPTOGRAVITY</StyledTitle>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" name="email" placeholder="Email" />
          <StyledInput type="password" name="password" placeholder="Password" />
          <a href="lokis.html">¿Olvidaste la contraseña?</a>
          <StyledButton>Sign In</StyledButton>
          <StyledButtonS>Sign Up</StyledButtonS>
        </StyledForm>
      </StyledContainer>
      ;
    </StyledBody>
  );
};

export default withFormik({})(SignIn);

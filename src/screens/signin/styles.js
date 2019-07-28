import styled from 'styled-components';

const StyledBody = styled.body`
  background-color: #252a2d;
  height: 100vh;
  width: 100%;
`;

const StyledContainer = styled.div`
  background-color: #0d1718;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 430px;
  width: 480px;
`;

const StyledTitle = styled.p`
  text-align: center;
  font-size: 1em;
  color: #ffff;
  font-family: PressStart;
  margin-top: 30px;
  text-decoration: underline;
`;

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 365px;
  height: 55px;
  background-color: #252a2d;
  border-radius: 8px;
  border: none;
  margin-top: 20px;
  font-family: RobotoRegular;
  color: white;
`;

const StyledButton = styled.button`
  width: 355px;
  height: 55px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(160deg, #99ae59, #66bb86);
  font-family: RobotoRegular;
  font-size: 1.1em;
  margin-top: 40px;
`;

const StyledButtonS = styled.button`
  width: 355px;
  height: 55px;
  border-radius: 8px;
  border: 1px solid #99ae59;
  font-family: RobotoRegular;
  font-size: 1.1em;
  margin-top: 3px;
  background-color: transparent;
  color: #66bb86;
`;
export {
  StyledContainer,
  StyledBody,
  StyledTitle,
  StyledInput,
  StyledForm,
  StyledButton,
  StyledButtonS
};

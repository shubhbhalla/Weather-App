import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import styled from 'styled-components';

const Login = () => (
  <LoginContainer>
    <SignIn />
    <SignUp />
  </LoginContainer>
);

const LoginContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  margin: 30px auto;
`;

export default Login;

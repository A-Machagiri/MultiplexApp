import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import toast, {Toaster} from 'react-hot-toast'

const LoginContainer = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", { email, password });
      toast.success("Logged in")
      navigate("/movies");
      console.log(res);
    } catch (error) {
      console.log(error);
    }

    // Simulating a successful login for demonstration purposes
    if (email === 'example' && password === 'password') {
      setIsLoggedIn(true);
    }
  };

  return (
    <LoginContainer>
      {isLoggedIn ? (
        <p>Welcome, {email}! You are logged in.</p>
      ) : (
        <>
          <h2>Login</h2>
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Login</Button>
          <Toaster/>
        </>
      )}
    </LoginContainer>
  );
};

export default Login;

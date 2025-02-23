import React, { useState } from 'react';
import styled from 'styled-components';

const SignUpContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f8f8;
`;

const Header = styled.div`
  background-color: #6a00ff;
  color: white;
  text-align: center;
  padding: 20px 0;
  width: 100%;
  font-size: 1.5em;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const SignUpSection = styled.div`
  text-align: center;
  margin-bottom: 20px;
  width: 80%;
  max-width: 400px;
  padding: 20px;
`;

const InputField = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const SignUpButton = styled.button`
  background-color: #6a00ff;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  width: 100%;
  &:hover {
    background-color: #6a00ff;
  }
`;

const WelcomeSection = styled.div`
  text-align: center;
  padding: 20px;
`;

const Footer = styled.div`
  text-align: center;
  padding: 10px;
  background-color: white;
  width: 100%;
  font-size: 0.8em;
`;

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement sign-up logic here (API call to backend)
    console.log("Signing up with:", name, email, password);
  };

  return (
    <SignUpContainer>
      <Header>
        <div>Auction App</div>
        <NavLink href="/signup">Signup</NavLink>
        <NavLink href="/signin">Signin</NavLink>
        <NavLink href="/dashboard">Dashboard</NavLink>
        <NavLink href="/postauction">Post Auction</NavLink>
      </Header>

      <SignUpSection>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SignUpButton type="submit">Sign Up</SignUpButton>
        </form>
      </SignUpSection>

      <WelcomeSection>
        <p>Welcome to Auction App</p>
      </WelcomeSection>

      <Footer>
        &copy; 2024 Auction App. All rights reserved.<br />
        Welcome to the best place to buy and sell items through auctions!
      </Footer>
    </SignUpContainer>
  );
}

export default SignUp;



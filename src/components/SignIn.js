import React, { useState } from 'react';
import styled from 'styled-components';

const SignInContainer = styled.div`
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
  background: linear-gradient(to right, #6a00ff, #8e2de2);
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

const SignInSection = styled.div`
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

const SignInButton = styled.button`
  background-color: #8e2de2;
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
  background-color: #eee;
  width: 100%;
  font-size: 0.8em;
`;

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement sign-in logic here (API call to backend)
    console.log("Signing in with:", username, password);
  };

  return (
    <SignInContainer>
      <Header>
        <div>Auction App</div>
        <NavLink href="/signup">Signup</NavLink>
        <NavLink href="/signin">Signin</NavLink>
        <NavLink href="/dashboard">Dashboard</NavLink>
        <NavLink href="/postauction">Post Auction</NavLink>
      </Header>

      <SignInSection>
        <h2>Signin</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SignInButton type="submit">Signin</SignInButton>
        </form>
      </SignInSection>

      <WelcomeSection>
        <p>Welcome to Auction App</p>
        <p>An auction is usually a process of buying and selling goods or services by offering them up for bids, taking bids, and then selling the item to the highest bidder or buying the item from the lowest bidder. Some exceptions to this definition exist and are described in the section about different types.</p>
      </WelcomeSection>

      <Footer>
        &copy; 2024 Auction App. All rights reserved.<br />
        Welcome to the best place to buy and sell items through auctions!
      </Footer>
    </SignInContainer>
  );
}

export default SignIn;

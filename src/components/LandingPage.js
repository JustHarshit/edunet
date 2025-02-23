import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const LandingPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const ClickableDiv = styled.div`
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
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
  border-bottom: 1px solid #ccc;
`;

const InputField = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 0;
  width: 100%;
  outline: none;
`;

const SignInButton = styled.button`
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
  margin-top: 10px;
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

function LandingPage() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    console.log(`Navigating to: ${path}`); // For debugging
    navigate(path);
  };

  return (
    <LandingPageContainer>
      <Header>
        <ClickableDiv onClick={() => handleClick('/')}>Auction App</ClickableDiv>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/signin">Signin</NavLink>
        <ClickableDiv onClick={() => handleClick('/')}>Dashboard</ClickableDiv>
        <NavLink to="/postauction">Post Auction</NavLink>
      </Header>

      <SignInSection>
        <h2>Signin</h2>
        <InputField type="text" placeholder="Username" />
        <InputField type="password" placeholder="Password" />
        <SignInButton>Signin</SignInButton>
      </SignInSection>

      <WelcomeSection>
        <h2>Welcome to Auction App</h2>
        <p>An auction is usually a process of buying and selling goods or services by offering them up for bids, taking bids, and then selling the item to the highest bidder or buying the item from the lowest bidder. Some exceptions to this definition exist and are described in the section about different types.</p>
      </WelcomeSection>

      <Footer>
        &copy; 2024 Auction App. All rights reserved.<br />
        Welcome to the best place to buy and sell items through auctions!
      </Footer>
    </LandingPageContainer>
  );
}

export default LandingPage;

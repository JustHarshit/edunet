import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LandingPageContainer = styled.div`
  /* Add styling here to make it attractive */
  padding: 20px;
  text-align: center;
`;

const HeroSection = styled.div`
  background-color: #f0f0f0;
  padding: 50px;
  margin-bottom: 20px;
`;

function LandingPage() {
  return (
    <LandingPageContainer>
      <HeroSection>
        <h1>Welcome to the Online Auction Platform</h1>
        <p>Buy and sell items in real-time</p>
        <Link to="/signup">Sign Up</Link>  <Link to="/learnmore">Learn More</Link>
      </HeroSection>
      {/* Featured Auctions, Testimonials, Footer */}
    </LandingPageContainer>
  );
}

export default LandingPage;

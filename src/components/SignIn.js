import React, { useState } from 'react';
import styled from 'styled-components';

const SignInContainer = styled.div`
  /* Add styling here */
  padding: 20px;
`;

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement sign-in logic here (API call to backend)
    console.log("Signing in with:", email, password);
  };

  return (
    <SignInContainer>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign In</button>
      </form>
      <a href="/forgot-password">Forgot Password?</a>
      <p>New user? <a href="/signup">Sign Up</a></p>
    </SignInContainer>
  );
}

export default SignIn;

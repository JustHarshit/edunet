import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard'; // Optional
import PostAuction from './components/PostAuction'; // Optional
import AuctionDetail from './components/AuctionDetail'; // Optional

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Optional */}
        <Route path="/post-auction" element={<PostAuction />} /> {/* Optional */}
        <Route path="/auction/:id" element={<AuctionDetail />} /> {/* Optional */}
      </Routes>
    </Router>
  );
}

export default App;

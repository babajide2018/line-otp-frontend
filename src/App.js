
import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [otp, setOtp] = useState(null);

  const handleLineSignIn = () => {
    // Redirect to Line login page
    window.location.href = 'http://127.0.0.1:4000/auth/line';
  };

  useEffect(() => {
    // Check for user details and OTP in URL parameters after callback
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    const displayName = urlParams.get('displayName');
    const pictureUrl = urlParams.get('pictureUrl');
    const receivedOtp = urlParams.get('otp');

    if (userId && displayName && pictureUrl) {
      // Update state with retrieved user details
      setUserDetails({
        userId,
        displayName,
        pictureUrl,
      });
    }

    if (receivedOtp) {
      // Update state with the received OTP
      setOtp(receivedOtp);
    }
  }, []);

  return (
    <div className="form">
      <h1>Test Task: Sign In with Line and Obtain OTP (PHP)</h1>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg"
        alt="Line Logo"
      />

      <button onClick={handleLineSignIn} className="styled-button">
        Sign In With Line
      </button>

      {userDetails && (
        <div>
          <h2>User Details</h2>
          <p>UserID: {userDetails.userId}</p>
          <p>Name: {userDetails.displayName}</p>
          <p>Profile Picture: <img src={userDetails.pictureUrl} alt="Profile" /></p>
        </div>
      )}

      {otp && (
        <div>
          <h2>One-Time Password (OTP)</h2>
          <p>{otp}</p>
          <p>This OTP is valid for 30 seconds.</p>
        </div>
      )}
    </div>
  );
};

export default App;
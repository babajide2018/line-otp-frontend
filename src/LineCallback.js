// LineCallback.js
import React, { useEffect } from 'react';

const LineCallback = () => {
  useEffect(() => {
    // Extract parameters from the URL
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const state = params.get('state');

    // Now you can use 'code' and 'state' as needed
    if (code && state) {
      // Perform actions with the code and state (e.g., send them to your backend)
      console.log('Authorization code:', code);
      console.log('State:', state);
    }
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <h1>Line Callback</h1>
      {/* You can add additional content if needed */}
    </div>
  );
};

export default LineCallback;

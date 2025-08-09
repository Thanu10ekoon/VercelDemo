import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  const [loginResult, setLoginResult] = useState(null);

  const handleLoginResult = (result) => {
    setLoginResult(result);
  };

  const handleReset = () => {
    setLoginResult(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Login System</h1>
        {!loginResult ? (
          <LoginForm onLoginResult={handleLoginResult} />
        ) : (
          <div className="result-container">
            <div className={`result ${loginResult.success ? 'success' : 'error'}`}>
              <h2>Login Result</h2>
              <p><strong>Status:</strong> {loginResult.success ? 'SUCCESS' : 'FAILED'}</p>
              <p><strong>Code:</strong> {loginResult.code}</p>
              <p><strong>Message:</strong> {loginResult.message}</p>
            </div>
            <button onClick={handleReset} className="reset-btn">
              Try Again
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate inputs
    // if success -> redirect to path '/'
    navigate('/aaa');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email"></input>
      <input placeholder="Password"></input>
      <button>Login</button>
    </form>
  );
}

export default LoginPage;

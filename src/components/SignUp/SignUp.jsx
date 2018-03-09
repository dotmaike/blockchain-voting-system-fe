import React from 'react';

const SignUp = () => (
  <form id="signup" name="signup">
    <label htmlFor="email">Email Address</label>
    <input className="text" name="email" type="text" />
    <label htmlFor="username">Username</label>
    <input className="text username" name="username" type="text" />
    <input className="btn" type="submit" value="Sign Up" />
  </form>
);

export default SignUp;

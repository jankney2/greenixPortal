import React from "react";

const LoginMarkup = props => {
  return (
    <div className='loginWindow'>
      <input
        type="email"
        placeholder="email"
        onChange={e => {
          props.updateEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={e => {
          props.updatePass(e.target.value);
        }}
      />

      <button
        onClick={() => {
          props.submitLogin();
        }}
      >
        login
      </button>
    </div>
  );
};

export default LoginMarkup;

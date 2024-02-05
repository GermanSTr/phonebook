import React from 'react';
import { useDispatch } from 'react-redux';
import { apiRegisterUser } from '../redux/auth/authSlice';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;
    const formData = { name, email, password };
    dispatch(apiRegisterUser(formData));
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="userName"
            placeholder="Sanches"
            minLength={2}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="userEmail"
            placeholder="Sanches123@ukr.net"
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="userPassword"
            placeholder="*******"
            minLength={7}
            required
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default RegisterPage;

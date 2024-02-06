import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../redux/auth/authSlice';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;
    const formData = { email, password };
    dispatch(apiLoginUser(formData));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
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

export default LoginPage;

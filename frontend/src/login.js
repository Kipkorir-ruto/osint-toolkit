import React from 'react';

function Auth() {
  const [isResetPassword, setIsResetPassword] = React.useState(false);

  return (
    <div>
      {isResetPassword ? (
        <>
          <h1>Reset Password</h1>
          <form>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <button type="submit">Reset Password</button>
          </form>
          <button onClick={() => setIsResetPassword(false)}>
            Back to Login
          </button>
        </>
      ) : (
        <>
          <h1>Login Page</h1>
          <form>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Password:
              <input type="password" name="password" />
            </label>
            <button type="submit">Login</button>
          </form>
          <button onClick={() => setIsResetPassword(true)}>
            Forgot Password?
          </button>
        </>
      )}
    </div>
  );
}

export default Auth;
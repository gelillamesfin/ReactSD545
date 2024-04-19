
import React from 'react'
import'./login.css'
import logo from '../img/piano.jpeg'
function Login() {
  return (
    <div>
      <header className="p-3 text-bg-dark">
        <form className="formClass mt 2">
          <img
            className="mb-4"
            src={logo}
            alt="Music Logo"
            style={{ width: "28%" }}
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control "
              id="floatingPassword"
              placeholder="Password"
            />
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
        </form>
      </header>
    </div>
  );
}

export default Login

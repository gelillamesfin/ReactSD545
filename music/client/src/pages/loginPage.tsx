import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../img/piano.jpeg";
import { signIn } from "../apis/songsService";
 

function Login() {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const { username, password } = formState;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSumbit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    try {
      const response = await signIn({ username, password });
 console.log(response.status)
      if (response.status === 200) {
        const token = response.data.accessToken;
      localStorage.setItem('token',token)
        console.log(token);
        navigate("/home");
      }
    } catch(e) {
      alert("wrong email or password. please try again.");
       console.log(e);
    }
  };

  return (
    <div className="text-center" data-new-gr-c-s-check-loaded="14.1168.0">
      <form
        className="form-signin"
        style={{ alignItems: "center" }}
        onSubmit={handleSumbit}
      >
        <img className="mb-4 mt-5" src={logo} alt="" width="100" height="100" />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

        <input
          type="text"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          style={{ width: "250px", marginLeft: "40%" }}
          onChange={handleInputChange}
          name="username"
        />

        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
          style={{ width: "250px", marginLeft: "40%", marginTop: "1%" }}
          onChange={handleInputChange}
          name="password"
        />
        <div className="checkbox mb-3"></div>

        <button className="btn btn-lg btn-primary btn-block" type="submit">
          sign In
        </button>
      </form>
    </div>
  );
}

export default Login;

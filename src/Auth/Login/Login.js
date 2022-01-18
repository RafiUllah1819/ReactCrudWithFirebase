import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Config/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const login = async () => {
    try {
      const data = await signInWithEmailAndPassword(
        auth,
        state.email,
        state.password
      );
      localStorage.setItem("token", data?.user?.accessToken);
      navigate("/add");
    } catch (err) {
      console.log(err);
    }
  };
  const onhandleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="auths">
      <div className="auth">
        <h1>Login</h1>

        <div className="form-group mb-3">
          <input
            type="text"
            placeholder="Email"
            className="form-control"
            value={state.email}
            name="email"
            onChange={onhandleChange}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            placeholder="password"
            className="form-control"
            value={state.password}
            name="password"
            onChange={onhandleChange}
          />
        </div>
        <button className="authButton" onClick={login}>
          Login
        </button>
        <p className="already">
          If already has account?
          <Link to="/">SignUp</Link>
        </p>
      </div>
    </div>
  );
};

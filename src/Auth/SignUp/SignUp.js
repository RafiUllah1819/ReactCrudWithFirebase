import React, { useState, useEffect } from "react";
import { auth } from "../../Config/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
//   useEffect(() => {
//     localStorage.getItem("token");
//     navigate("/add");
//   }, []);
  const signup = async () => {
    try {
      const data = await createUserWithEmailAndPassword(
        auth,
        state.email,
        state.password
      );
      console.log("authData", data);
      //   console.log("authData token", data.user.accessToken);
      localStorage.setItem("token", data?.user?.accessToken);
      navigate("/add");
    } catch (err) {
      console.log(err);
    }
    setState({
      name: "",
      email: "",
      password: "",
    });
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
        <h1>Register</h1>

        <div className="form-group mb-3">
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            value={state.name}
            name="name"
            onChange={onhandleChange}
          />
        </div>
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
        <button className="authButton" onClick={signup}>
          Register
        </button>
        <p className="already">
          If already has account?
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

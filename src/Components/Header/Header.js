import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Config/FirebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";

export const Header = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const navigate = useNavigate();
  const logout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        console.log("logout");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="navbar-section">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/dashboard">
          My Shop
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <button className="" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="sidebar">
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="navLink" to="/dashboard">
              Dashbaord
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="navLink" to="/add">
              Add Customer
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="navLink" to="/allrecords">
              Total Customers
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="navLink" to="/about">
              {" "}
              About
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="navLink" to="/calender">
              Calender
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="navLink" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

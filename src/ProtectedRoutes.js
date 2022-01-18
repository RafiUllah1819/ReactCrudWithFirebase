import React from "react";
import { Header } from "./Components/Header/Header";
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const token = localStorage.getItem("token") ? true : false;
  console.log("token ", token);
  return token ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to={{ pathname: "/" }} />
  );
};

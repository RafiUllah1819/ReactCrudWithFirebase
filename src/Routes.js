import React from "react";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Routes, Route } from "react-router-dom";
import { AddRecord } from "./Components/AddRecord/AddRecord";
import { TotalRecords } from "./Components/TotalRecord/TotalRecords";
import { SingleRecord } from "./Components/SingleRecord/SingleRecord";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { About } from "./Components/About/About";
import { SignUp } from "./Auth/SignUp/SignUp";
import { Login } from "./Auth/Login/Login";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/add" element={<AddRecord />} />
        <Route path="/allrecords" element={<TotalRecords />} />
        <Route path="/singleRecord/:id" element={<SingleRecord />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

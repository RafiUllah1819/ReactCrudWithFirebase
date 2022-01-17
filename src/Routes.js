import React from "react";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Routes, Route } from "react-router-dom";
import { AddRecord } from "./Components/AddRecord/AddRecord";
import { TotalRecords } from "./Components/TotalRecord/TotalRecords";
import { SingleRecord } from "./Components/SingleRecord/SingleRecord";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/add" element={<AddRecord />} />
        <Route path="/allrecords" element={<TotalRecords />} />
        <Route path="/singleRecord/:id" element={<SingleRecord />} />
      </Route>
    </Routes>
  );
};

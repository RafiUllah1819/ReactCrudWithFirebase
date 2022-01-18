import React, { useState, useEffect, useContext } from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import { ContextNode } from "../../Context/Context";

export const TotalRecords = () => {
  const {persons}  = useContext(ContextNode);

  console.log("persons of totalRcords", persons);

  return (
    <div className="form-section search-area">
      <div className="top d-flex">
        <div className="lenght"></div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="search...."
          ></input>
        </div>
      </div>
      {/* <EditRecord modal = {modal}/> */}
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">F_Name</th>
            <th scope="col">Address</th>
            <th scope="col">Contact</th>
            <th scope="col">More</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {persons?.map((person, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{person.name}</td>
                <td>{person.fname}</td>
                <td>{person.address}</td>
                <td>{person.contact}</td>
                <td className="more">
                  <Link to={`/singleRecord/${i}`}>More</Link>
                </td>
                <td>
                  {/* <span className="edit" onClick={() => editRecord(i)}>
                      <i className="fa fa-edit"></i>{" "}
                    </span> */}
                  <span
                    className="trash"
                    // onClick={() => {
                    //   if (window.confirm("DO you want to delete record"))
                    //     deletRecord(i);
                    // }}
                  >
                    <i className="fa fa-trash"></i>{" "}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

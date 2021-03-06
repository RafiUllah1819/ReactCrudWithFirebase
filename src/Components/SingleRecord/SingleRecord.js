import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { ContextNode } from "../../Context/Context";

export const SingleRecord = () => {
  const { id } = useParams();
  const { persons } = useContext(ContextNode);
  //   console.log("contextdata", persons);
  const [person, setPerson] = useState({});

  useEffect(() => {
    setPerson(persons[id]);
  }, []);
  console.log("singleperson", person);
  // eslint-disable-next-line

  return (
    <div className="form-section">
      {/* <h3 className="text-center">Single Data</h3> */}
      <div className="card">
        <div className="profile">
          <span>
            <i className="fa fa-user-circle"></i>
          </span>
        </div>
        <div className="card-body">
          <h3 className="card-title">{person.name}</h3>
          <div className="sub-title d-flex">
            <h5>{person.fname}</h5>
            <h5>{person.contact}</h5>
            <h5>{person.address}</h5>
          </div>
          <ul className="card-details p-0">
                <li className="details"><h6>Id : {id}</h6></li>
                <li className="details"><h6>Height : {person.height}</h6></li>
                <li className="details"><h6>Sleeve : {person.sleev}</h6></li>
                <li className="details"><h6>Shoulder : {person.shoulder}</h6></li>
                <li className="details"><h6>Neck : {person.neck}</h6></li>
                <li className="details"><h6>Width : {person.width}</h6></li>
                <li className="details"><h6>Chest : {person.chest}</h6></li>
                <li className="details"><h6>Paint Height : {person.paint}</h6></li>
                <li className="details"><h6>Strip_Size : {person.foot}</h6></li>
                <li className="details"><h6>Pocket : {person.front}, {person.oneside},{person.doublesides}</h6></li>
                <li className="details"><h6>Daman : {person.straight},{person.round}</h6></li>
                <li className="details"><h6>Collar :{person.one}. , {person.two} ,{person.simple} </h6></li>
     
           </ul>
        </div>
      </div>
    </div>
  );
};

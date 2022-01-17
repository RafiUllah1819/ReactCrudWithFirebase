import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Config/FirebaseConfig";
import { AddUi } from "./AddUi";

export const AddRecord = () => {
  const [state, setState] = useState({
    name: "",
    fname: "",
    address: "",
    contact: "",
    height: "",
    sleev: "",
    shoulder: "",
    neck: "",
    width: "",
    chest: "",
    paint: "",
    foot: "",
    front: "",
    oneside: "",
    doublesides: "",
    round: "",
    straight: "",
    one: "",
    two: "",
    simple: "",
  });

  const submitRecord = async () => {
    const obj = {
      name: state.name,
      fname: state.fname,
      address: state.address,
      contact: state.contact,
      height: state.height,
      sleev: state.sleev,
      shoulder: state.shoulder,
      neck: state.neck,
      width: state.width,
      chest: state.chest,
      paint: state.paint,
      foot: state.foot,
      front: state.front,
      oneside: state.oneside,
      doublesides: state.doublesides,
      round: state.round,
      straight: state.straight,
      one: state.one,
      two: state.two,
      simple: state.simple,
    };

    const collectionRef = collection(db, "users");
    try {
      const data = await addDoc(collectionRef, obj);
      console.log("mydata", data);
    } catch (err) {
      console.log(err);
    }
    emptyFields();
  };

  const emptyFields = () => {
    setState({
      name: "",
      fname: "",
      address: "",
      contact: "",
      height: "",
      sleev: "",
      shoulder: "",
      neck: "",
      width: "",
      chest: "",
      paint: "",
      foot: "",
      front: "",
      oneside: "",
      doublesides: "",
      round: "",
      straight: "",
      one: "",
      two: "",
      simple: "",
    });
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container-fluid myshop">
      <AddUi
        handleChange={handleChange}
        submitRecord={submitRecord}
        state={state}
      />
    </div>
  );
};

import React from "react";

export const AddUi = (props) => {
  const { handleChange, submitRecord, state } = props;
  return (
    <div className="form-section">
      <div className="row">
        <div className="col-md-4">
          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              value={state.name}
              onChange={handleChange}
              name="name"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Father Name"
              className="form-control"
              value={state.fname}
              // onChange = {(e)=>setFname(e.target.value)}
              onChange={handleChange}
              name="fname"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Address"
              className="form-control"
              value={state.address}
              // onChange = {(e)=>setAddress(e.target.value)}
              onChange={handleChange}
              name="address"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Contact"
              className="form-control"
              value={state.contact}
              // onChange = {(e)=>setContact(e.target.value)}
              onChange={handleChange}
              name="contact"
            />
          </div>
        </div>
        <div className="col-md-2">
          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Height"
              className="form-control"
              value={state.height}
              onChange={handleChange}
              name="height"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Sleeve"
              className="form-control"
              value={state.sleev}
              onChange={handleChange}
              name="sleev"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Shoulder"
              className="form-control"
              value={state.shoulder}
              onChange={handleChange}
              name="shoulder"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Neck"
              className="form-control"
              value={state.neck}
              onChange={handleChange}
              name="neck"
            />
          </div>
        </div>
        {/* column end here */}
        <div className="col-md-2">
          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Width"
              className="form-control"
              value={state.width}
              onChange={handleChange}
              name="width"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Chest"
              className="form-control"
              value={state.chest}
              onChange={handleChange}
              name="chest"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Paint Height"
              className="form-control"
              value={state.paint}
              onChange={handleChange}
              name="paint"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Strip_Size"
              className="form-control"
              value={state.foot}
              onChange={handleChange}
              name="foot"
            />
          </div>
        </div>
        <div className="col-md-2 px-4">
          <h6>Pocket</h6>
          <div className="form-check">
            <label className="form-check-label" for="check1">
              <input
                type="checkbox"
                className="form-check-input"
                id="check1"
                name="front"
                value="front"
                checked={state.front === "front"}
                onChange={handleChange}
              />
              Front
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" for="check2">
              <input
                type="checkbox"
                className="form-check-input"
                id="check2"
                name="oneside"
                value="oneside"
                checked={state.oneside === "oneside"}
                onChange={handleChange}
              />
              One_Side
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" for="check3">
              <input
                type="checkbox"
                className="form-check-input"
                id="check3"
                name="doublesides"
                value="doublesides"
                checked={state.doublesides === "doublesides"}
                onChange={handleChange}
              />
              Double_Sides
            </label>
          </div>
          <h6 style={{ marginTop: "20px" }}>Daman</h6>
          <div className="form-check">
            <label className="form-check-label" for="radio1">
              <input
                type="radio"
                className="form-check-input"
                id="radio1"
                name="round"
                value="round"
                checked={state.round === "round"}
                onChange={handleChange}
              />
              Round
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" for="radio2">
              <input
                type="radio"
                className="form-check-input"
                id="radio2"
                name="straight"
                value="straight"
                checked={state.straight === "straight"}
                onChange={handleChange}
              />
              Straight
            </label>
          </div>
        </div>
        <div className="col-md-2">
          <h6>Collar</h6>
          <div className="form-check">
            <label className="form-check-label" for="radio2">
              <input
                type="radio"
                className="form-check-input"
                id="radio2"
                name="one"
                value="one"
                checked={state.one === "one"}
                onChange={handleChange}
              />
              One Piece
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" for="radio2">
              <input
                type="radio"
                className="form-check-input"
                id="radio2"
                name="two"
                value="two"
                checked={state.two === "two"}
                onChange={handleChange}
              />
              Two Pieces
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" for="radio2">
              <input
                type="radio"
                className="form-check-input"
                id="radio2"
                name="simple"
                value="simple"
                checked={state.simple === "simple"}
                onChange={handleChange}
              />
              Kurtha
            </label>
          </div>
        </div>
        <div className="form-button">
          <button className="btn btn-success" onClick={submitRecord}>
            Add Record
          </button>
        </div>
      </div>
    </div>
  );
};

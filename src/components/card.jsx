import React from "react";

const Card = ({ title, description, imagePath }) => {
  return (
    <div className="card mt-3">
      <img className="card-img-top" src={imagePath} alt="Houseplant" />
      <div className="card-body pt-1">
        <h4 className="card-title">{title}</h4>
        <div className="row">
          <div className="col-6 align-self-center">
            <p className="card-text">Details</p>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <button className="btn item-selected px-4">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

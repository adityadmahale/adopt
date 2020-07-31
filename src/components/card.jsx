import React from "react";

const Card = ({ title, description, imagePath }) => {
  return (
    <div className="card mt-3">
      <img className="card-img-top" src={imagePath} alt="Houseplant" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;

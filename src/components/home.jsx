import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="card">
      <img
        className="card-img-top home-img p-0"
        src="/home.jpg"
        alt="Houseplant"
      />
      <div className="card-body text-justify">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <Link className="btn item-selected px-4" to="/shop">
          Adopt
        </Link>
      </div>
    </div>
  );
};

export default Home;

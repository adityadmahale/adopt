import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-animation-components";

const Home = () => {
  return (
    <Fade in duration={400}>
      <div className="card">
        <img
          className="card-img-top home-img p-0"
          src="/home.jpg"
          alt="Houseplant"
        />
        <div className="card-body text-justify">
          <p>
            People lined their windowsills with greenery in increasing numbers
            after NASA released a series of studies dating back to the late
            ’80s. Its results suggested that, in addition to absorbing carbon
            dioxide and releasing oxygen through photosynthesis, certain common
            indoor plants may also provide a natural way of removing volatile
            organic pollutants (benzene, formaldehyde, and trichloroethylene
            were tested). Indoor plants have air-boosting and health benefits
            that you don’t have to create a wall-to-wall jungle to enjoy. Even a
            modest amount of foliage might enhance indoor air quality.
            Unfortunately, office plants are often discarded and abandoned in
            the alleys. This platform provides you an opportunity to adopt these
            indoor plants.
          </p>
          <Link className="btn item-selected px-4" to="/shop">
            Proceed
          </Link>
        </div>
      </div>
    </Fade>
  );
};

export default Home;

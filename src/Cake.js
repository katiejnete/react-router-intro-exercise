import React from "react";
import { Link } from "react-router-dom";

const Cake = () => {
  return (
    <>
      <img
        src="https://pbs.twimg.com/media/GQdficrXEAAfTTU.jpg:large"
        alt="miffy cake"
      />
      <button class="back">
        <Link to="/">go back home</Link>
      </button>
    </>
  );
};

export default Cake;

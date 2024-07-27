import React from "react";
import { Link } from "react-router-dom";

const Dango = () => {
  return (
    <>
      <img
        src="https://pbs.twimg.com/media/FyHPPeiWIAQnPli.png"
        alt="miffy dango"
      />
      <button class="back">
        <Link to="/">go back home</Link>
      </button>
    </>
  );
};

export default Dango;

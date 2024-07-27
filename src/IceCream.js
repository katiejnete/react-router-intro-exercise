import React from "react";
import { Link } from "react-router-dom";

const IceCream = () => {
  return (
    <>
      <img
        src="https://i.pinimg.com/736x/fa/33/ce/fa33cef121f3dcf0d7d6e5c2140abf8c.jpg"
        alt="miffy ice cream"
      />
      <button class="back">
        <Link to="/">go back home</Link>
      </button>
    </>
  );
};

export default IceCream;

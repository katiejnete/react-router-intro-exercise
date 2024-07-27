import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div class="home">
      <img
        src="https://ih1.redbubble.net/image.4980933645.9605/flat,750x,075,f-pad,750x1000,f8f8f8.u7.jpg"
        alt="vending machine home"
      />
      <h1>hi, i am vendy . what would you like to eat ?</h1>
      <ul>
        <li>
          <Link to="/cake">miffy cake</Link>
        </li>
        <li>
          <Link to="/ice-cream">miffy ice cream</Link>
        </li>
        <li>
          <Link to="/dango">miffy dango</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

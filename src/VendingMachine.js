import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Cake from "./Cake";
import IceCream from "./IceCream";
import Dango from "./Dango";
import "./VendingMachine.css";

const VendingMachine = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/cake" element={<Cake />} />
          <Route path="/ice-cream" element={<IceCream />} />
          <Route path="/dango" element={<Dango />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default VendingMachine;

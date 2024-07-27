import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import Cake from "./Cake"
import IceCream from "./IceCream"
import Dango from "./Dango"

const VendingMachine = () => {
  return (
    <>
      <BrowserRouter>
      <h1>hi, i am vendy . what would you like to eat ?</h1>
        <Routes>
          <Route path="/cake" element={<Cake/>} />
          <Route path="/ice-cream" element={<IceCream/>} />
          <Route path="/dango" element={<Dango/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default VendingMachine;

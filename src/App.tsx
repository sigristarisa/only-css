import React from "react";
import "./App.css";
import Diamond from "./components/Diamond/Diamond";
import Envelope from "./components/Envelope/Envelope";
import Pepsi from "./components/Pepsi/Pepsi";
import Camera from "./components/Camera/Camera";
import CoffeeMug from "./components/CoffeeMug/CoffeeMug";

const App: React.FC = () => {
  return (
    <div className='App'>
      <Diamond />
      <Envelope />
      <Pepsi />
      <CoffeeMug />
      <Camera />
    </div>
  );
};

export default App;

import React from "react";
import "./App.css";
import Diamond from "./components/Diamond/Diamond";
import Envelope from "./components/Envelope/Envelope";
import Pepsi from "./components/Pepsi/Pepsi";
import Camera from "./components/Camera/Camera";
import CoffeeMug from "./components/CoffeeMug/CoffeeMug";
import Batman from "./components/Batman/Batman";
import CaptainAmerica from "./components/CaptainAmerica/CaptainAmerica";

const App: React.FC = () => {
  return (
    <div className='App'>
      <Diamond />
      <Envelope />
      <Pepsi />
      <CaptainAmerica />
      <Camera />
      <CoffeeMug />
      <Batman />
    </div>
  );
};

export default App;

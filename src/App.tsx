import React from "react";
import "./App.css";
import Diamond from "./components/Diamond/Diamond";
import Envelope from "./components/Envelope/Envelope";
import Pepsi from "./components/Pepsi/Pepsi";
import Camera from "./components/Camera/Camera";
import CoffeeMug from "./components/CoffeeMug/CoffeeMug";
import Batman from "./components/Batman/Batman";
import CaptainAmerica from "./components/CaptainAmerica/CaptainAmerica";
import Gear from "./components/Gear/Gear";
import GitLogo from "./components/GitLogo/GitLogo";

const App: React.FC = () => {
  return (
    <div className='App'>
      <Diamond />
      <Envelope />
      <Pepsi />
      <Camera />
      <GitLogo />
      <CoffeeMug />
      <Batman />
      <CaptainAmerica />
      <Gear />
    </div>
  );
};

export default App;

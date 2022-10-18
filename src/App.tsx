import React from "react";
import "./App.css";
import Diamond from "./components/Diamond/Diamond";
import Envelope from "./components/Envelope/Envelope";
import Pepsi from "./components/Pepsi/Pepsi";

const App: React.FC = () => {
  return (
    <div className='App'>
      <Diamond />
      <Envelope />
      <Pepsi />
    </div>
  );
};

export default App;

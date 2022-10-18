import React from "react";
import "./App.css";
import Diamond from "./components/Diamond/Diamond";
import Envelope from "./components/Envelope/Envelope";

const App: React.FC = () => {
  return (
    <div className='App'>
      <Diamond />
      <Envelope />
    </div>
  );
};

export default App;

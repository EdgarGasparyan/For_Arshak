import React from "react";
import "./App.css";
import Btl from "./components/SectionA/Btl";
import { Atl } from "./components/SectionA/Atl";

function App() {
  return (
    <div>
      <section className="section_A">
        <Btl />
        <Atl />
      </section>
    </div>
  );
}

export default App;

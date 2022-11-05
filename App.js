import React from "react";
import Skills from "./skills";
import "./App.css";

function App() {
  return (
    <div className="skills-container">
      <Skills name="HTML" desc="HTML is used to put content on web-pages" />
      <Skills name="CSS" desc="CSS is used to style content" />
      <Skills name="JS" desc="JS is used to add behaviour for the content" />
    </div>
  );
}

export default App;

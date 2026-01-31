import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Preview from "./Preview";
const App = () => {
  const [Name, setName] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [LinkedIn, setLinkedIn] = useState("");

  const Values = {
  Name,
  Designation,
  Phone,
  Email,
  LinkedIn
};

  const handleChange = e => {
    const setField = {
    setName,
    setDesignation,
    setPhone,
    setEmail,
    setLinkedIn
};

    setField["set" + e.target.name](e.target.value);
  };
  console.log("VALUES:", Values);

  return (
    <div className={`App ${darkMode ? "dark-theme" : ""}`}>
      <Header Dark={darkMode}>Professional Card Maker</Header>
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
      <main>
        <Form Values={Values} onChange={handleChange} />
        <Preview Values={Values} />
      </main>
    </div>
  );
};
export default App;
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Header";
import { Homepage } from "./Homepage";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <Homepage searchTerm={searchTerm} />
    </div>
  );
}

export default App;

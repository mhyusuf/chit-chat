import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthorizedApp from "./apps/AuthorizedApp";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <AuthorizedApp />
    </BrowserRouter>
  );
}

export default App;

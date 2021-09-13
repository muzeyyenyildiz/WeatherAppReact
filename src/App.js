import React from "react";
import Weather from "./component/Weather";
import Header from "./component/Header";
import "./app.css";
import { MyProvider } from "./context/MyContext";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <MyProvider>
      <div className="app container-fluid">
        <Header />
        <Weather />
      </div>
    </MyProvider>
  );
};

export default App;

// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./components/About";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const changeAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleModeBlack = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#191A19";
      changeAlert("success", "Dark Mode has been enabled!");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      changeAlert("success", "Light Mode has been enabled!");
    }
  };

  const toggleModeBlue = () => {
    if (mode === "light") {
      setmode("primary");
      document.body.style.backgroundColor = "#1A374D";
      changeAlert("success", "Blue Dark Mode has been enabled!");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      changeAlert("success", "Light Mode has been enabled!");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleModeBlack={toggleModeBlack}
          toggleModeBlue={toggleModeBlue}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About/>}/>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter text to analyse"
                  mode={mode}
                  changeAlert={changeAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

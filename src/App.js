import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setAlert("Dark mode has been enabled", "success");
    }
  };
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      <Navbar title="TextUtility" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Form
          heading="Enter the text to analyze below"
          mode={mode}
          show={showAlert}
        />
      </div>
    </>
  );
}

export default App;

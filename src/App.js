import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { Fragment, useState } from 'react';
import Alert from './components/Alert';
import './App.css';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      message:message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes>
          <Route exact path="/about" element={<About/>}>
            
          </Route>
          
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>}>
          </Route>
    </Routes> */}
    <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
    </div>
    {/* </Router> */}
    </> 
  );
}

export default App;

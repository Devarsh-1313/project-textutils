
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from  './components/Alertt';





function App() {
  const [mode, setMode] =  useState("light");
  const [alert, setAlert] =  useState(null);
  
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = ()=>{
    if (mode === "light") {
      setMode ('dark');
      document.body.style.backgroundColor = "#042743"
      showAlert( " dark mode enabled", "succes")
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = "white"
      showAlert( " light mode enabled", " succes")
    }
  }
  return (
 <>
<Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}> </Alert>
<div className="container">
<TextForm showAlert={showAlert} textArea="Enter your text below " mode={mode}/>
<About mode={mode} toggleMode={toggleMode}/>  
</div>
   
   
 </>
  );
}

export default App;


import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const toggleMode=()=>{
    if(mode=="light"){
      setMode("dark");
      document.body.style.backgroundColor="#031e39";
      showAlert("dark mode has been enabled","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success")
    }
  }
  const[mode, setMode]=useState("light");
  const [alert,setAlert]=useState("null");
  const showAlert=(message,type)=>{
    setAlert({
    msg:message,
    type:type});
    setTimeout(()=>{
      setAlert(null)
    },1500);
    
  }
  return (
  <>
{/* <Router> */}
  <Navbar  title="Textutils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className='container my-3'>
   
  {/* <Routes>
  <Route exact path="/about" element={<About />} /> */}
  {/* <Route exact path="/" element={
          
        </Routes>
      </div>
    </Router> */}
    <TextForm  showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/></div>
    
    

  

  
  
 </>
    
  );
}

export default App;


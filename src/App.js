import './App.css';
import { useState } from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import $ from "jquery";
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode = () => {
    if (darkMode === 'dark') {
      setDarkMode('light')
      $('body').css('backgroundColor', 'white')
      $('body').css('color', 'black')
      showAlert('Dark mode has been Disabled', "success")
    } else {
      setDarkMode('dark')
      $('body').css('backgroundColor', 'black')
      $('body').css('color', 'white')
      showAlert('Dark mode has been Enabled', "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Text Converter" mode={darkMode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

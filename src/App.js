import './App.css';
import NavBar from './Components/NavBar/NavBar';
import React from 'react';
import Main from './Components/Home/HomePage';
import Education from './Components/Education/Education';
function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavBar/>
        <Main/>
        <Education/>
      </React.Fragment>
    </div>
  );
}

export default App;

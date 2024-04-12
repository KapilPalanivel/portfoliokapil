import './App.css';
import NavBar from './Components/NavBar/NavBar';
import React from 'react';
import Main from './Components/Home/HomePage';
function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavBar/>
        <Main/>
      </React.Fragment>
    </div>
  );
}

export default App;

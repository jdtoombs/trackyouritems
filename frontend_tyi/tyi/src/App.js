import React from 'react';
import './App.css';

import ItemList from './Components/ItemList';
import InvTable from './Components/InvTable';

function App() {
  return (
    <div className="App">
      <head>TrackYourItems</head>
      <header className="App-header">
        <h1>TrackYourItems</h1>
        <h3>Welcome</h3>
        <form>
          <label>
            Please enter your 64-bit ID:
            <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        <br></br>
        <a
          className="App-link"
          href="https://steamid.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to get your Steam 64-bit ID
        </a>
      </header>
      <InvTable />
      <ItemList/ >
    </div>
  );

  
}



export default App;

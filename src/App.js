import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";

const HatsPage = () => {
  return(
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/hats" component={HatsPage}/>
    </div>
  );
}

export default App;

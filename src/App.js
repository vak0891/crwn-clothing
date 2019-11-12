import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";
import ShopPage from './pages/shoppage/shoppage.component';

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/shop" component={ShopPage}/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";

import { BrowserRouter, Route } from "react-router-dom";




const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <div className="content">
            <Nav />
            <div className="main__content">
              <Route path="/profile" component={Profile}/>
              <Route path="/dialogs" component={Dialogs}/>

              {/* <Profile />
              <Dialogs /> */}
            </div>
          </div>
        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;

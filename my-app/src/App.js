  import React from 'react';
  import './App.css';
  import Header from './Components/Header/Header';
  import Nav from './Components/Navbar/Navbar';
  import Profile from './Components/Profile/Profile';
  import Dialogs from "./Components/Dialogs/Dialogs";






  const App = () => {
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <div className="content">
            <Nav/>
            <div className="main__content">
              <Profile/>
              <Dialogs/>
            </div>
          </div>
        </div>

      </div>
    );
  }

  export default App;

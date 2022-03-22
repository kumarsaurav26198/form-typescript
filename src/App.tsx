import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './Components/Navbar/Navbar';
import Main from './Components/Body/Main';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="container  pb-5">
      <Navbar/>
      <h1 className=" container">Registration form</h1>
      <Main/><br />
      <Footer/>
     
    </div>
  );
}

export default App;

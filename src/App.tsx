import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './Components/Navbar/Navbar';
import Main from './Components/Body/Main';
import Footer from './Components/Footer/Footer';
import Get from './Components/Body/Get';

function App() {
  return (
    <div className="container  pb-5">
      <Navbar />
      <h1 className=" container">Contact form</h1>
      <Main/>
      <br /> 
      <Get/>
      <Footer/>
     
    </div>
  );
}

export default App;

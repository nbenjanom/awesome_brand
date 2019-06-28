import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/index";
import HomeContainer from "./containers/HomeContainer";
import Footer from "./components/Footer/index";

class App extends React.Component {
  render(){
    return (
      <div className="app">
        <Navbar />
        <HomeContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
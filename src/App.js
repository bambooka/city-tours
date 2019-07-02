import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './component/Navbar/Navbar'
import TourList from './component/TourList/TourList'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TourList />
    </React.Fragment>
  );
}

export default App;
